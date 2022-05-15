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
                        {products.map(({ url, name, price, idFranchise, _id, franchises }) => {
                            return (
                                <ContainerProducts key={name} onClick={() => navigate(`/product/${_id}`)}>
                                    <img src={url} alt="Imagem do produto"></img>
                                    <div className="info">
                                        <p className="product-name">{name}</p>
                                        <div className="container">
                                            <div>
                                                <img src={franchises[0].logo} alt="Imagem da franquia" className="franchiseLogo" />
                                                <p className="franchise">{franchises[0].name}</p>
                                            </div>
                                            <p className="price">R$ {price.$numberDecimal}</p>
                                        </div>
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
    height: 170px;
    background:#2D7AEF;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1;

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
    /*width: 375px;*/
    width: 100vw;
    height: 67px;
    border: 1px solid #ffffff;
    background:#2D7AEF;
    display: flex;
    justify-content: space-around;

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 1;
`;


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

const Products = styled.main`
    height: 100vh - 170px - 67px;
    width: 100vw;
    margin-top: 170px;
    margin-bottom: 72px;
    /*max-width: 375px;*/  
    background:#F6F9FF;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    /*justify-content: center;
    column-gap: 20px;*/
`

const ContainerProducts = styled.div`
    border: 1px solid #E5E5E5;
    border-radius: 10px;
    /*width: 150px;*/
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    padding-bottom: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    background-color: #FFFFFF;
   
    align-items: center;

    img {
        display:flex;
        height:150px;
        width: 150px;
        border-radius: 10px 10px 0px 0px;
        padding-bottom: 2px;
        border-bottom: 1px solid #000;
        /*border-radius: 10%;*/
        
    }

    .info{
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 115px;
        justify-content: space-between;
    }

    p {
        margin-top: 8px;
        color: #4A4A4A;
        font-size: 15px;
        text-align: center;
        width: 140px;
       
    }

    .product-name{
        height: min-content;
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .price {
        color: #2D7AEF;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /*justify-content: space-evenly;*/
        text-align: center;
        width: 150px;

        margin-top: 5px;
    }

    .franchise {
        color: #4F4F4F;
        font-size: 16px;
        width: fit-content;
        margin: 0;
        margin-left: 10px;

        text-align: center;
    }

    .franchiseLogo{
        width:25px;
        height:25px;
        border: none;
        border-radius: 50%;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
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