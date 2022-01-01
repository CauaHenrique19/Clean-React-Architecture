import { RemoteGetProducts } from "../../../../data/usecases/getproducts/remote-get-products";
import { AxiosHttpClient } from "../../../../infra/axios-http-client"
import { ProductsPage } from "../../../../presentation/pages/products";

export const ProductsFactory = () => {
    const axiosHttpClient = new AxiosHttpClient()
    
    const remoteGetProducts = new RemoteGetProducts(
        'http://localhost:3001/products',
        axiosHttpClient
    )

    return <ProductsPage getProducts={remoteGetProducts} />
}