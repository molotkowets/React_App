import { type DefaultError, useQuery, type UseQueryResult } from "@tanstack/react-query";
import listService from "../services/list.service";
import { type AxiosResponse } from "axios";
interface IRequest {
    id: number;
    name: string;
}
export const getCategoriesByParams = (): UseQueryResult<AxiosResponse<IRequest[]>> => {
    return useQuery<AxiosResponse<IRequest[]>, DefaultError, AxiosResponse<IRequest[]>, [string]>({
        queryKey: ["lists"],
        queryFn: async () => {
            return await listService.getAll<IRequest[]>();
        },
    });
};
