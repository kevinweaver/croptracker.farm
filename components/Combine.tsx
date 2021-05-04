import { useState, useEffect } from "react";
import { stakedBalances } from "./utils/Zapper";
import { Crop } from "./Crop.tsx";

interface CombineProps {
  address: string;
}

/*
 * The Combine's job is to ingest on-chain data from Zapper and process Crops
 **/
export const Combine: React.SFC<CombineProps> = (props) => {
  const [address, setAddress] = useState("0x000");
  const [crops, setCrops] = useState();
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    setProcessing(true);
    processCrops().then((processedCrops) => {
      console.log("crops finished processing", processedCrops);
      setCrops(processedCrops);
      setProcessing(false);
    });
  }, []);

  const processCrops = async () => {
    console.log("processing crops for :", props.address);
    const balances = await stakedBalances(props.address);
    console.log("processed crops:", balances);
    return balances;
  };

  const cropsStatic = [
    {
      name: "yUSDC",
      symbol: "",
      fieldName: "yearn",
      plantedDate: "12/12/21",
      seedCapital: 1,
      seedSymbol: "$",
      plantingFeesETH: 1,
      plantingFeesUSD: 1.1,
      currentDPY: 1,
      currentMPY: 1,
      currentAPY: 1,
      amountHarvested: 1,
      amountHarvestedUSD: 1,
      currentValueSeed: 1,
      currentValueUSD: 1,
      profitLossSeed: 1,
      profitLossUSD: 1,
    },
  ];

  return (
    <>
      {cropsStatic.map((crop, cropIdx) => (
        <tr
          key={crop.name}
          className={cropIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
        >
          <Crop name={crop.name}></Crop>
        </tr>
      ))}
    </>
  );
};

Combine.defaultProps = {
  address: "",
};
