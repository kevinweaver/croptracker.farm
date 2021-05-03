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

  const [address, setAddress] = useState("0x000");
  const [crops, setCrops] = useState("0x000");
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    setProcessing(true);
    processCrops().then((processedCrops) => {
      setProcessing(false);
      setCrops(processedCrops);
    });
  }, []);

  const processCrops = async () => {
    console.log("staking address:", props.address);
    return await stakedBalances(props.address);
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
