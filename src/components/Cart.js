import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import UserContext from "../contexts/UserContext";

import API_LINK from '../data/links';
import returnIcon from "../assets/iconreturnwhite.png"

export default function Cart() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    const { user } = useContext(UserContext);

    console.log(cart);

    /*const cart = {
        userId: "627df3e2ccb008e40e3b0c44",
        status: "opened",
        products: [{
            productId: "627c25764fe14e657acaa975",
            qty: 1,
            type: "P",
            name: "Camiseta Spider Man super maneira com silk etc e tal",
            price: 50,
            url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg"
        },
        {
            productId: "627c25764fe14e657acaa975",
            qty: 1,
            type: "P",
            name: "Camiseta Spider Man",
            price: 50,
            url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg"
        },
        {
            productId: "627c25764fe14e657acaa975",
            qty: 1,
            type: "P",
            name: "Camiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider ManCamiseta Spider Man",
            price: 50,
            url: "https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_.jpg"
        }],
        totalValue: 0
    }*/

    useEffect(renderCart, []);

    function renderCart() {
        /*if (cart.length === 0) {
            alert("O carrinho está vazio!");
            navigate('/');
        }*/

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const promise = axios.get(`${API_LINK}/cart`, config);
        promise.then((res) => {
            setLoading(false)
            setCart(res.data);
            console.log(cart);
        });

        promise.catch(() => {
            alert('Não foi possível carregar o carrinho.')
            setLoading(false)
        });
    }

    return (
        <>
            <Header>
                <img src={returnIcon} alt="Seta para retornar" className="icon" onClick={(() => navigate('/'))}></img>
                <p>Carrinho</p>
            </Header>

        </>
    )
}

const Header = styled.header`
    width: 100vw;   
    height: 70px;
    background:#2D7AEF;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1;

    p{
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #FFFFFF;
    }

    .icon {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 28px;  
        left: 15px;
        :hover{
            cursor: pointer;
            filter: brightness(0.9);
        }
    }
`

const Footer = styled.footer`
    height: fit-content;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;

    button {
        width: 311px;
        height: 48px;
        background: #2D7AEF;
        border-radius: 24px;
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
        margin-bottom: 5px;
    }

   h1 {
    padding: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;

    display: flex;
    align-items: center;
    letter-spacing: -0.165px;

    color: #000000;
   }

   p { 
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.165px;
    color: #000000;

   }

   .name {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 80%;
   }

   .price {
    width: 20%;
   }
`

const Product = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 21px 43px rgba(58, 76, 130, 0.0722656);
    height: fit-content;
    padding: 10px;
    width: 100vw;   
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        border-radius: 10px;
        width: 102px;
        height: 102px;
    }

    p {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #4F4F4F;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    h1 {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #2D7AEF;
    }

    h2 {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #4F4F4F;
        opacity: 0.5;
    }

    .name {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        width: 40%;
    }
    `

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Content = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
`

const Details = styled.div`
    width: 90vw;
    display: flex;
    justify-content: space-between;
`
/*<Content>
                {cart[0].products.map((product) => {
                    return (
                        <Product>
                            <img src={cart[0].products[0].url} alt="Imagem do produto" />
                            <Container>
                                <p>{product.name}</p>
                                <h1>R$ {product.price}</h1>
                                <p>Quantidade: {product.qty}</p>
                                <h2>Remover</h2>
                            </Container>
                        </Product>
                    )
                }
                )}
            </Content>
            <Footer>
                <h1>Detalhes</h1>
                {cart[0].products.map((product) => {
                    return (
                        <>
                            <Details>
                                <p className="name">{product.name}</p>
                                <p className="price">R$ {product.price}</p>
                            </Details>
                        </>
                    )
                }
                )}
                <Details>
                    <h1>Valor total</h1>
                    <h1>R$ {cart[0].totalValue}</h1>
                </Details>
                <button>Pagamento</button>
            </Footer>*/