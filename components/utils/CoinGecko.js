const apiUrl = process.env.NEXT_PUBLIC_COIN_GECKO_API_URL;

export default async function ping() {
  const requestUrl = apiUrl + "ping";

  const response = await fetch(requestUrl);
  const ping = await response.json();
  return ping;
}
