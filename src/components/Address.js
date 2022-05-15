import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import RegisterContext from "../contexts/RegisterContext";

import Back from "./../assets/iconarrow.png";

import API_LINK from "./../data/links"

function Address() {
    const { register, setRegister } = useContext(RegisterContext);

    const navigate = useNavigate();

    function toRegister(event) {
        event.preventDefault();

        //setLoading(true);

        const promise = axios.post(`${API_LINK}/sign-up`, register);

        promise.then((response) => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/sign-in");
        });

        promise.catch((error) => {
            const { status, data } = error.response;

            alert(`Não foi possível realizar o cadastro.
            Erro ${status}: ${data} `);

            //setLoading(false);
        })
    }

    function cepMask(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})/, '$1-')
            .replace(/(-\d{3})\d+?$/, '$1')
    }


    return (
        <>
            <Header>
                <Link to="/sign-up">
                    <img src={Back} alt="voltar" />
                </Link>
                <h1>Adicione um endereço</h1>
            </Header>

            <Content>
                <AddressForm id="address-form" onSubmit={toRegister}>
                    <label htmlFor="CEP">CEP</label>
                    <input
                        type="text"
                        id="CEP"
                        minLength="9"
                        maxLength="9"
                        pattern="^[0-9]{5}-[0-9]{3}$"
                        title="O CEP deve serguir o padrão: 00000-000"
                        required
                        value={register.address.cep}
                        onChange={(event) => {
                            event.target.value = cepMask(event.target.value);
                            setRegister({ ...register, address: { ...register.address, cep: event.target.value } })
                        }}
                    >
                    </input>

                    <label htmlFor="Logradouro">Logradouro</label>
                    <input
                        type="text"
                        id="Logradouro"
                        required
                        value={register.address.street}
                        onChange={(event) => setRegister({ ...register, address: { ...register.address, street: event.target.value } })}
                    >
                    </input>

                    <label htmlFor="Numero">Número</label>
                    <input
                        type="text"
                        id="Numero"
                        pattern="^[0-9]+[a-zA-Z]*$"
                        required
                        value={register.address.number}
                        onChange={(event) => setRegister({ ...register, address: { ...register.address, number: event.target.value } })}
                    >
                    </input>

                    <label htmlFor="Bairro">Bairro</label>
                    <input
                        type="text"
                        id="Bairro"
                        required
                        value={register.address.district}
                        onChange={(event) => setRegister({ ...register, address: { ...register.address, district: event.target.value } })}
                    >
                    </input>

                    <label htmlFor="Cidade">Cidade</label>
                    <input
                        type="text"
                        id="Cidade"
                        required
                        value={register.address.city}
                        onChange={(event) => setRegister({ ...register, address: { ...register.address, city: event.target.value } })}
                    >
                    </input>

                    <label htmlFor="Estado">Estado</label>
                    <input
                        type="text"
                        id="Estado"
                        value={register.address.state}
                        onChange={(event) => setRegister({ ...register, address: { ...register.address, state: event.target.value } })}
                    >
                    </input>

                    <label htmlFor="Pais">País</label>
                    <input
                        type="text"
                        id="Pais"
                        required
                        value={register.address.country}
                        onChange={(event) => setRegister({ ...register, address: { ...register.address, country: event.target.value } })}
                    >
                    </input>
                </AddressForm>
            </Content>

            <Footer>
                <button type="submit" form="address-form">Cadastrar</button>
            </Footer>
        </>
    )
}

export default Address;


const Header = styled.header`
    width: 100vw;
    height: 116px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background: #2D7AEF;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    
    h1{
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        color: #FFFFFF;

        margin-left: 30px;
    }

    img{
        width: 18px;
        height: 15px;

        margin-left: 20px;

        cursor: pointer;
    }
`;

const Content = styled.main`
    margin-top: 116px;
    margin-bottom: 88px;
    
    width: 100vw;
    height: calc(100vh - 116px - 88px);

    display: flex;
    align-items: center;
    justify-content: center;

    background: #FFFFFF;
    box-shadow: 0px 21px 43px rgba(58, 76, 130, 0.0722656);

`;

const AddressForm = styled.form`
    width: min-content;

    display: flex;
    flex-direction: column;

    label{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        color: #4F4F4F;

        mix-blend-mode: normal;
        opacity: 0.8;
    }

    input{
        width: 335px;
        height: 25px;
        
        border-bottom: 1px solid #DBDBDE;


        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        color: #333A42;

        margin-bottom: 20px;
    }

    input::placeholder{
        color: #333A42;
    }
`;

const Footer = styled.footer`
    width: 100vw;
    height: 88px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #FFFFFF;
    box-shadow: 0px -19px 38px rgba(58, 76, 130, 0.0722656);

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 1;

    button{
        width: 311px;
        height: 48px;

        background: #2D7AEF;
        border-radius: 24px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        text-align: center;

        color: #FFFFFF;

    }
`;
