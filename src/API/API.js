export const API = async ({
  CT = "application/json",
  endpoint,
  method = "GET",
  url
}) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": CT,
  };

  const urlFetch = url ? url : import.meta.env.VITE_BASE_URL + endpoint;

  const res = await fetch(urlFetch, {
    method,
    headers,
  });

  const response = await res.json();

  return {
    status: res.status,
    response,
  };
};
