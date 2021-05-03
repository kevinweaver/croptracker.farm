import { gasPrice } from "./utils/Zapper";
import { FunctionComponent } from "react";

interface CropProps {
  name: string;
  symbol: string;
  fieldName: string;
  plantedDate: string;
  seedCapital: number;
  seedSymbol: string;
  plantingFeesETH: number;
  plantingFeesUSD: number;
  currentDPY: number;
  currentMPY: number;
  currentAPY: number;
  amountHarvested: number;
  amountHarvestedUSD: number;
  currentValue: number;
  currentValueUSD: number;
  profitLoss: number;
  profitLossUSD: number;
}

export const Crop: React.SFC<CropProps> = (props) => {
  const row = {
    name: "",
    symbol: "",
    fieldName: "",
    plantedDate: "",
    seedCapital: 1,
    seedSymbol: "",
    plantingFeesETH: 1,
    plantingFeesUSD: 1,
    currentDPY: 1,
    currentMPY: 1,
    currentAPY: 1,
    amountHarvested: 1,
    amountHarvestedUSD: 1,
    currentValue: 1,
    currentValueUSD: 1,
    profitLoss: 1,
    profitLossUSD: 1,
  };

  return (
    <>
      <td
        id={"name"}
        className="px-6 py-4 whitespace-nowrap text-sm font-medium"
      >
        <div className="text-sm text-gray-900">{row.name}</div>
      </td>
      <td
        id={"field"}
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      >
        {row.fieldName}
      </td>
      <td
        id={"planted"}
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      >
        <div className="text-sm text-gray-500">{row.plantedDate}</div>
      </td>
      <td
        id={"seed-capital"}
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      >
        <div className="text-sm text-gray-900">
          <span className="text-gray-400">{row.seedSymbol}</span>
          {row.seedCapital}
        </div>
      </td>
      <td
        id={"planting-fees"}
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      >
        <div className="text-sm text-red-900">
          {row.plantingFeesETH}{" "}
          {/* <span className="text-red-200">(total)</span> */}
        </div>
      </td>
      <td
        id={"current-yield"}
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      >
        {row.currentAPY}
      </td>
      <td
        id={"current-value"}
        className="px-6 py-4 whitespace-nowrap text-sm text-green-700"
      >
        {row.currentValue}
      </td>
      <td
        id={"profit-loss"}
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
      >
        {row.profitLoss}
      </td>
      <td
        id={"harvest"}
        className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
      >
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Harvest
        </a>
      </td>
    </>
  );
};
//  create an array of crops
//  Fetch transaction history

//  Loop through transactions
//
//    //create a hash of protocols from transaction["details"]["protocol"]
//    //loop through protocols
//      //fetch protocol balance
//      //create a hash of seed tokens via protocol["products"][0]["assets"][0]["tokens"][0]["symbol"]

//  //next, let's map seed tokens to transactions
//  //

Crop.defaultProps = {
  name: "",
  symbol: "",
  fieldName: "",
  plantedDate: "",
  seedCapital: 1,
  seedSymbol: "",
  plantingFeesETH: 1,
  plantingFeesUSD: 1,
  currentDPY: 1,
  currentMPY: 1,
  currentAPY: 1,
  amountHarvested: 1,
  amountHarvestedUSD: 1,
  currentValueSeed: 1,
  currentValueUSD: 1,
  profitLoss: 1,
  profitLossUSD: 1,
};