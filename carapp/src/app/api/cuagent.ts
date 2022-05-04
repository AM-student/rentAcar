import axios, { AxiosResponse } from "axios";
import { Contact } from "../models/contact";
import { Contactce } from "../models/contactce";

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

const Contactus = {
    list: () => requests.get<Contact[]>('/ContactUs'),
    details: (cu_id: number) => requests.get<Contact>(`/ContactUs/${cu_id}`),
    create: (contact: Contactce) => requests.post<void>('/ContactUs', contact),
    update: (contact: Contact) => requests.put<void>(`/ContactUs/${contact.cu_id}`, contact),
    delete: (cu_id: number) => requests.del<void>(`/ContactUs/${cu_id}`),

}

const cuagent ={
    Contactus
}

export default cuagent;