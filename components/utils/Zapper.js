const apiKey = "api_key=" + process.env.NEXT_PUBLIC_ZAPPER_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_ZAPPER_API_URL;
const network = "network=ethereum";

export async function gasPrice() {
  const prices = await request("v1/gas-price");
  return sanitizePrices(prices);
}

export async function stakedBalances(address) {
  return await request("v1/staked-balance/single-staking", address);
}

export async function transactions(address) {
  const requestUrl = apiUrl + "v1/transactions/" + address + "?" + apiKey;
  const response = await fetch(requestUrl);
  const json = await response.json();

  console.log("mine", requestUrl);
  console.log(
    "real",
    "https://api.zapper.fi/v1/transactions/0xb1adceddb2941033a090dd166a462fe1c2029484?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241"
  );
  console.log(json);
  return json;
}

async function request(endpoint, address = "") {
  const response = await fetch(requestUrl(endpoint, address));
  const json = await response.json();
  console.log("response: ", endpoint, address, json);
  return json;
}

function requestUrl(endpoint, address = "") {
  const optionalAddress = address ? "?addresses%5B%5D=" + address + "&" : "?";

  return apiUrl + endpoint + optionalAddress + network + "&" + apiKey;
}

function sanitizePrices(prices) {
  for (var speed in prices) {
    prices[speed] = Math.ceil(prices[speed]);
  }
  return prices;
}
