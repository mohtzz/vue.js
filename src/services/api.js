import axios from "axios";
import keycloakService from "@/services/keycloak";

// Creating an instance for axios to be used by the token interceptor service
const instance = axios.create({
    baseURL: `http://localhost:8084/api/v1/demo`,
    headers: {
       "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    async (config) => {
        await setAuthHeader(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const setAuthHeader = async (config) => {
    
    const token = await keycloakService.CallTokenRefresh(); // Получаем токен
    if (token) {
        config.headers.Authorization = 'Bearer ' + token; // Устанавливаем заголовок
    } else {
        console.error("No token available, user might not be authenticated.");
    }
};

export default instance;