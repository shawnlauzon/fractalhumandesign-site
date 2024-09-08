import { SimpleChartData } from '@/types/SimpleChart'
import hdChart from '@/utils/hd-chart'
import Link from 'next/link'

// Fetch data from the server
async function fetchCharts() {
  const response = await fetch(`https://fractalhumandesign.com/api/list-charts`)

  if (!response.ok) {
    throw new Error('Failed to fetch charts')
  }

  const charts = (await response.json()) as SimpleChartData[]
  return charts
}

export default async function ChartList() {
  const charts = await fetchCharts()

  // Handler for creating a contact
  //   const createContact = async (chart) => {
  //     const headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //     headers.append('Accept', 'application/json; q=0.01');

  //     try {
  //       await fetch('http://localhost:3000/api/create-ghl-contact', {
  //         method: 'POST',
  //         headers,
  //         body: JSON.stringify({ chartId: chart.id }),
  //       });
  //       console.log('Contact created for chart:', chart.id);
  //     } catch (error) {
  //       console.error('Error creating contact:', error);
  //     }
  //   };

  return (
    <table className="min-w-full border-collapse bg-white">
      <tbody>
        {charts.map((chart) => (
          <tr key={chart.id} className="border-b">
            <td className="px-4 py-2">
              <Link
                href={`/guide/${chart.id}`}
                className="text-sky-600 hover:underline"
              >
                {chart.user.firstName} {chart.user.lastName}
              </Link>
            </td>
            <td className="px-4 py-2">{chart.user?.email}</td>
            <td className="px-4 py-2">{hdChart(chart.chart).toString()}</td>
            {/* <td className="px-4 py-2">
              <button
                onClick={() => createContact(chart)}
                className="text-blue-500 hover:text-blue-700"
              >
                <span className="material-icons">cloud_upload</span>
              </button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
