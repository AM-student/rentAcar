import axios, { AxiosResponse } from "axios";
import { VWGolf } from "../models/vwgolf";
import { VWGolfce } from "../models/vwgolfce";

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

const VWGolfs = {
    list: () => requests.get<VWGolf[]>('/VWGolf'),
    details: (vwg_id: number) => requests.get<VWGolf>(`/VWGolf/${vwg_id}`),
    create: (vwgolf: VWGolfce) => requests.post<void>('/VWGolf', vwgolf),
    update: (vwgolf: VWGolf) => requests.put<void>(`/VWGolf/${vwgolf.vwg_id}`, vwgolf),
    delete: (vwg_id: number) => requests.del<void>(`/VWGolf/${vwg_id}`),

}

const vwgagent ={
    VWGolfs
}

export default vwgagent;