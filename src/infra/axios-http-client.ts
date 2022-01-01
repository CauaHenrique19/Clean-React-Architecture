import axios, { AxiosResponse } from "axios";
import { HttpGetClient } from "../data/protocols/http/http-get-client";

export class AxiosHttpClient implements HttpGetClient{
    async get(params: HttpGetClient.Params) : Promise<any> {
        let axiosReponse = {} as AxiosResponse ;

        try{
            axiosReponse = await axios.get(params.url, { headers: params.headers })
        }
        catch(error){
            console.log(error)
        }

        return axiosReponse
    }
}