const apiKey = process.env.NEXT_PUBLIC_ZAPPER_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_ZAPPER_API_URL;

export async function gasPrice() {
  const prices = await request("v1/gas-price");
  return sanitizePrices(prices);
}

export async function transactions(address) {
  return await request("v1/transactions");
}

export async function stakedBalances(address) {
  const response = [];
  response << request("v1/transactions/single-staking");
  // response << request("v1/transactions/masterchef");
  // response << request("v1/transactions/geysey");
  // response << request("v1/transactions/gauge");
  console.log(response);
  return;
}

async function request(endpoint) {
  const response = await fetch(requestUrl(endpoint));
  const json = await response.json();
  return json;
}

function requestUrl(endpoint) {
  return apiUrl + endpoint + "?network=ethereum&api_key=" + apiKey;
}

function sanitizePrices(prices) {
  for (var speed in prices) {
    prices[speed] = Math.ceil(prices[speed]);
  }
  console.log("prices:", prices);
  return prices;
}
