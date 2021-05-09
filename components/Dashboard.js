import GasPriceSmall from "../components/GasPriceSmall.js";
import { Combine } from "./Combine.tsx";
const demoAddress = process.env.NEXT_PUBLIC_DEMO_ADDRESS;

export default function Dashboard() {
  return (
    <>
      <div className="mt-16 mx-8 pb-12 lg:mt-20 lg:pb-20 flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <h2
            className="text-lg mb-8 leading-6 font-semibold text-center \
          text-white uppercase tracking-wider text-shadow"
          >
            Dashboard
          </h2>
          <label className="mt-6 mx-8 block text-md font-medium text-white text-shadow">
            Insert Address
          </label>
          <form
            action="#"
            method="POST"
            className="mx-8 flex gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="flex-1">
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-none">
              <button
                type="submit"
                className="px-6 py-3 block w-full border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Analyze Crops
              </button>
            </div>
          </form>

          <GasPriceSmall />
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Crop
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Field
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Planted
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Seed Capital
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Planting Fees
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      APY
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Value
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      P/L
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {/* The Combine processes rows of Crops given an address */}
                  <Combine address={demoAddress} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
