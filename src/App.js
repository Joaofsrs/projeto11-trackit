import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import Hoje from "./pages/Hoje/Hoje"
import Histórico from "./pages/Historico/Historico";
import { BrowserRouter, Routes, Route, useAsyncError } from "react-router-dom";
import { useState } from "react";
import UserContext from "./pages/UserContext";

export default function App() {
    const [token, setToken] = useState("");
    const [image, setImage] = useState("");
    const [porcento, setPorcento] = useState("");

    return (
        <div className="App">
            <UserContext.Provider value={{ token, setToken, image , setImage, porcento, setPorcento}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/habitos" element={<Habitos />} />
                        <Route path="/hoje" element={<Hoje />} />
                        <Route path="/historico" element={<Histórico />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
}
