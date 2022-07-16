import axios, { AxiosResponse } from "axios";
import { RollsRoyce } from "../models/rollsroyce";
import { RollsRoyceSe } from "../models/rollsroycese";

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

const RollsRoyces = {
    list: () => requests.get<RollsRoyce[]>('/RollsRoyce'),
    details: (rr_id: number) => requests.get<RollsRoyce>(`/RollsRoyce/${rr_id}`),
    create: (rollsroyce: RollsRoyceSe) => requests.post<void>('/RollsRoyce', rollsroyce),
    update: (rollsroyce: RollsRoyce) => requests.put<void>(`/RollsRoyce/${rollsroyce.rr_id}`, rollsroyce),
    delete: (rr_id: number) => requests.del<void>(`/RollsRoyce/${rr_id}`),

}

const rollsroyceagent ={
    RollsRoyces
}

export default rollsroyceagent;