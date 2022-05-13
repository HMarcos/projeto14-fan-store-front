import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import API_LINK from '../data/links';

export default function Product() {
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const promise = axios.get(`${API_LINK}/product/${productId}`);
        promise.then((res) => {
            console.log(res.data);
            setProduct(res.data);
            console.log(product);
            setLoading(false);
        })
        promise.catch(() => {
            alert('Não foi possível carregar o produto.');
            setLoading(false);
        })
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
                <Loading key={product.name}>
                    <img src={product.url} alt="Imagem do produto"></img>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>R$ {product.price.$numberDecimal}</p>
                </Loading>
            </>
        )
    )
}

const Loading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
p {
        font-size: 20px;
        padding: 15px;
    }
`