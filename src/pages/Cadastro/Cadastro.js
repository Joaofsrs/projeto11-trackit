import logo from "../../assets/Logo.png";
import { CadastroContainer } from "./StyledCadastro";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

export default function Cadastro(){
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" });
    const [disableButton, setDisableButton] = useState(true);
    const [carregando, setCarregado] = useState(false);
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
        setCarregado(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", form)
            .then((res) => {
                setCarregado(false)
                navigate("/");
            })
            .catch((err) => {
                alert(`${err.message}\n${err.request.statusText} ${err.request.status}`);
                setDisableButton(false);
                setForm({ email: "", name: "", image: "", password: "" });
                setCarregado(false);
            });
    }

    return (    
        <CadastroContainer carregando={carregando} >
            <img src={logo} alt="logo da pagina" />

            <form onSubmit={submitCadastro}>
                <input 
                    id="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleForm} 
                    required 
                    placeholder="email" 
                    disabled={carregando} 
                />
                <input 
                    id="password" 
                    name="password" 
                    value={form.password} 
                    onChange={handleForm} 
                    required 
                    placeholder="senha"
                    disabled={carregando}  
                />
                <input 
                    id="name" 
                    name="name" 
                    value={form.name} 
                    onChange={handleForm} 
                    required 
                    placeholder="nome"
                    disabled={carregando}
                />
                <input 
                    id="image" 
                    name="image" 
                    value={form.image}
                    onChange={handleForm} 
                    required 
                    placeholder="foto"
                    disabled={carregando}  
                />
                <button 
                    className="cadastrar" 
                    type="submit" 
                    disabled={disableButton||carregando} 
                >
                {carregando ? 
                    <TailSpin
                    height="35"
                    width="35"
                    color="#FFFFFF"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    /> : 
                    "Cadastrar"
                }
                </button>
                <Link to={"/"} >
                    <button 
                        className="login" 
                        disabled={carregando} 
                    >Já tem uma conta? Faça login!</button>
                </Link>
            </form>

        </CadastroContainer>
    );
}
