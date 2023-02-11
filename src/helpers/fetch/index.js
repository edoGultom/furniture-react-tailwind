export default function fetchData({
  url,
  method = "GET",
  host = process.env.REACT_APP_API_HOST,
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }).then(async (response) => {
    const jsonRes = await response.json();

    if (response.ok) return jsonRes;

    throw new Error(JSON.stringify(jsonRes));
  });
}
