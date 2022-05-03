import axios, { AxiosAdapter, AxiosResponse } from "axios";
import { Salesperson } from "../models/salesperson";

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

const SalesPeople = {
    list: () => requests.get<Salesperson[]>('/SalesPeople'),
    details: (sp_id: number) => requests.get<Salesperson>(`/SalesPeople/${sp_id}`),
    create: (salesperson: Salesperson) => axios.post<void>('/SalesPeople', salesperson),
    update: (salesperson: Salesperson) => requests.put<void>(`/SalesPeople/${salesperson.sp_id}`, salesperson),
    delete: (sp_id: number) => requests.del<void>(`/SalesPeople/${sp_id}`),

}

const spagent ={
    SalesPeople
}

export default spagent;