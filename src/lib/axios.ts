import axios, { AxiosRequestConfig } from 'axios';

// Function to create an axios instance
export function createAxiosInstance(config?: AxiosRequestConfig) {
    const instance = axios.create({
        headers: { 'Content-Type': 'application/json' },
        ...config,
    });

    instance.interceptors.response.use(
        response => response.data,
        error => Promise.reject(error)
    );

    return instance;
}
