import logo from "../../assets/Logo.png"
import { CadastroContainer } from "./StyledCadastro"

export default function Cadastro(){
    return (    
        <CadastroContainer>
            <img src={logo} alt="logo da pagina" />

            <input type="text" required placeholder="email" />
            <input type="text" required placeholder="senha" />
            <input type="text" required placeholder="nome" />
            <input type="text" required placeholder="foto" />
            <button>Cadastrar</button>
            <a>Já tem uma conta? Faça login!</a>

        </CadastroContainer>
    );
}
