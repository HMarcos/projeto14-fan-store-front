import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//import { useState, useContext } from "react";
//import axios from "axios";

import logo from "../assets/logofanstore.png"
import userIcon from "../assets/iconuser.png"
import cartIcon from "../assets/iconcart.png"
import homeIcon from "../assets/iconhome.png"
import UserFooterIcon from "../assets/iconuserfooter.png"
import ordersIcon from "../assets/iconorder.png"


export default function Home() {
    const navigate = useNavigate();

    const categories = ["Canecas", "Camisetas", "Livros", "Pôster", "Quadrinhos", "Decoração"]
    const franchises = ["Marvel", "Harry Potter", "DC Comics", "Senhor dos anéis", "Star Wars", "Pokémon"]
    const products = [{
        name: "Caneca Mágica Mapa Maroto Harry Potter",
        description: "Sua estampa é revelada após o uso de liquido quente",
        price: 50,
        url: "https://m.media-amazon.com/images/I/618yvUFvSCL._AC_SL1202_.jpg",
        franchise: "Harry Potter",
        idCategory: "Canecas",
        uniqueQty: 20,
        pQty: 0,
        mQty: 0,
        gQty: 0,
    },
    {
        name: "Camiseta Spider Man",
        description: "Camiseta gola V, 100% algodão, com a estampa do homem aranha",
        price: 60,
        url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg",
        franchise: "Marvel",
        idCategory: "Camisetas",
        uniqueQty: 0,
        pQty: 5,
        mQty: 8,
        gQty: 7,
    }, {
        name: "Camiseta Spider Man",
        description: "Camiseta gola V, 100% algodão, com a estampa do homem aranha",
        price: 60,
        url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg",
        franchise: "Marvel",
        idCategory: "Camisetas",
        uniqueQty: 0,
        pQty: 5,
        mQty: 8,
        gQty: 7,
    }, {
        name: "Camiseta Spider Man",
        description: "Camiseta gola V, 100% algodão, com a estampa do homem aranha",
        price: 60,
        url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg",
        franchise: "Marvel",
        idCategory: "Camisetas",
        uniqueQty: 0,
        pQty: 5,
        mQty: 8,
        gQty: 7,
    }, {
        name: "Camiseta Spider Man",
        description: "Camiseta gola V, 100% algodão, com a estampa do homem aranha",
        price: 60,
        url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg",
        franchise: "Marvel",
        idCategory: "Camisetas",
        uniqueQty: 0,
        pQty: 5,
        mQty: 8,
        gQty: 7,
    }, {
        name: "Camiseta Spider Man",
        description: "Camiseta gola V, 100% algodão, com a estampa do homem aranha",
        price: 60,
        url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg",
        franchise: "Marvel",
        idCategory: "Camisetas",
        uniqueQty: 0,
        pQty: 5,
        mQty: 8,
        gQty: 7,
    }, {
        name: "Camiseta Spider Man",
        description: "Camiseta gola V, 100% algodão, com a estampa do homem aranha",
        price: 60,
        url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg",
        franchise: "Marvel",
        idCategory: "Camisetas",
        uniqueQty: 0,
        pQty: 5,
        mQty: 8,
        gQty: 7,
    }, {
        name: "Camiseta Spider Man",
        description: "Camiseta gola V, 100% algodão, com a estampa do homem aranha",
        price: 60,
        url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg",
        franchise: "Marvel",
        idCategory: "Camisetas",
        uniqueQty: 0,
        pQty: 5,
        mQty: 8,
        gQty: 7,
    }]

    return (
        <>
                <Header>
                    <Container>
                        <img src={logo} alt="logo" />
                        <img src={userIcon} alt="user-icon" onClick={() => navigate("/user")} className="icon" />
                        <img src={cartIcon} alt="cart-icon" onClick={() => navigate("/chart")} className="icon" />
                    </Container>
                    <Menu>
                        {categories.map((categorie) =>
                            <div>
                                <p>{categorie}</p>
                            </div>
                        )}
                    </Menu>
                    <Menu>
                        {franchises.map((franchise) =>
                            <div>
                                <p>{franchise}</p>
                            </div>
                        )}
                    </Menu>
                </Header>
                <Products>

                    {products.map(({ url, name, price, franchise }) => {
                        return (
                            <ContainerProducts key={name}>
                                <img src={url} alt="Imagem do produto"></img>
                                <p>{name}</p>
                                <div className="container">
                                    <p className="franchise">{franchise}</p>
                                    <p className="price">R$ {price}</p>
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
                        <img src={UserFooterIcon} alt="user-icon" onClick={() => navigate("/")} />
                        <p>Histórico</p>
                    </Option>
                    <Option>
                        <img src={ordersIcon} alt="order-icon" onClick={() => navigate("/user")} />
                        <p>Usuário</p>
                    </Option>
                </Footer>
        </>
    )

};

const Header = styled.header`
    width: 375px;   
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
    //overflow-x: scroll;


    p {
        border: 1px solid #ffffff;
        border-radius: 24px;
        padding: 7px;
        margin-left: 8px;
    }
`

const Products = styled.body`
    max-width: 375px;  
    height: 100vh; 
    background:#ffffff;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    column-gap: 20px;
`

const ContainerProducts = styled.div`
    border: 1px solid #E5E5E5;
    border-radius: 10%;
    width: 160px;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    img {
        display:flex;
        height:128px;
        width: 160px;
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
    }
`

const Footer = styled.footer`
    width: 375px;
    height: 57px;
    border: 1px solid #ffffff;
    background-color: #e5e5e5;
    display: flex;
    justify-content: space-around;
`

const Option = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 24px;
        height: 24px;
        :hover{
                cursor: pointer;
                filter: brightness(0.9);
        }
    }

     p {
        color: #4A4A4A;
        font-size: 18px;
        text-align: center;
        margin-top: 5px;
    }
`