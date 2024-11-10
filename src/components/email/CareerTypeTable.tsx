export function CareerTypeTable() {
  return (
    <table className="divide-y divide-gray-300">
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0"
          >
            Career Type
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Purpose
          </th>
          {/* <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Freq.
          </th> */}
          {/* <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Tony Robbins Gift
          </th> */}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <div className="flex flex-col">
              {/* <LightBulbIcon
                aria-hidden="true"
                className="mt-1 h-10 w-10 flex-none text-sky-600"
              /> */}
              <p className="text-sm font-semibold leading-6 text-gray-900">
                💡 Initiator
              </p>
            </div>
          </td>
          <td className="px-3 py-4 text-sm text-gray-500">
            Get things started
          </td>
          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            10%
          </td> */}
          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            Entrepreneur
          </td> */}
        </tr>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <div className="flex flex-col">
              {/* <PaintBrushIcon
                aria-hidden="true"
                className="mt-1 h-10 w-10 flex-none text-sky-600"
              />*/}
              <p className="text-sm font-semibold leading-6 text-gray-900">
                🖌️ Builder
              </p>
            </div>
          </td>
          <td className="px-3 py-4 text-sm text-gray-500">
            Do the work you love to do
          </td>
          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            66%
          </td> */}
          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            Artist / Skilled worker
          </td> */}
        </tr>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <div className="flex flex-col">
              {/* <KeyIcon
                aria-hidden="true"
                className="mt-1 h-10 w-10 flex-none text-sky-600"
              /> */}
              <p className="text-sm font-semibold leading-6 text-gray-900">
                🔑 Advisor
              </p>
            </div>
          </td>
          <td className="px-3 py-4 text-sm text-gray-500">
            Guide others to peak performance
          </td>
          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            23%
          </td> */}
          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            Manager / Leader
          </td> */}
        </tr>
        <tr>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
            <div className="flex flex-col">
              {/* <MagnifyingGlassIcon
                aria-hidden="true"
                className="mt-1 h-10 w-10 flex-none text-sky-600"
              /> */}
              <p className="text-sm font-semibold leading-6 text-gray-900">
                🔍 Evaluator
              </p>
            </div>
          </td>
          <td className="px-3 py-4 text-sm text-gray-500">
            Share how things are going
          </td>
          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            1%
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            N/A
          </td> */}
        </tr>
      </tbody>
    </table>
  )
}
