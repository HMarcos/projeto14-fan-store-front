import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import User from "./User"
import Chart from "./Chart"

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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;