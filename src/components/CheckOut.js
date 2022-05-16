import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import API_LINK from '../data/links';
import returnIcon from "../assets/iconreturnwhite.png"

export default function CheckOut() {
    const navigate = useNavigate();
    const [payment, setPayment] = useState("")

    return (
        <>
            <Header>
                <img src={returnIcon} alt="Seta para retornar" className="icon" onClick={(() => navigate('/cart'))}></img>
                <p>Carrinho</p>
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
            </Content>
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
`