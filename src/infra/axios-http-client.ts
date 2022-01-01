import axios, { AxiosResponse } from "axios";
import { HttpGetClient } from "../data/protocols/http/http-get-client";
import { HttpPostClient } from "../data/protocols/http/http-post-client";

export class AxiosHttpClient implements HttpGetClient, HttpPostClient {
    async get(params: HttpGetClient.Params) : Promise<any> {
        let axiosReponse = {} as AxiosResponse

        try{
            axiosReponse = await axios.get(params.url, { headers: params.headers })
        }
        catch(error){
            console.log(error)
        }

        return axiosReponse
    }

    async post (params: HttpPostClient.Params) : Promise<any> {
        let axiosReponse = {} as AxiosResponse

        try{
            axiosReponse = await axios.post(params.url, params.body, { headers: params.headers })
        }
        catch(error){
            console.log(error)
        }

        return axiosReponse
    }
}