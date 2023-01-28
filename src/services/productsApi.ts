import axios from "axios";

export const productsApi = axios.create({
  baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/",
  timeout: 10000,
});
