import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://reqres.in/api/";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.defaults.timeout = 5000;

export const getRequest = async (URL) => {
  return await axiosClient.get(`/${URL}`).then((response) => response);
};

export const postRequest = async (URL, payload) => {
  return await axiosClient
    .post(`/${URL}`, payload)
    .then((response) => response);
};

export const putRequest = async (URL, payload) => {
  return await axiosClient.put(`/${URL}`, payload).then((response) => response);
};

export const patchRequest = async (URL, payload) => {
  return await axiosClient
    .patch(`/${URL}`, payload)
    .then((response) => response);
};

export const deleteRequest = async (URL) => {
  return await axiosClient.delete(`/${URL}`).then((response) => response);
};
