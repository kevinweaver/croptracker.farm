import { useState, useEffect } from "react";
import { stakedBalances, transactions } from "./utils/Zapper";
import { Crop } from "./Crop.tsx";

interface CombineProps {
  address: string;
}

/*
 * The Combine's job is to ingest on-chain data from Zapper and process Crops
 **/
export const Combine: React.SFC<CombineProps> = (props) => {
  const [address, setAddress] = useState("0x000");
  const [crops, setCrops] = useState<Crop[] | []>([]);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    setProcessing(true);
    processCrops().then((processedCrops) => {
      setCrops(processedCrops);
      setProcessing(false);
      processSeeds(processedCrops);
    });
  }, []);

  const processCrops = async () => {
    const balances = await stakedBalances(props.address);
    const processedCrops = [];

    balances[props.address].forEach((crop) => {
      processedCrops.push(processCrop(crop));
    });

    return processedCrops;
  };

  const processSeeds = async (crops) => {
    const allTransactions = await transactions(props.address);

    const processedSeeds = {};
    Object.keys(allTransactions).forEach((seed) => {
      console.log(seed["address"]);
    });
    return processSeeds;
  };

  const processSeed = (seed) => {};

  const processCrop = (crop) => {
    console.log(crop["label"]);
    return (
      <Crop
        name={crop["label"]}
        fieldName={fieldName(crop)}
        plantedData="12/12/21"
        seedCapital={100}
        plantingFeesETH={1}
        plantingFeesUSD={1}
        currentDPY={1}
        currentMPY={1}
        currentAPY={1}
        amountHarvested={1}
        amountHarvestedUSD={1}
        currentValueSeed={1}
        currentValueUSD={1}
        profitLossSeed={1}
        profitLossUSD={1}
      />
    );
  };

  const fieldName = (crop) => {
    crop.protocol;
  };

  return (
    <>
      {!processing &&
        crops?.map((crop, cropIdx) => (
          <tr
            key={cropIdx}
            className={cropIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
          >
            {crop}
          </tr>
        ))}
    </>
  );
};

Combine.defaultProps = {
  address: "",
};
