'use client'

import { countries } from '@/utils/countries'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Input,
  Select,
} from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
// import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useRef, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const BirthDataForm = () => {
  const [cities, setCities] = useState<string[]>([])
  const [isCitiesLoading, setCitiesLoading] = useState(false)
  const [timeZoneCities, setTimeZoneCities] = useState<Map<string, string[]>>()
  const [isSubmitting, setSubmitting] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)

  type Inputs = {
    date: string
    time: string
    countryAbbr: string
    city: string
  }

  const schema = yup
    .object({
      date: yup.string().required(),
      time: yup.string().required(),
      countryAbbr: yup.string().length(2).required(),
      city: yup.string().required(),
    })
    .required()

  const {
    register,
    control,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      date: '',
      time: '',
      countryAbbr: countries.find((c) => c.abbr === 'US')?.abbr,
      city: '',
    },
    resolver: yupResolver(schema),
  })

  const countryAbbr = watch('countryAbbr')
  const city = watch('city')

  useEffect(() => {
    return () => {
      // Cleanup function to abort any pending requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  // Fetch cities based on input
  const fetchCities = async (cityQuery: string) => {
    if (cityQuery.length === 0) {
      setCities([])
    } else if (cityQuery.length >= 2) {
      const params = new URLSearchParams([
        ['country', countryAbbr],
        ['search', cityQuery],
      ])

      // Abort any pending requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      // Create new abort controller
      const newAbortController = new AbortController()
      abortControllerRef.current = newAbortController

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('Accept', 'application/json; q=0.01')

      try {
        setCitiesLoading(true)
        const response = await fetch(
          `https://app.maiamechanics.com/places-v1/cities?${params}`,
          {
            method: 'GET',
            headers,
            signal: newAbortController.signal,
          },
        )

        if (response.ok) {
          const data = (await response.json()) as Map<string, string[]>
          console.log('response from cities', data)
          setTimeZoneCities(data)
          setCities(Object.values(data).flat())
        } else {
          console.error(`HTTP error, status = ${response.status}`)
        }
      } catch (error) {
        console.error('Error fetching cities:', error)
      } finally {
        setCitiesLoading(false)
      }
    }
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitting(true)

    const maiaHeaders = new Headers()
    maiaHeaders.append('Calculator-Token', process.env.REACT_APP_MAIA_API_KEY!)
    maiaHeaders.append('Content-Type', 'application/json')

    const timeZone =
      timeZoneCities && data.city
        ? Object.keys(timeZoneCities).find((tz) => tz.includes(data.city))
        : null

    const raw = JSON.stringify({
      tzData: {
        country: data.countryAbbr,
        city: data.city,
        timezone: timeZone,
        timeInUtc: false,
        time: `${data.date}T${data.time}Z`,
      },
      data: {
        city: {
          name: data.city,
          timezone: timeZone,
          tz: timeZone,
        },
        country: {
          id: data.countryAbbr,
          name: countries.find((c) => c.abbr === data.countryAbbr)?.name,
        },
        date: data.date,
        time: `${data.date}T${data.time}Z`,
      },
    })
    console.log('raw', raw)

    try {
      const response = await fetch(
        'https://app.maiamechanics.com/api-v2/api/web-calculator/server-side-generation',
        {
          method: 'POST',
          headers: maiaHeaders,
          body: raw,
          redirect: 'follow',
        },
      )

      if (!response.ok)
        throw new Error(`HTTP error, status = ${response.status}`)

      const respData = await response.json()

      if (respData.chart) {
        const localHeaders = new Headers()
        localHeaders.append('Content-Type', 'application/json')

        // Store user and chart
        try {
          const storeUserResp = await fetch('/api/store-user', {
            method: 'POST',
            headers: localHeaders,
            body: '{}',
          })
          const newUser = await storeUserResp.json()

          const storeChartResp = await fetch('/api/store-chart', {
            method: 'POST',
            headers: localHeaders,
            body: JSON.stringify({
              userId: newUser.id,
              chart: respData.chart,
              meta: respData.meta,
            }),
          })

          const newChart = await storeChartResp.json()
          // onChart(newChart.id);
        } catch (e) {
          console.error('Could not save:', e)
        }
      }
    } catch (error) {
      console.error('Error during chart generation:', error)
    } finally {
      setSubmitting(false)
    }
  }

  // Computed properties
  // const dateFormatted = date ? dateFormatter.format(new Date(date + 'T00:00:00')) : '';
  // const timeFormatted = time ? timeFormatter.format(new Date('1970-01-01T' + time)) : '';
  // const timePickerFormat = timeFormatter.resolvedOptions().hour12 ? 'ampm' : '24hr';
  // const timeZone =
  //   timeZoneCities && city ? Object.keys(timeZoneCities).find((tz) => timeZoneCities[tz].includes(city)) : null;
  // const isComplete = date && time && country && city;

  useEffect(() => {
    // Equivalent to Vue's `mounted` hook
    console.log('Mounted and tracking pageview')
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="my-6">
        <h2 className="mb-6 text-2xl">Birth Information</h2>
        <p>To start, we need to know when and where you were born.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="inputlabel">
              Birth date
            </label>
            <div className="mt-2">
              <input
                id="date"
                type="date"
                placeholder="Birth date"
                className="inputform"
                autoFocus
                {...register('date')}
              />
            </div>
            {errors.date && (
              <div className="mt-2 text-sm text-red-600">
                Birth date required
              </div>
            )}
          </div>

          <div>
            <label htmlFor="time" className="inputlabel">
              Birth time
            </label>
            <div className="mt-2">
              <input
                id="time"
                type="time"
                placeholder="Birth time"
                className="inputform"
                {...register('time')}
              />
            </div>
            {errors.time && (
              <div className="mt-2 text-sm text-red-600">
                Birth time required
              </div>
            )}
          </div>
          <div>
            <label htmlFor="countryCode" className="inputlabel">
              Birth country
            </label>
            <Select
              {...register('countryAbbr', {
                onChange() {
                  resetField('city')
                  setCities([])
                },
              })}
              className="inputselect"
            >
              <option key={''} value={''}></option>
              {[
                ...countries.map((country) => (
                  <option key={country.abbr} value={country.abbr}>
                    {country.name}
                  </option>
                )),
              ]}
            </Select>
            {errors.countryAbbr && (
              <div className="mt-2 text-sm text-red-600">
                Birth country required
              </div>
            )}
          </div>

          <div>
            <label htmlFor="city" className="inputlabel">
              Birth city
            </label>

            <Controller
              name="city"
              control={control}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <div className="mt-2">
                  <Combobox value={value} onChange={onChange}>
                    <div className="relative mt-2">
                      <ComboboxInput
                        className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onBlur={onBlur}
                        onChange={(event) => fetchCities(event.target.value)}
                      />
                      {cities.length > 0 && (
                        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </ComboboxButton>
                      )}

                      {city && (
                        <button
                          type="button"
                          className="absolute inset-y-0 right-5 flex items-center pr-3"
                          onClick={() => {
                            resetField('city')
                            setCities([])
                          }}
                        >
                          <XMarkIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-red-500"
                          />
                        </button>
                      )}

                      <ComboboxOptions
                        anchor="bottom"
                        className="w-100 absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      >
                        {cities.map((city, index) => (
                          <ComboboxOption
                            key={index}
                            value={city}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                          >
                            <span className="block truncate group-data-[selected]:font-semibold">
                              {city}
                            </span>
                            <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          </ComboboxOption>
                        ))}
                      </ComboboxOptions>
                    </div>
                  </Combobox>
                  {errors.city && (
                    <div className="mt-2 text-sm text-red-600">
                      Birth city required
                    </div>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        <Input
          type="submit"
          className={`mt-6 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ${
            isSubmitting ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={isSubmitting}
        >
          {/* {isSubmitting ? 'Loading...' : 'Next'} */}
        </Input>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  )
}

export default BirthDataForm
