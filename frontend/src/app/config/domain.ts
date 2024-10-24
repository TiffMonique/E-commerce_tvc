import { AxiosRequestConfig } from "axios";

export const getDomain = (): string => {
       return "http://localhost:8000";
}

export const AXIOS_CONFIG: AxiosRequestConfig<any> = {
    withCredentials: true,
    baseURL: getDomain(),
}

export const domain = getDomain(); 