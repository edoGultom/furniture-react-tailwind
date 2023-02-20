export default function fetchData({
  url,
  method = "GET",
  host = process.env.REACT_APP_API_HOST,
  body,
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body,
  }).then(async (response) => {
    const jsonRes = response.status == 200 ? await response.json() : response;
    if (response.ok) return jsonRes;
    throw new Error(JSON.stringify(jsonRes));
  });
}
