import logo from "../../assets/Logo.png";
import { CadastroContainer } from "./StyledCadastro";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Cadastro(){
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" });
    const [disableButton, setDisableButton] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (form.email && form.name && form.image && form.password) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [form])

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value });
    }

    function submitCadastro(e){
        e.preventDefault();
        
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", form)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                setForm({ email: "", name: "", image: "", password: "" });
                alert(`${err.message}\n${err.request.statusText} ${err.request.status}`);
            });
    }

    return (    
        <CadastroContainer>
            <img src={logo} alt="logo da pagina" />

            <form onSubmit={submitCadastro}>
                <input id="email" name="email" value={form.email} onChange={handleForm} required placeholder="email" />
                <input id="password"  name="password" value={form.password} onChange={handleForm} required placeholder="senha" />
                <input id="name" name="name" value={form.name} onChange={handleForm} required placeholder="nome" />
                <input id="image" name="image" value={form.image} onChange={handleForm} required placeholder="foto" />
                <button type="submit" disabled={disableButton} >Cadastrar</button>
            </form>
            <Link to={"/"} >
                <p>Já tem uma conta? Faça login!</p>
            </Link>

        </CadastroContainer>
    );
}
