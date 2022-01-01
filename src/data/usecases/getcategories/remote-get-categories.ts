import { Category } from "../../../domain/models/category-model";
import { GetCategories } from "../../../domain/usecases/get-models";
import { HttpGetClient } from "../../protocols/http/http-get-client";

export class RemoteGetCategories implements GetCategories{
    constructor(
        private readonly url: string,
        private readonly httpGetClient: HttpGetClient
    ){}

    async get() : Promise<Category[]>{
        const response = await this.httpGetClient.get({ url: this.url })
        const categories = response.data;

        return categories;
    }
}