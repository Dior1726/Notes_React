import axios from "axios";

const ApiService = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  paramsSerializer: { indexes: null },
});

ApiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      config.headers.Authorization = undefined;
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);

export default ApiService;
