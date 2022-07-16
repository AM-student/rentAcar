import axios, { AxiosResponse } from "axios";
import { VWPassat } from "../models/vwpassat";
import { VWPassatce } from "../models/vwpassatce";

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

const VWPassats = {
    list: () => requests.get<VWPassat[]>('/VWPassat'),
    details: (vwp_id: number) => requests.get<VWPassat>(`/VWPassat/${vwp_id}`),
    create: (vwpassat: VWPassat) => requests.post<void>('/VWPassat', vwpassat),
    update: (vwpassat: VWPassat) => requests.put<void>(`/VWPassat/${vwpassat.vwp_id}`, vwpassat),
    delete: (vwp_id: number) => requests.del<void>(`/VWPassat/${vwp_id}`),

}

const vwpagent ={
    VWPassats
}

export default vwpagent;