import axios, { AxiosResponse } from "axios";
import { Feedback } from "../models/feedback";
import { Feedbackce } from "../models/feedbackce";

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

const Feedbacks = {
    list: () => requests.get<Feedback[]>('/Feedback'),
    details: (fb_id: number) => requests.get<Feedback>(`/Feedback/${fb_id}`),
    create: (feedb: Feedbackce) => requests.post<void>('/Feedback', feedb),
    update: (feedb: Feedback) => requests.put<void>(`/Feedback/${feedb.fb_id}`, feedb),
    delete: (fb_id: number) => requests.del<void>(`/Feedback/${fb_id}`),

}

const fbagent ={
    Feedbacks
}

export default fbagent;