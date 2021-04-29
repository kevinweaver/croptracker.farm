const apiKey = process.env.NEXT_PUBLIC_ZAPPER_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_ZAPPER_API_URL;

export default async function gasPrice() {
  const requestUrl = apiUrl + "v1/gas-price?network=ethereum&api_key=" + apiKey;

  const response = await fetch(requestUrl);
  const prices = await response.json();
  return sanitize(prices);
}

function sanitize(prices) {
  for (var price in prices) {
    prices[price] = Math.ceil(prices[price]);
  }
  return prices;
}
