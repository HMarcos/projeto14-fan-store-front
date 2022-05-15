import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

import UserContext from "../contexts/UserContext";

import returnIcon from "../assets/iconreturn.png"
import API_LINK from '../data/links';

export default function Product() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [size, setSize] = useState("unique");
    const [qty, setQty] = useState("");
    /*const [cart, setCart] = useState({ _id: "", products: {d do Produto, Quantidade}];
        * status (aberto, fechado);
        * Valor total;})*/
    const { user } = useContext(UserContext);
    console.log(user);
    console.log(qty);

    useEffect(() => {
        const promise = axios.get(`${API_LINK}/product/${productId}`);
        promise.then((res) => {
            setProduct(res.data);
            setLoading(false);
        })
        promise.catch(() => {
            alert('Não foi possível carregar o produto.');
            setLoading(false);
        })
    }, []);

    function mappingProductQty(n) {
        const qty = []
        for (let i = 0; i <= n; i++) {
            qty.push(i)
        }
        return qty;
    }

    function goToCart() {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const product = {
            productId,
            qty,
            type: size.slice(0,1).toUpperCase()
        }

        console.log(product);

        const promise = axios.put(`${API_LINK}/cart`, product, config);

        /*if (!user.token) {
            alert('Você precisa estar logado!');
            navigate('/sign-in');
            return;
        }*/

        promise.then((response) => {
            alert("Produto adicionado ao carrinho com sucesso!");
            navigate('/cart');
        })

        promise.catch((error) => {
            const { status, data } = error.response;

            if (Number(status) !== 500) {
                alert(`Não foi possível adicionar o produto ao carrinho.
            Usuário precisa estar logado no sistema. 
            Erro ${status}: ${data} `);
                navigate('/sign-in');
                return;
            }

            else {
                alert(`Não foi possível adicionar o produto ao carrinho.
            Erro ${status}: ${data} `);

            }
        })

        /*setLoading(true)
       
        const promise = axios.post(`${API_LINK}/cart`, cart, config);
        promise.then((res) => {
            setLoading(false)
            navigate('/cart');
        })
        promise.catch(() => {
            alert('Não foi possível adicionar o produto no carrinho.')
            setLoading(false)
        })*/

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
                <Content>
                    <>
                        <main>
                            <img src={returnIcon} alt="Seta para retornar" className="icon" onClick={(() => navigate(-1))}></img>
                            <img src={product.url} alt="Imagem do produto"></img>
                            <h1>{product.name}</h1>
                            <h2>R$ {product.price.$numberDecimal.replace(".", ",")}</h2>
                            <p>{product.description}</p>
                            <Selection>
                                {product.idCategory === 1 ? (
                                    <>
                                        <p onClick={(() => setSize('pQty'))}>P</p>
                                        <p onClick={(() => setSize('mQty'))}>M</p>
                                        <p onClick={(() => setSize('gQty'))}>G</p>
                                        <select onChange={(e) => setQty(e.target.value)}>
                                            {mappingProductQty(product[size]).map((qty) =>
                                                <option>
                                                    {qty}
                                                </option>
                                            )}
                                        </select>
                                    </>
                                ) : (
                                    <>
                                        <h1>Tamanho único:</h1>
                                        <select onChange={(e) => setQty(e.target.value)}>
                                            {mappingProductQty(product.uniqueQty).map((qty) =>
                                                <option>
                                                    {qty}
                                                </option>
                                            )}
                                        </select>
                                    </>
                                )}

                            </Selection>
                        </main>
                        <Footer onClick={(() => goToCart())}>
                            <button>Adicionar ao carrinho</button>
                        </Footer>
                    </>
                </Content>
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

const Content = styled.div`
    width: 375px;   
    background:#ffffff;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    main{
        margin-bottom: 88px;
    }

    img {
        width: 375px;  
    }

    h1 {
        color: #4F4F4F;
        padding: 5px;
        margin-left: 15px;
    }

    h2 {
        color: #2D7AEF;
        padding: 5px;
        margin-left: 15px;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.165px;
        color: #4F4F4F;
        opacity: 0.9;
        padding: 5px;
        margin-left: 15px;
    }

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

    .icon {
        width: 24px;
        height: 24px;
        opacity: 0.6;
        position:absolute;
    }

`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 78px;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100vw;

    background-color:  #F6F9FF;

    box-shadow: 0px -19px 38px rgba(58, 76, 130, 0.0722656);
`;

const Selection = styled.div`
    display:flex;
    margin-top: 15px;

    p {
        border: 1px solid #2D7AEF;
        border-radius: 80%;
        column-gap: 10px;
        margin-right: 10px;
    }

    select {
        margin-left: 20px;
        width: 80px;
        height: 100%;

        font-weight: 500;
        font-size: 18px;
        line-height: 22px;

        color: #4F4F4F;

        text-align: center;
        display: flex;
        align-items: center;

    }
`;