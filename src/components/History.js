import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import dayjs from "dayjs";

import UserContext from "../contexts/UserContext";

import API_LINK from '../data/links';
import returnIcon from "../assets/iconreturnwhite.png"

export default function History() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [carts, setCarts] = useState('');
    const { user } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const promise = axios.get(`${API_LINK}/history`, config);
        promise.then((res) => {
            setCarts(res.data);
            setLoading(false);
        });
        promise.catch((error) => {
            const { status, data } = error.response;

            if (Number(status) !== 500 && Number(status) !== 422) {
                navigate('/info-login/3');
                return;
            }

            else {
                alert(`Não foi possível carregar o histórico do usuário.
            Erro ${status}: ${data} `);

            }
            setLoading(false);
        });
    }, []);

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
                    <img src={returnIcon} alt="Seta para retornar" className="icon" onClick={(() => navigate('/'))}></img>
                    <p>Histórico de compras</p>
                </Header>
                <Purchases>
                    {carts.map((cart) => {
                        const data = new dayjs(cart.time).format("DD/MM/YYYY");
                        return (
                            <div>
                                <p>Carrinho: {cart.cartId}</p>
                                <h1>Data: {data}</h1>
                                <h1>Valor: R$ {cart.value}</h1>
                                <p>Forma de pagamento: {cart.paymentType}</p>
                            </div>
                        )
                    }
                    )}
                </Purchases>
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

const Purchases = styled.div`
    margin-top: 90px;
    height: fit-content;
    width: 100vw;
    background: #f5f5f5;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        margin-bottom: 20px;
        width: 380px;
        box-shadow: 0px 21px 43px rgba(58, 76, 130, 0.0722656);
    }
    

    p {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #2D7AEF;
    }

    h1 {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
`