import axios, { AxiosResponse } from "axios";
import { Security } from "../models/security";
import { Securityce } from "../models/securityce";

const sleep = (delay: number) => {
    return new Promise ((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api'

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: <T>(url: string) =>axios.get<T>(url).then(responseBody),
    post: <T>(url: string,  body: {}) =>axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) =>axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) =>axios.delete <T>(url).then(responseBody),
}

const Securitys = {
    list: () => requests.get<Security[]>('/Security'),
    details: (security_id: number) => requests.get<Security>(`/Security/${security_id}`),
    create: (security: Securityce) => requests.post<void>('/Security', security),
    update: (security: Security) => requests.put<void>(`/Security/${security.security_id}`, security),
    delete: (security_id: number) => requests.del<void>(`/Security/${security_id}`),

}

const magent ={
    Securitys
}

export default magent;