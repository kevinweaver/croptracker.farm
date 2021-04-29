import { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/outline";
import gasPrice from "./utils/Zapper";
import ping from "./utils/CoinGecko";

const hobbyFeatures = [
  "Pariatur quod similique",
  "Sapiente libero doloribus",
  "Vel ipsa esse repudiandae",
];
const scaleFeatures = [
  "Pariatur quod similique",
  "Sapiente libero doloribus",
  "Vel ipsa esse repudiandae",
];
const growthFeatures = [
  "Quia rem est sed impedit magnam",
  "Dolorem vero ratione voluptates",
  "Qui sed ab doloribus voluptatem dolore",
  "Laborum commodi molestiae id et fugiat",
  "Nam ut ipsa nesciunt culpa modi dolor",
];

export default function GasPrice(props) {
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
    return await gasPrice();
  };

  return (
    <>
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2
            className="text-lg leading-6 font-semibold \
          text-white uppercase tracking-wider text-shadow"
          >
            Gas Pricing
          </h2>
        </div>
      </div>

      <div className="mt-16 pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="inset-0 h-5/6 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-hobby"
                        >
                          Gardener
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="font-extrabold">
                              {gas?.standard || "00"}
                            </span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            gwei
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            Connect Wallet
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        Yield Farmer
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="font-extrabold">
                            {gas?.fast || "00"}
                          </span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">
                          gwei
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul className="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="#"
                          className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                          aria-describedby="tier-growth"
                        >
                          Connect Wallet
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-1xl font-medium text-gray-900"
                          id="tier-scale"
                        >
                          Agricultural Engineer
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="font-extrabold">
                              {gas?.instant || "00"}
                            </span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            gwei
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Connect Wallet
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
