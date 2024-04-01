import axios, { type AxiosResponse } from "axios";

class ListService {
    private readonly URL = "http://localhost:3000/";
    async getAll<T>(): Promise<AxiosResponse<T>> {
        return await axios.get(`${this.URL}task-lists`);
        // return data;
    }

    async addList<T, R>(params: T): Promise<AxiosResponse<R>> {
        return await axios.post(`${this.URL}task-lists`, params);
    }
}
export default new ListService();
