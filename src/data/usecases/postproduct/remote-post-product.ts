import { Product } from "../../../domain/models/product-model";
import { PostProduct } from "../../../domain/usecases/post-product";
import { HttpPostClient } from "../../protocols/http/http-post-client";

export class RemotePostProduct implements PostProduct{
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient
    ){}

    async post({ name, price, description, category_id, image } : PostProduct.Params) : Promise<Product[]> {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price.toString())
        formData.append('description', description)
        formData.append('category_id', category_id.toString())
        formData.append('image', image)

        const response = await this.httpPostClient.post({
            url: this.url,
            body: formData,
            headers: {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2NTg3MjUxfQ.JpXl6JZ_o-70gCPYEUzAsJwp0bR4ScBqo6-YpLmGURY",
                "admin": "true",
                "user_id": "3"
            }
        })

        return response.data
    }
}