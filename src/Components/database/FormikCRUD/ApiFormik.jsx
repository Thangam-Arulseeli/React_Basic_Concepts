import axios from "axios";

const FormikApi = axios.create({
  baseURL: "http://localhost:3500"
});

/* ===== REQUEST INTERCEPTOR ===== */
FormikApi.interceptors.request.use(
  (config) => {
    console.log("Request:", config.url);
    config.headers.Authorization = "Bearer dummy-token";
    return config;
  },
  (error) => Promise.reject(error)
);

/* ===== RESPONSE INTERCEPTOR ===== */
FormikApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert("Unauthorized access");
    }
    return Promise.reject(error);
  }
);

export default FormikApi;
