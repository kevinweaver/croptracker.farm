const farms = [
  {
    crop: "yUSDC",
    field: "yearn",
    planted: "12/08/2020",
    seed: "$2000",
    fees: "$19",
    value: "$2162",
    yield: "14%",
    pl: "$21",
    status: "active",
  },
  {
    crop: "yETH",
    field: "yearn",
    planted: "1/1/2021",
    seed: "1.4",
    fees: "0.01",
    value: "1.42",
    yield: "5%",
    pl: "(0.01)",
    status: "harvested",
  },
  // More people...
];

export default function Dashboard() {
  return (
    <div className="mt-16 pb-12 lg:mt-20 lg:pb-20 flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Crop
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Field
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Planted
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Seed Capital
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Planting Fees
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Est. Harvest Fees
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Est. Break Even
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Current Yield
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Value
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    P/L
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {farms.map((farm, farmIdx) => (
                  <tr
                    key={farm.crop}
                    className={farmIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="text-sm text-gray-900">{farm.crop}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {farm.field}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="text-sm text-gray-500">
                        {farm.planted}
                      </div>
                      {/* <div className="text-sm text-gray-500">
                        {farm.planted}
                      </div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="text-sm text-gray-900">
                        {farm.seed}{" "}
                        {/* <span className="text-gray-400">(total)</span> */}
                      </div>
                      {/* <div className="text-sm text-gray-500">{farm.seed}</div>
                      <div className="text-sm text-gray-500">{farm.seed}</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="text-sm text-red-900">
                        {farm.fees}{" "}
                        {/* <span className="text-red-200">(total)</span> */}
                      </div>
                      {/* <div className="text-sm text-red-300">
                        {farm.fees}{" "}
                        <span className="text-red-200">(plant)</span>
                      </div>
                      <div className="text-sm text-red-300">
                        {farm.fees}{" "}
                        <span className="text-red-200">(plant)</span>
                      </div>
                      <div className="text-sm text-red-300">
                        {farm.fees}{" "}
                        <span className="text-red-200">(tilling)</span>
                      </div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="text-sm text-red-900">
                        {farm.fees}{" "}
                        {/* <span className="text-red-200">(total)</span> */}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {farm.planted}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700">
                      {farm.yield}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {farm.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {farm.pl}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Harvest
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
