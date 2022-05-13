import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import returnIcon from "../assets/iconreturn.png"
import API_LINK from '../data/links';

export default function Product() {
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [size, setSize] = useState("gQty")

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

    /*<Selection>
                        <p onClick={setSize("pQty")}>P</p>
                        <p onClick={setSize("mQty")}>M</p>
                        <p onClick={setSize("gQty")}>G</p>
                        <select>
                            {mappingProductQty(product[size]).map((qty) =>
                                <option>
                                    {qty}
                                </option>
                            )}
                        </select>
                    </Selection>*/

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
                    <img src={returnIcon} alt="Seta para retornar" className="icon"></img>
                    <img src={product.url} alt="Imagem do produto"></img>
                    <h1>{product.name}</h1>
                    <h2>R$ {product.price.$numberDecimal}</h2>
                    <p>{product.description}</p>
                    <Selection>
                    <p>P</p>
                    <p>M</p>
                    <p>G</p>
                        <select>
                            {mappingProductQty(product[size]).map((qty) =>
                                <option>
                                    {qty}
                                </option>
                            )}
                        </select>
                    </Selection>
                    <Footer>
                        <button>Adicionar ao carrinho</button>
                    </Footer>
                    </>
                </Content>
            </>
        )
    )
}

const Loading = styled.body`
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
p {
        font-size: 20px;
        padding: 15px;
    }
`

const Content = styled.div`
    width: 375px;   
    height:100vh;
    background:#ffffff;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    img {
        width: 375px;   
    }

    h1 {
        color: #4F4F4F;
        padding: 5px;
    }

    h2 {
        color: #2D7AEF;
        padding: 5px;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.165px;
        color: #4F4F4F;
        opacity: 0.9;
        padding: 5px;
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
`

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
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
        width: 50px;
    }
`