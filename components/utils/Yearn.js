const apiUrl = process.env.NEXT_PUBLIC_YEARN_API_URL;

export async function vaultsApy() {
  const requestUrl = apiUrl + "vaults/all";

  const response = request(requestUrl);
  return response;
}

export async function request(requestUrl) {
  return await fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}
