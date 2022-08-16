import axios from "axios";
//import store from "../redux/store";

const baseURL = "http://localhost:8001/api";

const conn = () => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const setError = (error) => {
  console.error("Request error: ", error?.response?.data);
  if (error?.response?.status === 401) {
    error.message = `${error.message}. Login again please.`;
  } else {
    error.message = `${error.message}. ${error?.response?.data?.message}`;
  }
  throw error;
};

export const get = (path, params = {}) =>
  conn()
    .get(path, { params })
    .then((response) => response.data)
    .catch(setError);

export const post = (path, body) =>
  conn()
    .post(path, body)
    .then((response) => response.data)
    .catch(setError);

export const put = (path, body) =>
  conn()
    .put(path, body)
    .then((response) => response.data)
    .catch(setError);

export const remove = (path) =>
  conn()
    .delete(path)
    .then((response) => response.data)
    .catch(setError);

export const sendFile = (path, body) =>
  conn()
    .post(path, body, { headers: { "Content-Type": "multipart/form-data" } })
    .then((response) => response.data)
    .catch(setError);
