import { RemoteGetCategories } from "../../../../data/usecases/getcategories/remote-get-categories";
import { RemoteGetProducts } from "../../../../data/usecases/getproducts/remote-get-products";
import { RemotePostProduct } from "../../../../data/usecases/postproduct/remote-post-product";
import { AxiosHttpClient } from "../../../../infra/axios-http-client"
import { ProductsPage } from "../../../../presentation/pages/products";

export const ProductsFactory = () => {
    const axiosHttpClient = new AxiosHttpClient()
    const api_url = process.env.REACT_APP_API_URL

    const remoteGetProducts = new RemoteGetProducts(
        `${api_url}/products`,
        axiosHttpClient
    )

    const remotePostProduct = new RemotePostProduct(
        `${api_url}/products`,
        axiosHttpClient
    )

    const remoteGetCategories = new RemoteGetCategories(
        `${api_url}/categories`,
        axiosHttpClient
    )

    return (
        <ProductsPage 
            getProducts={remoteGetProducts} 
            getCategories={remoteGetCategories} 
            postProduct={remotePostProduct} 
        />
    )
}