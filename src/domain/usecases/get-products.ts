import { Product } from "../models/product-model";

export interface GetProducts{
    get() : Promise<Product[]>
}