import axios, { AxiosResponse } from "axios";
import { AudiA } from "../models/audia";
import { AudiAce } from "../models/audiace";

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

const AudiAs = {
    list: () => requests.get<AudiA[]>('/AudiA'),
    details: (aa_id: number) => requests.get<AudiA>(`/AudiA/${aa_id}`),
    create: (audia: AudiAce) => requests.post<void>('/AudiA', audia),
    update: (audia: AudiA) => requests.put<void>(`/AudiA/${audia.aa_id}`, audia),
    delete: (aa_id: number) => requests.del<void>(`/AudiA/${aa_id}`),

}

const audiaagent ={
    AudiAs
}

export default audiaagent;