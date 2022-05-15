import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import UserContext from "../contexts/UserContext";

import API_LINK from '../data/links';
import returnIcon from "../assets/iconreturnwhite.png"

export default function Cart() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const cart = [{
        userId: "627df3e2ccb008e40e3b0c44",
        status: "opened",
        products: [{
            productId: "627c25764fe14e657acaa975",
            qty: 1,
            type: "P"
        }],
        totalValue: 0
    }]

    return (
        <>
            <Header>
                <img src={returnIcon} alt="Seta para retornar" className="icon" onClick={(() => navigate('/'))}></img>
                <p>Carrinho</p>
            </Header>
            <Footer>
                <button>Pagamento</button>
            </Footer>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        width: 311px;
        height: 48px;
        background: #2D7AEF;
        border-radius: 24px;
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
    }

    position: fixed;
    bottom: 10px;
    left: 0;

    z-index: 1;
`