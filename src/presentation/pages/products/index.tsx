import { useCallback, useEffect, useState } from "react"
import { Product } from "../../../domain/models/product-model"
import { GetProducts } from "../../../domain/usecases/get-products"
import { Container } from "../../styles/global"
import { 
    ButtonDelete, 
    ButtonEdit, 
    ButtonRegisterProduct, 
    ButtonsContainer, 
    Header, 
    HeaderProducts, 
    ProductListItem, 
    ProductsContainer, 
    ProductsContent 
} from "./styles"

type Props = {
    getProducts: GetProducts
}

export const ProductsPage : React.FC<Props> = ({ getProducts }) => {

    const [products, setProducts] = useState<Product[]>([])

    const handleGetProducts = useCallback(async () => {
        const productsApi = await getProducts.get();
        setProducts([...productsApi])
    }, [])

    useEffect(() => {
        handleGetProducts()
    }, [handleGetProducts])

    return (
        <ProductsContainer>
            <Header>
                <h1>Painel Administrador</h1>
            </Header>
            <Container>
                <HeaderProducts>
                    <h1>Produtos</h1>
                    <ButtonRegisterProduct>Cadastrar Produto</ButtonRegisterProduct>
                </HeaderProducts>
                <ProductsContent>
                    {
                        products.map((product) => (
                            <ProductListItem key={product.id}>
                                <img src={product.image_url} alt={product.name.length > 50 ? `${product.name.substring(0, 50)}...` : product.name}/>
                                <h2>{product.name.length > 50 ? `${product.name.substring(0, 50)}...` : product.name}</h2>
                                <h2>
                                    {
                                        parseFloat(product.price.toString())
                                            .toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
                                    }
                                </h2>
                                <h2>{product.category_name}</h2>
                                <ButtonsContainer>
                                    <ButtonEdit><i className="bi bi-pencil-square"></i></ButtonEdit>
                                    <ButtonDelete><i className="bi bi-trash"></i></ButtonDelete>
                                </ButtonsContainer>
                            </ProductListItem>
                        ))
                    }
                </ProductsContent>
            </Container>
        </ProductsContainer>
    )
}