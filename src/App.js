import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro";
import Habitos from "./pages/Habitos/Habitos";
import Hoje from "./pages/Hoje/Hoje"
import Histórico from "./pages/Historico/Historico";
import { BrowserRouter, Routes, Route, useAsyncError } from "react-router-dom";
import { useState } from "react";

export default function App() {
    const [token, setToken] = useState("");

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login setToken={setToken} />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                    <Route path="/historico" element={<Histórico />} />
                </Routes>

            </BrowserRouter>
        </div>
    );
}
