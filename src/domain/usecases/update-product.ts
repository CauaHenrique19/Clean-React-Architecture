import { Product } from "../models/product-model";

export interface UpdateProduct{
    update(params: UpdateProduct.Params) : Promise<Product>
}

export namespace UpdateProduct{
    export type Params = {
        id: number
        image: File
        name: string
        price: number
        description: string
        category_id: number
        key_image: string
        image_url: string
    }
}