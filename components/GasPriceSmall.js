import { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { gasPrice } from "./utils/Zapper";
import ping from "./utils/CoinGecko";

export default function GasPriceSmall(props) {
  const [gas, setGas] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchGas().then((fetchedGas) => {
      setLoading(false);
      setGas(fetchedGas);
    });
  }, []);

  const fetchGas = async () => {
    console.log(gasPrice());
    return await gasPrice();
  };

  return (
    <>
      <div className="mx-8 my-3 text-center">
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Gardener
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {gas?.standard || "00"}
              <span className="text-gray-500 text-sm"> gwei</span>
            </dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Yield Farmer
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {gas?.fast || "00"}
              <span className="text-gray-500 text-sm"> gwei</span>
            </dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Agriculturalist
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {gas?.instant || "00"}
              <span className="text-gray-500 text-sm"> gwei</span>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
