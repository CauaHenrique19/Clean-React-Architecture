import { Product } from "../../../domain/models/product-model";
import { GetProducts } from "../../../domain/usecases/get-products";
import { HttpGetClient } from '../../protocols/http/http-get-client';

export class RemoteGetProducts implements GetProducts{
    constructor(
        private readonly url: string,
        private readonly httpGetClient: HttpGetClient
    ){}

    async get(): Promise<Product[]> {
        const response = await this.httpGetClient.get({ url: this.url })
        const products = response.body[0];

        return products;
    }
}