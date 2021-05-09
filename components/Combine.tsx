import { useState, useEffect } from "react";
import { protocolBalances, yearnBalances, transactions } from "./utils/Zapper";
import { vaultsApy } from "./utils/Yearn";
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
      setCrops(processedCrops["rows"]);
      setProcessing(false);
      processSeeds(processedCrops["hash"]);
    });
  }, []);

  const processCrops = async () => {
    const balances = await yearnBalances(props.address);
    //const apys = await vaultsApy();
    //console.log("apys", apys);
    let apyAddressMap = {};
    let processedCropRows = [];
    let processedCropArray = [];
    let processedCropHash = {};

    //build map of APY addresses
    //apys.forEach((apy) => {
    //  if (apy["symbol"].toUpperCase() == "USDT") {
    //    console.log("!!!!!!!!!!!!!!!!found usdt", apy["apy"]);
    //    console.log(apy);
    //  }
    //  apyAddressMap[apy["tokenAddress"].toUpperCase()] =
    //    apy["apy"]["oneMonthSample"];
    //});

    //console.log("apymap", apyAddressMap, Object.keys(apyAddressMap).length);
    //pluck assets from response
    let crops = balances[Object.keys(balances)[0]]["products"][0]["assets"];
    crops.forEach((crop) => {
      //cropAddress = crop[]
      //let apy = apyIfFound(crop, apyAddressMap);
      processedCropRows.push(processCrop(crop));
      processedCropArray.push(crop);
      processedCropHash[crop.address] = crop;
    });

    return {
      rows: processedCropRows,
      array: processedCropArray,
      hash: processedCropHash,
    };
  };

  const apyIfFound = (crop, apys) => {
    let cropAddress = crop["tokens"][0]["address"].toUpperCase();
    //let singleCropAddress = crop["tokensAddress"].toUpperCase();
    //console.log(cropAddress);
    if (cropAddress in apys) {
      //console.log("MATCH!", crop["label"], apys[cropAddress], cropAddress);
    }
    return apys[cropAddress];
  };

  const processSeeds = async (crops) => {
    const allTransactions = await transactions(props.address);
    let datesPlanted = [];
    let plantingFees = [];
    let seedCapital = 0;
    let processedSeeds = {};
    // date planted
    // seed capital
    // planting fees

    allTransactions.forEach((transaction) => {
      //look for transactions with an incoming + outgoing
      if (transaction["subTransactions"].length == 2) {
        // Loop though subtransactions
        transaction["subTransactions"].forEach((subTrans) => {
          if (subTrans["type"] == "incoming") {
            //see if the address exists in crops
            if (subTrans["address"] in crops) {
              let crop = crops[subTrans["address"]];

              //push the transaction onto the crop
              crop["transactions"] =
                "transactions" in crop
                  ? crop["transactions"].push(transaction)
                  : [transaction];
              console.log(crop["transactions"]);
            }
            //});
          }
        });
      }
    });
    return processSeeds;
  };

  const processCrop = (crop) => {
    return (
      <Crop
        name={crop["label"]}
        fieldName={fieldName(crop)}
        plantedData={"12/12/21"}
        seedCapital={1000}
        plantingFeesETH={1}
        plantingFeesUSD={1}
        currentDPY={1}
        currentMPY={1}
        currentAPY={4.2}
        amountHarvested={1}
        amountHarvestedUSD={1}
        currentValue={crop["balance"]}
        currentValueUSD={crop["balanceUSD"]}
        profitLossSeed={1}
        profitLossUSD={1}
      />
    );
  };

  const fieldName = (crop) => {
    return (
      crop["protocol"] || crop["protocolSymbol"] || crop["stakingStrategy"]
    );
  };

  const placeholderCrops = () => {
    let crops = [];
    for (var i = 0; i < 13; i++) crops.push(<Crop placeholder="true" />);
    return crops.map((crop, cropIdx) => (
      <tr
        key={cropIdx}
        className={cropIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
      >
        {crop}
      </tr>
    ));
  };

  return (
    <>
      {processing && placeholderCrops()}
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
