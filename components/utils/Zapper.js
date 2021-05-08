const apiKey = "api_key=" + process.env.NEXT_PUBLIC_ZAPPER_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_ZAPPER_API_URL;
const network = "ethereum";
const networkParam = "network=" + network;

export async function gasPrice() {
  return sanitizePrices(await request("v1/gas-price"));
}

export async function transactions(address) {
  const requestUrl = apiUrl + "v1/transactions/" + address + "?" + apiKey;
  const response = await fetch(requestUrl);
  const json = await response.json();

  console.log(json);
  return json;
}

export async function stakedBalances(address) {
  return await request("v1/staked-balance/single-staking", address);
}

export async function yearnBalances(address) {
  let response = await protocolBalance("yearn", address);
  console.log("response", response);
  return response;
}

// WIP Too much differentiation to parse through
export async function protocolBalances(address) {
  // As of 5/8/21, the /protocols/balances endpoint doesn't actually return balances
  // so we must fetch them ourselves
  let networks = await protocolBalancesSupported(address);

  // find protocols with a balance
  let protocols = [];
  networks.forEach((curr) => {
    if (curr["network"] == network) {
      protocols.push(curr["protocols"]);
    }
  });

  protocols = protocols.flat();

  protocols.forEach(async (curr) => {
    let protocol = await protocolBalance(curr["protocol"], address);
    curr["balances"] = protocol[address]["products"];
  });

  console.log("protocols", protocols);

  return protocols;
}

async function protocolBalancesSupported(address) {
  return await request("v1/protocols/balances/supported", address);
}

async function protocolBalance(protocol, address) {
  return await request("v1/protocols/" + protocol + "/balances", address);
}

async function request(endpoint, address = "") {
  const response = await fetch(requestUrl(endpoint, address));
  const json = await response.json();
  //console.log("response: ", endpoint, address, json);
  return json;
}

function requestUrl(endpoint, address = "") {
  const optionalAddress = address ? "?addresses%5B%5D=" + address + "&" : "?";

  return apiUrl + endpoint + optionalAddress + networkParam + "&" + apiKey;
}

function sanitizePrices(prices) {
  for (var speed in prices) {
    prices[speed] = Math.ceil(prices[speed]);
  }
  return prices;
}
