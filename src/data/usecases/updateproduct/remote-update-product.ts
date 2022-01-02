import { Product } from "../../../domain/models/product-model";
import { UpdateProduct } from "../../../domain/usecases/update-product";
import { HttpPutClient } from "../../protocols/http/http-put-client";

export class RemoteUpdateProduct implements UpdateProduct{
    constructor(
        private readonly url: string,
        private readonly httpPutClient: HttpPutClient
    ){}

    async update({ id, name, price, description, category_id, key_image, image_url, image } : UpdateProduct.Params) : Promise<Product> {
        const formData = new FormData()
        formData.append('id', id.toString())
        formData.append('name', name)
        formData.append('price', price.toString())
        formData.append('description', description)
        formData.append('category_id', category_id.toString())
        formData.append('key_image', key_image)
        formData.append('image_url', image_url)
        formData.append('image', image)

        const response = await this.httpPutClient.put({
            url: `${this.url}/${id}`,
            body: formData,
            headers: {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2NTg3MjUxfQ.JpXl6JZ_o-70gCPYEUzAsJwp0bR4ScBqo6-YpLmGURY",
                "admin": "true",
                "user_id": "3"
            }
        })

        return response.data[0]
    }
}