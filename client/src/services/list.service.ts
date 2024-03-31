import axios, { type AxiosResponse } from "axios";

class ListService {
    private readonly URL = "http://localhost:3000/";
    async getAll<T>(): Promise<AxiosResponse<T>> {
        return await axios.get(`${this.URL}task-lists`);
        // return data;
    }
}
export default new ListService();
