import styled from "styled-components"
import logo from "../assets/Logo.png"

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
const LoginContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;400;700&display=swap');
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{ 
        width: 180px;
        height: 180px;
        margin-bottom: 30px;
    }

    input{
        font-family: 'Lexend Deca', sans-serif;
        height: 45px;
        width: 303px;
        margin-bottom: 10px;
        color: 1px solid #D4D4D4;
        border-radius: 5px;
        color: #D4D4D4;
    }

    button{
        font-family: 'Lexend Deca', sans-serif;
        width: 303px;
        height: 45px;
        color: white;
        border: none;
        border-radius: 4px;
        background-color: #52B6FF;
        margin-bottom: 15px;
    }

    a{
        font-family: 'Lexend Deca', sans-serif;
        text-decoration: underline;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0em;
        color: #52B6FF;
    }
`