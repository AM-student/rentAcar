import axios, { AxiosResponse } from "axios";
import { Manager } from "../models/manager";
import { Managerce } from "../models/managerce";

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

const Managers = {
    list: () => requests.get<Manager[]>('/Manager'),
    details: (manager_id: number) => requests.get<Manager>(`/Manager/${manager_id}`),
    create: (manager: Managerce) => requests.post<void>('/Manager', manager),
    update: (manager: Manager) => requests.put<void>(`/Manager/${manager.manager_id}`, manager),
    delete: (manager_id: number) => requests.del<void>(`/Manager/${manager_id}`),

}

const magent ={
    Managers
}

export default magent;