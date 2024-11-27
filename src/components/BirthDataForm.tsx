'use client'

import { SendWelcomeEmailProps, StoreChartProps } from '@/app/actions'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Chart } from '@/types/Chart'
import { GuideProps } from '@/types/GuideProps'
import { MaiaMechanicsResponse } from '@/types/MaiaMechanicsResponse'
import { User, UserData } from '@/types/User'
import { countries } from '@/utils/countries'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Select,
} from '@headlessui/react'
import {
  BackspaceIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/20/solid'
import { yupResolver } from '@hookform/resolvers/yup'
import _ from 'lodash'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import * as yup from 'yup'
import { ConfirmCreateChart } from './ConfirmCreateChart'

interface BirthDataFormProps {
  generateChartAction: (
    guideProps: GuideProps,
  ) => Promise<MaiaMechanicsResponse>
  storeUserAction: (user: UserData) => Promise<User>
  storeChartAction: ({ userId, chart, meta }: StoreChartProps) => Promise<Chart>
  sendWelcomeEmailAction: ({ user, chartId }: SendWelcomeEmailProps) => void
}

export function BirthDataForm({
  generateChartAction,
  storeUserAction,
  storeChartAction,
  sendWelcomeEmailAction,
}: BirthDataFormProps) {
  const [cityQuery, setCityQuery] = useState('')
  const [cities, setCities] = useState<string[]>([])
  const [timeZoneCities, setTimeZoneCities] = useState<TimeZones>()
  const [isSubmitting, setSubmitting] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)
  const router = useRouter()
  const [isConfirmationOpen, setConfirmationOpen] = useState(false)

  interface TimeZones {
    [name: string]: string[]
  }

  const schema = yup
    .object({
      firstName: yup.string().required().trim(),
      lastName: yup.string().required().trim(),
      email: yup.string().email().required().trim(),
      date: yup.string().required(),
      time: yup.string().required(),
      countryAbbr: yup.string().length(2).required(),
      city: yup.string().required().trim(),
      timezone: yup.string().required(),
      emailOptIn: yup
        .bool()
        .required('Emails are required.')
        .oneOf([true], 'Emails are required'),
    })
    .required()

  const {
    register,
    control,
    handleSubmit,
    setValue,
    resetField,
    watch,
    formState: { errors },
  } = useForm<GuideProps>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      date: '',
      time: '',
      countryAbbr: countries.find((c) => c.abbr === 'US')?.abbr,
      city: '',
      timezone: '',
      emailOptIn: false,
    },
    resolver: yupResolver(schema),
  })

  const countryAbbr = watch('countryAbbr')
  const city = watch('city')

  // Fetch the cities from the server
  useEffect(() => {
    async function fetchCities() {
      if (cityQuery.length === 0) {
        setCities([])
      } else if (cityQuery.length >= 2) {
        const params = new URLSearchParams([
          ['country', countryAbbr],
          ['search', cityQuery],
        ])

        // Abort any pending requests
        if (abortControllerRef.current) {
          abortControllerRef.current.abort('refetch')
        }

        // Create new abort controller
        const newAbortController = new AbortController()
        abortControllerRef.current = newAbortController

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('Accept', 'application/json; q=0.01')

        try {
          const response = await fetch(
            `https://app.maiamechanics.com/places-v1/cities?${params}`,
            {
              method: 'GET',
              headers,
              signal: newAbortController.signal,
            },
          )

          if (response.ok) {
            const data = (await response.json()) as TimeZones
            // console.log('response from cities', data)
            setTimeZoneCities(data)
            setCities(Object.values(data).flat())
          } else {
            console.error(`HTTP error, status = ${response.status}`)
          }
        } catch (error) {
          if (error === 'refetch') {
            // ignore
          } else {
            console.error('Error fetching cities:', error)
          }
        }
      }
    }

    fetchCities()
  }, [cityQuery])

  // Set the timezone field when the city changes
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'city' && timeZoneCities && !_.isEmpty(value.city)) {
        setValue(
          'timezone',
          Object.keys(timeZoneCities).find((tz) =>
            timeZoneCities?.[tz].includes(value.city!),
          )!,
        )
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, timeZoneCities])

  const resetCities = () => {
    resetField('city')
    setCities([])
    setTimeZoneCities(undefined)
  }

  const onSubmit = async (guideProps: GuideProps) => {
    console.log('submitting props', guideProps)
    setSubmitting(true)
    try {
      const mmiResponse = await generateChartAction(guideProps)
      console.log('Chart generated ... now sending')
      const user = await storeUserAction({
        firstName: guideProps.firstName,
        lastName: guideProps.lastName,
        email: guideProps.email,
        emailOptIn: guideProps.emailOptIn,
        isEmailVerified: false,
        emailToken: uuidv4(),
      })

      const chart = await storeChartAction({
        userId: user.id,
        chart: mmiResponse.chart,
        meta: mmiResponse.meta,
      })

      await sendWelcomeEmailAction({ user, chartId: chart.id })
      console.log('Welcome email sent.')
      router.push(`/chart/${chart.id}`)
    } catch (e) {
      console.error('Failure creating chart', e)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-sky-600">
                Ready?
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover your unique ✨ magic ✨
              </p>
            </div>
          </div>
          <p className="mt-12">
            Fill out the info on this page and we'll send you the secret to less
            frustration and more calm. You'll receive an email every day for the
            next 5 days, and at the end of it a special one-time bonus to
            continue your journey. 🎉
          </p>

          <form onSubmit={handleSubmit(() => setConfirmationOpen(true))}>
            <div className="mt-12 space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  You'll receive your guide via email.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        autoFocus
                        id="first-name"
                        type="text"
                        {...register('firstName')}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {errors.firstName && (
                        <div className="mt-2 text-sm text-red-600">
                          First name required
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        type="text"
                        {...register('lastName')}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {errors.lastName && (
                        <div className="mt-2 text-sm text-red-600">
                          Last name required
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      />
                      {errors.email && (
                        <div className="mt-2 text-sm text-red-600">
                          Email required
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Birth Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  We use your birth date, time, and place to craft your personal
                  guide. Please be as accurate as possible; it's worth calling
                  your mom ☎️
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Birth date
                    </label>
                    <div className="mt-2">
                      <input
                        id="date"
                        type="date"
                        max={new Date().toISOString().substring(0, 10)}
                        placeholder="Birth date"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        {...register('date')}
                      />
                    </div>
                    {errors.date && (
                      <div className="mt-2 text-sm text-red-600">
                        Birth date required
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Birth time
                    </label>
                    <div className="mt-2">
                      <input
                        id="time"
                        type="time"
                        placeholder="Birth time"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                        {...register('time')}
                      />
                    </div>
                    {errors.time && (
                      <div className="mt-2 text-sm text-red-600">
                        Birth time required
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Birth country
                    </label>
                    <div className="mt-2">
                      <Select
                        {...register('countryAbbr', {
                          onChange: () => resetCities(),
                        })}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-sm sm:text-sm sm:leading-6"
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
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Birth city
                    </label>
                    <div className="mt-2">
                      <Controller
                        name="city"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onBlur, onChange, value } }) => (
                          <div className="mt-2">
                            <Combobox value={value} onChange={onChange}>
                              <div className="relative mt-2">
                                <ComboboxInput
                                  className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                  onBlur={onBlur}
                                  onChange={(event) =>
                                    setCityQuery(event.target.value)
                                  }
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
                                    onClick={resetCities}
                                  >
                                    <BackspaceIcon
                                      aria-hidden="true"
                                      className="h-5 w-5"
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
                                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-sky-600 data-[focus]:text-white"
                                    >
                                      <span className="block truncate group-data-[selected]:font-semibold">
                                        {city}
                                      </span>
                                      <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-sky-600 group-data-[selected]:flex group-data-[focus]:text-white">
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
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Notifications
                </h2>

                <div className="mt-10 space-y-10">
                  <fieldset>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="emailOptIn"
                          type="checkbox"
                          {...register('emailOptIn')}
                          className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="emailOptIn"
                          className="font-medium text-gray-900"
                        >
                          Emails
                        </label>
                        <p className="text-gray-500">
                          I agree to receive emails. After the welcome email
                          sequence, we send out an email no more than a couple
                          times a week. Cancel anytime.
                        </p>
                        {errors.emailOptIn && (
                          <div className="mt-2 text-sm text-red-600">
                            {errors.emailOptIn.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button type="submit" color="sky" disabled={isSubmitting}>
                Let's go!
              </Button>
            </div>
          </form>
        </div>
      </Container>
      <ConfirmCreateChart
        open={isConfirmationOpen}
        setOpen={setConfirmationOpen}
        createChart={onSubmit}
        guideProps={watch()}
      />
    </>
  )
}
