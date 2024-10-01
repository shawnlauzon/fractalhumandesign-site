export const dynamic = 'force-dynamic' // static by default, unless reading the request

import activecampaign from '@api/activecampaign'
import _ from 'lodash'

import { Chart } from '@/types/Chart'
import { Client, fql, QuerySuccess } from 'fauna'
import { ACTIVE_CAMPAIGN_CUSTOM_FIELD_FAUNA_CHART_ID } from '../constants'

export async function POST(req: Request) {
  let httpResponse
  const params = await req.json()
  if (_.isEmpty(params)) {
    httpResponse = new Response('Expected body', { status: 400 })
  } else {
    console.log('store-chart params', params)

    // configure your client
    const client = new Client({
      secret: process.env.FAUNADB_SERVER_SECRET,
    })

    try {
      const query = fql`
        let user = User.byId(${params.userId})

        Chart.create({
          user: user,
          chart: ${params.chart},
          meta: ${params.meta}
        }) { id, chart }
      `

      const queryResponse: QuerySuccess<Chart> =
        await client.query<Chart>(query)

      const chartDoc: Chart = queryResponse.data
      console.log('Created Chart', chartDoc)

      try {
        await pushToActiveCampaign(params.activeCampaignUserId, chartDoc)
      } catch (e) {
        console.error('Failure creating ActiveCampaign tags', e)
      }

      httpResponse = new Response(JSON.stringify(chartDoc), {
        status: params.id ? 200 : 201,
      })
    } catch (error) {
      httpResponse = new Response(JSON.stringify(error), { status: 500 })
    } finally {
      // clean up any remaining resources
      client.close()
    }
  }
  return httpResponse
}

// Add the fauna chart ID to the user and tag with all of the chart details
// we might want to send emails about
async function pushToActiveCampaign(
  activeCampaignUserId: number,
  chart: Chart,
) {
  const allTags = (await activecampaign.retrieveAllTags()).data.tags ?? []

  const addTag = async (tagName: string) => {
    let tag = allTags.find((t) => t.tag === tagName)
    if (!tag) {
      tag = (
        await activecampaign.createANewTag({
          tag: {
            tag: tagName,
            tagType: 'contact',
          },
        })
      ).data.tag
    }

    return await activecampaign.createContactTag({
      contactTag: {
        contact: activeCampaignUserId,
        tag: Number.parseInt(tag!.id!),
      },
    })
  }

  const tags = [
    `type-${chart.type}`,
    `authority-${chart.authority}`,
    `definition-${chart.definition}`,
    ...chart.gates.map((g) => `gate-${g.gate}`),
    ...chart.channels.map((c) => `channel-${c}`),
    ...chart.centers.map((c, i) => `center-${i}-${c}`),
    ...chart.group.env.map((e) => `env-${e}`),
  ]

  const tagsAdded = await Promise.all([
    activecampaign.updateAContactNew({
      id: activeCampaignUserId,
      fieldValues: [
        {
          field: ACTIVE_CAMPAIGN_CUSTOM_FIELD_FAUNA_CHART_ID,
          value: chart.id,
        },
      ],
    }),
    ...tags.map(addTag),
  ])
  console.log('tagsAdded', tagsAdded)
}
