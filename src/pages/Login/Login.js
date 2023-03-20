import { LoginContainer } from "./StyledLogin";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import UserContext from "../UserContext";

export default function Login(props){
    const [form, setForm] = useState({ email: "", password: "" })
    const [disableButton, setDisableButton] = useState(true);
    const [sendLogin, setSendLogin] = useState(false);
    const navigate = useNavigate();

    const { setToken, setImage } = useContext(UserContext);

    useEffect(() => {
        if(form.email && form.password){
            setDisableButton(false);
        }else{
            setDisableButton(true);
        }
    }, [form])

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value });
    }

    function getLogin(e){
        e.preventDefault();
        setSendLogin(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", form)
            .then((res) => {
                setToken(res.data.token)
                setImage(res.data.image)
                setSendLogin(false)
                navigate("/hoje");
            })
            .catch((err) => {
                alert(err.message);
                setSendLogin(false);
            });
    }

    return (
        <LoginContainer sendLogin={sendLogin}>
            <img src={logo} alt="logo trackit" />

            <form onSubmit={getLogin}>
                <input 
                    data-test="email-input"
                    id="email" 
                    name="email" 
                    onChange={handleForm} 
                    value={form.email} 
                    required 
                    placeholder="email" 
                    disabled={sendLogin} 
                />
                <input 
                    data-test="password-input"
                    id="password" 
                    name="password" 
                    onChange={handleForm} 
                    value={form.password} 
                    required 
                    placeholder="senha" 
                    disabled={sendLogin} 
                />
                <button 
                    data-test="login-btn" 
                    className="send" 
                    type="submit" 
                    disabled={disableButton||sendLogin}  
                >
                {sendLogin ? 
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
                    "Entrar"
                }
                </button>
                <Link data-test="singup-link" to={"/cadastro"}>
                    <button 
                        className="cadastro" 
                        disabled={sendLogin} 
                    >Não tem uma conta? Cadastre-se!</button>
                </Link>
            </form>
        </LoginContainer>
    );
}