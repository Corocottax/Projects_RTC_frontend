export const API = async ({
  endpoint,
  method = "GET",
  url,
  body, 
  multipart
}) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  };

  if (multipart) {
    delete headers["Content-Type"];
  }

  const urlFetch = url ? url : import.meta.env.VITE_BASE_URL + endpoint;
  const bodyFetch = JSON.stringify(body); 

  const res = await fetch(urlFetch, {
    method,
    headers,
    body: multipart ? body : bodyFetch
  });

  const response = await res.json();

  return {
    status: res.status,
    response,
  };
};
