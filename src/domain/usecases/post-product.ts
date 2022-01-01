import { Product } from "../models/product-model";

export interface PostProduct{
    post(params: PostProduct.Params) : Promise<Product[]>
}

export namespace PostProduct{
    export type Params = {
        image: File
        name: string
        price: number,
        description: string
        category_id: number
    }
}