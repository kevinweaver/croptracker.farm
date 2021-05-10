import { useState } from "react";
import GasPriceSmall from "../components/GasPriceSmall.js";
import { Combine } from "./Combine.tsx";
const demoAddress = process.env.NEXT_PUBLIC_DEMO_ADDRESS;

export default function Dashboard() {
  const [showDemo, setShowDemo] = useState(false);
  const demoCrops = [
    {
      crop: "USDC Vault v2",
      field: "yearn",
      planted: "4052.87 USDC",
      seed: "$4053.63",
      fees: "$28.98",
      harvestFees: "$34.38",
      apy: "22.34%",
      value: "$4169.96",
      profitLoss: "$52.97",
      profit: true,
    },
    {
      crop: "yveCRV",
      field: "yearn",
      planted: "143 CRV",
      seed: "$491.92",
      fees: "$29.14",
      harvestFees: "$26.65",
      apy: "17.27%",
      value: "$579.86",
      profitLoss: "$32.15",
      profit: true,
    },
    {
      crop: "yUNI",
      field: "yearn",
      planted: "29 UNI",
      seed: "1128.39",
      fees: "$39.21",
      harvestFees: "$41.83",
      apy: "11.82%",
      value: "$1146.86",
      profitLoss: "-$62.57",
      profit: false,
    },
    {
      crop: "crvSTETH",
      field: "yearn",
      planted: "4 ETH",
      seed: "$15,127.97",
      fees: "$56.09",
      harvestFees: "$52.86",
      apy: "14.82%",
      value: "$15,553.08",
      profitLoss: "$316.16",
      profit: true,
    },
    {
      crop: "crvLINK",
      field: "yearn",
      planted: "21 LINK",
      seed: "$1,037.97",
      fees: "$72.09",
      harvestFees: "$62.10",
      apy: "8.25%",
      value: "$1,097.62",
      profitLoss: "-$74.54",
      profit: false,
    },
  ];

  const handleSubmit = () => {
    setShowDemo(true);
  };

  const demo = () => {
    return placeholderCrops(demoCrops);
  };

  const placeholderCrops = (crops) => {
    console.log(crops);
    return crops.map((crop, cropIdx) => (
      <tr
        key={cropIdx}
        className={cropIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
      >
        {placeholderCrop(crop)}
      </tr>
    ));
  };

  const placeholderCrop = (crop) => {
    return (
      <>
        <td
          id={"name"}
          className="px-6 py-4 whitespace-nowrap text-sm font-medium"
        >
          <div className="text-sm text-gray-900">{crop.crop}</div>
        </td>
        <td
          id={"field"}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          {crop.field}
        </td>
        <td
          id={"planted"}
          className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500"
        >
          <div className="text-sm text-gray-500">{crop.planted}</div>
        </td>
        <td
          id={"seed-capital"}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
        >
          <div className="text-sm text-right text-gray-900">{crop.seed}</div>
        </td>
        <td
          id={"planting-fees"}
          className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500"
        >
          <div className="text-sm text-red-900">{crop.fees}</div>
        </td>
        <td
          id={"current-yield"}
          className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500"
        >
          {crop.apy}
        </td>
        <td
          id={"current-value"}
          className="px-6 py-4 whitespace-nowrap text-right text-sm text-green-700"
        >
          <span className="text-right">{crop.value}</span>
        </td>
        <td
          id={"harvest-fees"}
          className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500"
        >
          <div className="text-sm text-red-900">{crop.harvestFees}</div>
        </td>
        {!crop.profit && (
          <td
            id={"profit-loss"}
            className="px-6 py-4 whitespace-nowrap text-right text-sm text-red-900"
          >
            {crop.profitLoss}
          </td>
        )}
        {crop.profit && (
          <td
            id={"profit-loss"}
            className="px-6 py-4 whitespace-nowrap text-right text-sm text-green-700"
          >
            {crop.profitLoss}
          </td>
        )}
        <td
          id={"harvest"}
          className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
        >
          <a href="#" className="text-yellow-500 hover:text-yellow-600">
            Harvest
          </a>
        </td>
      </>
    );
  };

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
          <div className="mx-8 flex gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="flex-1">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="given-name"
                placeholder="UNDER CONSTRUCTION!  DEMO DATA WILL BE DISPLAYED"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-none">
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-3 block w-full border border-transparent rounded-md shadow-sm text-base font-medium text-white text-shadow bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Process Crops
              </button>
            </div>
          </div>

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
                      Harvest Fees
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
                  {!showDemo && <Combine address={demoAddress} />}
                  {showDemo && demo()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
