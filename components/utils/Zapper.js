const apiKey = process.env.NEXT_PUBLIC_ZAPPER_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_ZAPPER_API_URL;

export async function gasPrice() {
  const prices = await request("v1/gas-price");
  console.log("prices", sanitizePrices(prices));
  return sanitizePrices(prices);
}

export async function transactions(address) {
  return await request("v1/transactions");
}

export async function stakedBalances(address) {
  const response = [];
  response << request("v1/staked-balance/single-staking", address);
  // response << request("v1/staked-balance/masterchef");
  // response << request("v1/staked-balance/geysey");
  // response << request("v1/staked-balance/gauge");
  console.log("stakedBalances", response);
  return;
}

async function request(endpoint, address = "") {
  const response = await fetch(requestUrl(endpoint, address));
  const json = await response.json();
  return json;
}

function requestUrl(endpoint, address = "") {
  const optionalAddress = address ? "?addresses%5B%5D=" + address : "";
  console.log("addresses:", address, optionalAddress);

  return (
    apiUrl + endpoint + optionalAddress + "?network=ethereum&api_key=" + apiKey
  );
}

function sanitizePrices(prices) {
  for (var speed in prices) {
    prices[speed] = Math.ceil(prices[speed]);
  }
  return prices;
}
