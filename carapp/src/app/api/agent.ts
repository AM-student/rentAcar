import axios, { AxiosAdapter, AxiosResponse } from "axios";
import { User } from "../models/user";

const sleep = (delay: number) => {
    return new Promise ((resolve) => {
        setTimeout(resolve, delay)
    })
}

interface UserCE {
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    address: string;
    zip: number;
    usertype: string;
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

const Users = {
    list: () => requests.get<User[]>('/Users'),
    details: (user_id: number) => requests.get<User>(`/Users/${user_id}`),
    create: (user: UserCE) => requests.post<void>('/Users', user),
    update: (user: User) => requests.put<void>(`/Users/${user.user_id}`, user),
    delete: (user_id: number) => requests.del<void>(`/Users/${user_id}`),

}

const agent ={
    Users
}

export default agent;