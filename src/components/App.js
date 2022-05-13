import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Home from "./Home";
import User from "./User"
import Chart from "./Chart"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Address from "./Address";

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
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-up/address" element={<Address />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;