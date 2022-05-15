import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import API_LINK from '../data/links';
import { Oval } from "react-loader-spinner";

import logo from "../assets/logofanstore.png"
import userIcon from "../assets/iconuser.png"
import cartIcon from "../assets/iconcart.png"
import homeIcon from "../assets/iconhome.png"
import ordersIcon from "../assets/iconorder.png"


export default function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [franchises, setFranchises] = useState([]);

    useEffect(() => {
        const promise = axios.get(`${API_LINK}/products`);
        promise.then((res) => {
            setLoading(false)
            setProducts(res.data);
        })
        promise.catch(() => {
            alert('Não foi possível carregar os produtos.')
            setLoading(false)
        })
    }, []);

    useEffect(() => {
        const promise = axios.get(`${API_LINK}/categories`);
        promise.then((res) => {
            setLoading(false)
            setCategories(res.data);
        })
        promise.catch(() => {
            alert('Não foi possível carregar as categorias.')
            setLoading(false)
        })
    }, []);

    useEffect(() => {
        const promise = axios.get(`${API_LINK}/franchises`);
        promise.then((res) => {
            setLoading(false)
            setFranchises(res.data);
        })
        promise.catch(() => {
            alert('Não foi possível carregar as franquias.')
            setLoading(false)
        })
    }, []);

    console.log(products)

    return (
        <>
            <Header>
                <Container>
                    <img src={logo} alt="logo" />
                    <img src={userIcon} alt="user-icon" onClick={() => navigate("/user")} className="icon" />
                    <img src={cartIcon} alt="cart-icon" onClick={() => navigate("/chart")} className="icon" />
                </Container>
                <Menu>
                    {categories.map(({ name }) =>
                        <div>
                            <p>{name}</p>
                        </div>
                    )}
                </Menu>
                <Menu>
                    {franchises.map(({ name }) =>
                        <div>
                            <p>{name}</p>
                        </div>
                    )}
                </Menu>
            </Header>
            {loading ? (
                <>
                    <Loading>
                        <p>Carregando...</p>
                        <Oval color="#FFFFFF" height={80} width={80} />
                    </Loading>
                </>
            ) : (
                <>
                    <Products>
                        {products.map(({ url, name, price, franchises }) => {
                            return (
                                <ContainerProducts key={name}>
                                    <img src={url} alt="Imagem do produto"></img>
                                    <p>{name}</p>
                                    <div className="container">
                                        <img src={franchises[0].logo} alt="Imagem da franquia" className="franchiseLogo" />
                                        <p className="franchise">{franchises[0].name}</p>
                                        <p className="price">R$ {price.$numberDecimal}</p>
                                    </div>
                                </ContainerProducts>
                            )
                        })}
                    </Products>
                    <Footer>
                        <Option>
                            <img src={homeIcon} alt="home-icon" onClick={() => navigate("/")} />
                            <p>Início</p>
                        </Option>
                        <Option>
                            <img src={ordersIcon} alt="user-icon" onClick={() => navigate("/")} />
                            <p>Histórico</p>
                        </Option>
                        <Option>
                            <img src={userIcon} alt="order-icon" onClick={() => navigate("/user")} />
                            <p>Usuário</p>
                        </Option>
                    </Footer>
                </>
            )}
        </>
    )

};

const Header = styled.header`
    width: 100vw;   
    height:170px;
    background:#2D7AEF;

    .icon {
        width: 24px;
        height: 24px;
        :hover{
                cursor: pointer;
                filter: brightness(0.9);
        }
    }

    img {
        width: 221px;
        height: 38px;
        margin-right: 20px;
    }
`

const Footer = styled.footer`
    width: 375px;
    height: 67px;
    border: 1px solid #ffffff;
    background:#2D7AEF;
    display: flex;
    justify-content: space-around;
`


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 21px;
`

const Menu = styled.div` 
    display: flex;
    color: #ffffff;
    margin-left: 10px;
    margin-bottom: 10px;
    overflow-x: scroll;

    p {
        border: 1px solid #ffffff;
        border-radius: 24px;
        padding: 7px;
        margin-left: 8px;
        display: flex;
        width: max-content;
    }
`

const Products = styled.body`
    max-width: 375px;  
    background:#ffffff;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    column-gap: 20px;
`

const ContainerProducts = styled.div`
    border: 1px solid #E5E5E5;
    border-radius: 10%;
    width: 130px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    img {
        display:flex;
        height:128px;
        width: 130px;
        border-radius: 10%;
    }

    p {
        margin-top: 8px;
        color: #4A4A4A;
        font-size: 15px;
        text-align: center;
    }

    .price {
        color: #2D7AEF;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    }

    .container {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
    }

    .franchise {
        color: #4F4F4F;
        font-size: 12px;
    }

    .franchiseLogo{
        width:25px;
        height:25px;
    }
`

const Option = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 25px;
        height: 25px;
        :hover{
                cursor: pointer;
                filter: brightness(0.9);
        }
    }

     p {
        color: #ffffff;
        font-size: 15px;
        text-align: center;
        margin-top: 5px;
    }
`

const Loading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
p {
        font-size: 20px;
        padding: 15px;
    }
`