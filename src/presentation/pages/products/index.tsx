import React, { useCallback, useEffect, useRef, useState } from "react"
import { Category } from "../../../domain/models/category-model"
import { Product } from "../../../domain/models/product-model"
import { GetCategories } from "../../../domain/usecases/get-models"
import { GetProducts } from "../../../domain/usecases/get-products"
import { PostProduct } from "../../../domain/usecases/post-product"
import { Modal } from "../../components/modal"
import { Container, ButtonsContainer, InputContainer, Label, Input, TextArea, Row, Select } from "../../styles/global"
import { 
    ButtonDelete, 
    ButtonEdit, 
    ButtonRegisterProduct, 
    Header, 
    HeaderProducts, 
    ImagePreviw, 
    ProductListItem, 
    ProductsContainer, 
    ProductsContent 
} from "./styles"

type Props = {
    getProducts: GetProducts
    postProduct: PostProduct
    getCategories: GetCategories
}

export const ProductsPage : React.FC<Props> = ({ getProducts, postProduct, getCategories }) => {

    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    const [id, setId] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [description, setDescription] = useState<string>("")
    const [category_id, setCategoryId] = useState<number>(0)
    const [image, setImage] = useState<File | null>()

    const [viewModal, setViewModal] = useState<Boolean>(false);
    const fileInput = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        if(!id && name){
            handleCreateProduct()
        }
        else if(id && name){
            handleEditProduct()
        }
        else{
            handleDeleteProduct()
        }
    }

    const handleGetProducts = useCallback(async () => {
        const productsApi = await getProducts.get();
        setProducts([...productsApi])
    }, [getProducts])

    const handleGetCategories = useCallback(async () => {
        const categoriesApi = await getCategories.get();
        setCategories([...categoriesApi])
    }, [getCategories])

    const handleCreateProduct = async () => {
        const productApi = await postProduct.post({ name, price, description, category_id, image: image! })
        console.log(productApi)
    }

    const handleEditProduct = () => {

    }

    const handleDeleteProduct = () => {

    }

    useEffect(() => { handleGetProducts() }, [handleGetProducts])
    useEffect(() => { handleGetCategories() }, [handleGetCategories, viewModal])

    return (
        <ProductsContainer>
            {
                viewModal &&
                <Modal 
                    title="Cadastrar produto"
                    handleClose={() => setViewModal(false)}
                    handleSubmit={() => handleSubmit()}
                >
                    <Row>
                        <InputContainer inRow={true} >
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" id="name" placeholder="Informe o nome" value={name} onChange={(e) => setName(e.target.value)}></Input>
                        </InputContainer>
                        <InputContainer inRow={true}>
                            <Label htmlFor="price">Preço</Label>
                            <Input type="number" id="price" placeholder="Informe o preço" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))}></Input>
                        </InputContainer>
                    </Row>
                    <InputContainer inRow={false} >
                        <Label htmlFor="category">Categoria</Label>
                        <Select id="category" value={category_id} onChange={(e) => setCategoryId(parseFloat(e.target.value))}>
                            <option value="0">Selecione a categoria</option>
                            {
                                categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))
                            }
                        </Select>
                    </InputContainer>
                    <Row>
                        <InputContainer inRow={true}>
                            <Label htmlFor="description">Descrição</Label>
                            <TextArea id="description" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)}></TextArea>
                        </InputContainer>
                        <InputContainer inRow={true}>
                            <Label htmlFor="image">Imagem</Label>
                            <input ref={fileInput} onChange={(e) => setImage(e.target.files![0])} type="file" hidden={true} />
                            <ImagePreviw id="image" onClick={(e) => fileInput.current && fileInput.current.click()}>
                                { !image && <i className="bi bi-image"></i> }
                                { !image && <h2>Clique aqui para selecionar a imagem!</h2> }
                                { image && <img src={URL.createObjectURL(image)} alt="imagem" /> }
                            </ImagePreviw>
                        </InputContainer>
                    </Row>
                </Modal>
            }
            <Header>
                <h1>Painel Administrador</h1>
            </Header>
            <Container>
                <HeaderProducts>
                    <h1>Produtos</h1>
                    <ButtonRegisterProduct onClick={() => setViewModal(true)}>Cadastrar Produto</ButtonRegisterProduct>
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