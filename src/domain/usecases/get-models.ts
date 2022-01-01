import { Category } from "../models/category-model";

export interface GetCategories{
    get() : Promise<Category[]>
}