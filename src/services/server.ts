import axios, { AxiosInstance } from "axios";

const apiUrl: AxiosInstance = axios.create({
  // baseURL: 'https://fund-vise-server.test/api/v1/',
  baseURL: "https://fundvize.com/api/v1/"
});

const server = (): AxiosInstance => {
  const token: string | null = localStorage.getItem('token');

  if (token) {
    apiUrl.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    apiUrl.defaults.timeout = 100000;
  }

  return apiUrl;
};

export default server;
