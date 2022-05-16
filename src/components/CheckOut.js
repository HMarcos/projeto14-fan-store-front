import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import UserContext from "../contexts/UserContext";

import API_LINK from '../data/links';
import returnIcon from "../assets/iconreturnwhite.png"

export default function CheckOut() {
    const navigate = useNavigate();
    const [payment, setPayment] = useState("");
    const { user } = useContext(UserContext);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(renderCart, []);

    /*const adress = {
        address: {
            cep: "12237-821",
            street: "Rua José Cobra",
            number: "12",
            district: "Jd Oriente",
            city: "São José dos Campos",
            state: "São Paulo",
            country: "Brasil"
        }
    }*/

    function renderCart() {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const promise = axios.get(`${API_LINK}/paymentinfo`, config);
        promise.then((res) => {
            setCart(res.data);
            setLoading(false);
        });

        promise.catch((error) => {
            const { status, data } = error.response;

            if (Number(status) !== 500 && Number(status) !== 422) {
                navigate('/info-login/1');
                return;
            }

            else {
                alert(`Não foi possível adicionar o produto ao carrinho.
            Erro ${status}: ${data} `);

            }
            setLoading(false);
        })
    }

    return (
        loading ? (
            <>
                <Loading>
                    <p>Carregando...</p>
                    <Oval color="#FFFFFF" height={80} width={80} />
                </Loading>
            </>
        ) : (
            <>
                <Header>
                    <img src={returnIcon} alt="Seta para retornar" className="icon" onClick={(() => navigate('/cart'))}></img>
                    <p>Pagamento</p>
                </Header>
                <Content>
                    <p>Selecione a forma de pagamento:</p>
                    <select>
                        <option onClick={(() => setPayment('credit'))}>Cartão de crédito</option>
                        <option onClick={(() => setPayment('debit'))}>Cartão de débito</option>
                        <option onClick={(() => setPayment('pix'))}>PIX</option>
                        <option onClick={(() => setPayment('ticket'))}>Boleto</option>
                    </select>
                    <p>Informações de entrega:</p>
                    <p className="adress">{cart.userAddress.street}, {cart.userAddress.number} </p>
                    <p className="adress">{cart.userAddress.city}, {cart.userAddress.state} </p>
                </Content>
                <InfoPrice>
                    <h1>Detalhes da compra</h1>
                    {cart.products.map((product) => {
                        return (
                            <>
                                <Details>
                                    <p className="name">{product.name}</p>
                                    <p className="price">R$ {(parseFloat(product.price.$numberDecimal) * parseInt(product.qty)).toFixed(2).replace(".", ",")}</p>
                                </Details>
                            </>
                        )
                    }
                    )}
                    <Details>
                        <h1>Valor total</h1>
                        <h1>R$ {parseFloat(cart.totalValue).toFixed(2).replace(".", ",")}</h1>
                    </Details>
                </InfoPrice>
                <Footer>
                    <button>Finalizar compra</button>
                </Footer>
            </>
        )
    )
}

const Loading = styled.div`
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
p {
        font-size: 20px;
        padding: 15px;
    }
`;

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

const Content = styled.div`
    margin-top: 90px;
    p {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #2D7AEF;
    }

    select {
        width: 180px;
        height: 100%;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #4F4F4F;
        text-align: center;
        display: flex;
        align-items: center;
        border: 1px solid #4F4F4F;
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .adress {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        padding: 5px;
        color: #4F4F4F;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        width: 80%
    }
`

const InfoPrice = styled.div`
margin-top: 30px;
    height: fit-content;
    width: 345px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;

    box-shadow: 0px 21px 43px rgba(58, 76, 130, 0.0722656);


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
    width: 70%;
   }

   .price {
    min-width: 25%;
    width: fit-content;
   }
`;

const Details = styled.div`
    width: 345px;
    display: flex;
    justify-content: space-between;
`;

const Footer = styled.footer`
    height: fit-content;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;

    position: fixed;
    
    bottom: 0;
    left: 0;

    z-index: 1;

    padding-top: 20px;
    padding-bottom: 20px;

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
`;