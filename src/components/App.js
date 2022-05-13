import { useState } from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Home from "./Home";
import User from "./User"
import Chart from "./Chart"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Address from "./Address";

import RegisterContext from "../contexts/RegisterContext";

import {registerStructure} from "../data/stateStructures";

function App() {

    const [register, setRegister] = useState({...registerStructure});

    return (
        <>
            <Reset />
            <GlobalStyle />
            <RegisterContext.Provider value={{register, setRegister}}>
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
            </RegisterContext.Provider>
        </>
    )
}

export default App;