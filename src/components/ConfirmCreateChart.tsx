'use client'

import { GuideProps } from '@/types/GuideProps'
import { countries } from '@/utils/countries'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { DateTime } from 'luxon'

type ConfirmCreateChartProps = {
  open: boolean
  setOpen: (open: boolean) => void
  guideProps?: GuideProps
  createChart: (guideProps: GuideProps) => Promise<void>
}

export function ConfirmCreateChart({
  open,
  setOpen,
  guideProps,
  createChart,
}: ConfirmCreateChartProps) {
  async function handleAction() {
    await createChart(guideProps!)
    setOpen(false)
  }
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            {guideProps && (
              <>
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-100 sm:mx-0 sm:h-10 sm:w-10">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-sky-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Create chart
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please confirm your info.
                      </p>
                      <div>
                        <div className="mt-6 border-t border-gray-100">
                          <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm/6 font-medium text-gray-900">
                                Email
                              </dt>
                              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {guideProps.email}
                              </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm/6 font-medium text-gray-900">
                                Birth date
                              </dt>
                              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {DateTime.fromISO(
                                  guideProps.date,
                                ).toLocaleString(DateTime.DATE_FULL)}
                              </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm/6 font-medium text-gray-900">
                                Birth time
                              </dt>
                              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {DateTime.fromISO(
                                  guideProps.time,
                                ).toLocaleString(DateTime.TIME_SIMPLE)}
                              </dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm/6 font-medium text-gray-900">
                                Birthplace
                              </dt>
                              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {guideProps.city
                                  .replace(' (', ', ')
                                  .replace(')', '')}
                                {guideProps.countryAbbr === 'US'
                                  ? ''
                                  : ', ' +
                                    countries.find(
                                      (c) => c.abbr === guideProps.countryAbbr,
                                    )?.name}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={handleAction}
                    className="inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Make changes
                  </button>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
