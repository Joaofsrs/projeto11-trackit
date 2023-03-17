import { LoginContainer } from "./StyledLogin";
import logo from "../../assets/Logo.png"

export default function Login(){
    return (
        <LoginContainer>
            <img src={logo} alt="logo trackit" />

            <input type="text" required placeholder="email" />
            <input type="text" required placeholder="senha" />
            <button>Entrar</button>
            <a>Não tem uma conta? Cadastre-se!</a>
        </LoginContainer>
    );
}