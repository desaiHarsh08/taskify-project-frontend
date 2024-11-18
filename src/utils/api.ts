import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: true,
});

// axiosInstance.interceptors.request.use(
//     (config) => {
//         // const { accessToken } = useAuth();
//         // if (accessToken) {
//         //     config.headers.Authorization = `Bearer ${accessToken}`;
//         // }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

export default axiosInstance;
