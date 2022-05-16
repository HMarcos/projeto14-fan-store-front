import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logofanstore-azul.png"


const infoMap = new Map();

infoMap.set(0, "Para adicionar um produto ao carrinho é preciso fazer o login no sistema!");
infoMap.set(1, "Para acessar o carrinho é preciso fazer o login no sistema!");
infoMap.set(2, "Para acessar o perfil do usuário é preciso fazer o login no sistema!");
infoMap.set(3, "Para acessar o histórico de compras é preciso fazer o login no sistema!");


function InfoLogin() {
    const infoId = parseInt(useParams().infoId);

    return (
        <Content>
            <Logo src={logo} alt="logo fan store" />

            <Info>{infoMap.get(infoId)}</Info>

            <Link to="/sign-in">
                <LinkSpan>Já tem uma conta? <strong>Faça Login!</strong></LinkSpan>
            </Link>

            <Link to="/sign-up">
                <LinkSpan>Não tem uma conta? <strong>Cadastre-se</strong></LinkSpan>
            </Link>
        </Content>
    )
}

export default InfoLogin;

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
    strong {
        font-weight: 700;
    }
`;