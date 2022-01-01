import React, { useCallback, useEffect, useRef, useState } from "react"
import { Product } from "../../../domain/models/product-model"
import { GetProducts } from "../../../domain/usecases/get-products"
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
}

export const ProductsPage : React.FC<Props> = ({ getProducts }) => {

    const [products, setProducts] = useState<Product[]>([])

    const [id, setId] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [description, setDescription] = useState<string>("")
    const [category_id, setCategoryId] = useState<number>(0)
    const [image, setImage] = useState<File | null>()

    const [viewModal, setViewModal] = useState<Boolean>(false);
    const fileInput = useRef<HTMLInputElement>(null)

    const handleGetProducts = useCallback(async () => {
        const productsApi = await getProducts.get();
        setProducts([...productsApi])
    }, [getProducts])

    useEffect(() => { handleGetProducts() }, [handleGetProducts])

    return (
        <ProductsContainer>
            {
                viewModal &&
                <Modal 
                    title="Cadastrar produto"
                    handleClose={() => setViewModal(false)}
                    handleSubmit={() => {}}
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
                            <ImagePreviw id="image" 
                                onClick={(e) => {
                                    fileInput.current && fileInput.current.click()
                                    console.log(e.target)
                                }}
                            >
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