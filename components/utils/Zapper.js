const apiKey = process.env.NEXT_PUBLIC_ZAPPER_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_ZAPPER_API_URL;

export async function gasPrice() {
  const prices = await request("v1/gas-price");
  console.log("prices", sanitizePrices(prices));
  return sanitizePrices(prices);
}

export async function transactions(address) {
  return await request("v1/transactions", address);
}

export async function stakedBalances(address) {
  console.log("fetching stakedBalance", address);
  return await request("v1/staked-balance/single-staking", address);
  // response << request("v1/staked-balance/masterchef");
  // response << request("v1/staked-balance/geysey");
  // response << request("v1/staked-balance/gauge");
}

async function request(endpoint, address = "") {
  console.log("requesting", requestUrl(endpoint, address));
  console.log(
    "REQUESTING https://api.zapper.fi/v1/staked-balance/single-staking?addresses%5B%5D=0xb1adceddb2941033a090dd166a462fe1c2029484&network=ethereum&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241"
  );
  const response = await fetch(requestUrl(endpoint, address));
  const json = await response.json();
  console.log(json);
  return json;
}

function requestUrl(endpoint, address = "") {
  const optionalAddress = address ? "?addresses%5B%5D=" + address + "&" : "?";
  console.log("addresses:", address, optionalAddress);

  return (
    apiUrl + endpoint + optionalAddress + "network=ethereum&api_key=" + apiKey
  );
}

function sanitizePrices(prices) {
  for (var speed in prices) {
    prices[speed] = Math.ceil(prices[speed]);
  }
  return prices;
}
