import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import RegisterContext from "../contexts/RegisterContext";

import logo from "../assets/logofanstore-azul.png"

function SignUp() {

    const { register, setRegister } = useContext(RegisterContext);

    const navigate = useNavigate();

    function goToAddresForm(event) {
        event.preventDefault();

        if (register.password !== register.confirmationPassword) {
            alert("As senhas devem ser iguais");
            return;
        }

        navigate("/sign-up/address");
    }

    return (
        <Content>
            <Logo src={logo} alt="logo fan store" />
            <RegisterSpan> Cadastre-se: </RegisterSpan>
            <RegisterForm onSubmit={goToAddresForm}>
                <input
                    type="text"
                    placeholder="Nome"
                    required
                    value={register.name}
                    onChange={(event) => setRegister({ ...register, name: event.target.value })}
                >
                </input>

                <input
                    type="e-mail"
                    placeholder="E-mail"
                    required
                    value={register.email}
                    onChange={(event) => setRegister({ ...register, email: event.target.value })}
                >
                </input>

                <input
                    type="password"
                    placeholder="Senha"
                    minLength="8"
                    required
                    value={register.password}
                    onChange={(event) => setRegister({ ...register, password: event.target.value })}
                >
                </input>

                <input
                    type="password"
                    placeholder="Confirme sua senha"
                    minLength="8"
                    required
                    value={register.confirmationPassword}
                    onChange={(event) => setRegister({ ...register, confirmationPassword: event.target.value })}
                >
                </input>

                <input
                    type="text"
                    placeholder="CPF"
                    minLength="14"
                    maxLength="14"
                    pattern="^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$"
                    title="O CPF deve ser o padrão: 000.000.000-00"
                    required
                    value={register.cpf}
                    onChange={(event) => setRegister({ ...register, cpf: event.target.value })}
                >
                </input>

                <input
                    type="text"
                    placeholder="Telefone"
                    pattern="^\([0-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}$"
                    title="O Telefone deve serguir o padrão: (99)99999-9999"
                    required
                    maxLength={15}
                    minLength={14}
                    value={register.phone}
                    onChange={(event) => setRegister({ ...register, phone: event.target.value })}
                >
                </input>
                <button type="submit">Prosseguir</button>
            </RegisterForm>
            <Link to="/sign-in">
                <LoginLink>Já tem uma conta? <strong>Faça Login!</strong></LoginLink>
            </Link>
        </Content>
    )
}

export default SignUp;

const Content = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 324.16px;
    height: 56.6px;
`;

const RegisterSpan = styled.span`
    font-size: 16px;
    line-height: 20px;

    color: #2D7AEF;

    margin-top: 23px;
    margin-bottom: 33px;
`;

const RegisterForm = styled.form`
    width: min-content;

    input{
        width: 311px;
        height: 48px;

        border: 1px solid #2D7AEF;
        border-radius: 24px;

        font-weight: 400;
        font-size: 18px;
        line-height: 22px;

        color: #2D7AEF;

        padding-left: 16px;

        margin-bottom: 14px;
    }

    input:disabled{
        background-color: #dbd9d9;
    }

    input::placeholder{
        color: #2D7AEF;
    }

    button{
        width: 311px;
        height: 48px;

        background: #2D7AEF;
        border-radius: 24px;

        color: #FFF;

        font-weight: 700;
        font-size: 18px;
        line-height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        margin-top: 20px;

        margin-bottom: 25px;
    }
`;

const LoginLink = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    
    color: #2D7AEF;

    strong {
        font-weight: 700;
    }
`;