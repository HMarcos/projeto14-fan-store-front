import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import User from "./User"
import Chart from "./Chart"
import Product from "./Product"

function App() {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/chart" element={<Chart />} />
                    <Route path="/product/:productId" element={< Product />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;