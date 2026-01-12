import { http } from "./http";
import { type AxiosRequestConfig } from 'axios'

export const ApiService = {
    get: async <T>(resource: string, options?: AxiosRequestConfig): Promise<T> => {
        const { data } = await http.get<T>(resource, options);
        return data;
    },

    post: async <T, R>(resource: string, payload?: T, options?: AxiosRequestConfig): Promise<R> => {
        const { data } = await http.post<R>(resource, payload, options);
        return data;
    },

    put: async <T, R>(resource: string, payload?: T, options?: AxiosRequestConfig): Promise<R> => {
        const { data } = await http.put<R>(resource, payload, options);
        return data;
    },

    patch: async <T, R>(resource: string, payload?: T, options?: AxiosRequestConfig): Promise<R> => {
        const { data } = await http.patch<R>(resource, payload, options);
        return data;
    },

    delete: async <T>(resource: string, options?: AxiosRequestConfig): Promise<T> => {
        const { data } = await http.delete<T>(resource, options);
        return data;
    }
}