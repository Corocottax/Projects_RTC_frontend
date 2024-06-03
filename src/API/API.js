export const API = async ({
  endpoint,
  method = "GET",
  url,
  body
}) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  };

  const urlFetch = url ? url : import.meta.env.VITE_BASE_URL + endpoint;
  const bodyFetch = JSON.stringify(body); 

  const res = await fetch(urlFetch, {
    method,
    headers,
    body: bodyFetch
  });

  const response = await res.json();

  return {
    status: res.status,
    response,
  };
};
