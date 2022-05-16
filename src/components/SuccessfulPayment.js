import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logofanstore-azul.png"

export default function SuccessfulPayment() {
    return (
        <Content>
            <Logo src={logo} alt="logo fan store" />

            <Info>Parabéns pela compra! <br/> O pagamento foi bem sucedido!</Info>

            <Link to="/">
                <LinkSpan>Para continuar comprando <strong>volte para a página principal!</strong></LinkSpan>
            </Link>
        </Content>
    )
}

const Content = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #FFFFFF;
`;

const Logo = styled.img`
    width: 324.16px;
    height: 56.6px;
`;

const Info = styled.p`
    width: 300px;

    font-size: 24px;
    line-height: 30px;
    font-weight: 500;

    color:  #4F4F4F;

    text-align: center;

`;

const LinkSpan = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #2D7AEF;
    display: block;
    width: 320px;
    text-align: center;
    strong {
        font-weight: 700;
    }
`;