import { LoginContainer } from "./StyledLogin";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login(){
    const [form, setForm] = useState({ email: "", password: "" })
    const [disableButton, setDisableButton] = useState(true);

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value });
    }

    function getLogin(e){
        e.preventDefault();

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", form)
            .then((res) => {

            })
            .catch((err) => {

            });
    }

    return (
        <LoginContainer>
            <img src={logo} alt="logo trackit" />

            <form onSubmit={getLogin}>
                <input id="email" name="email" onChange={handleForm} value={form.email} required placeholder="email" />
                <input id="password" name="password" onChange={handleForm} value={form.password} required placeholder="senha" />
                <button type="submit" disabled={disableButton}  >Entrar</button>
            </form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginContainer>
    );
}