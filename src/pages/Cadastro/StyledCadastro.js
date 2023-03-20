import styled from "styled-components"

export const CadastroContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;400;700&display=swap');
    
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

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
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        color: #D4D4D4;
    }

    .cadastrar{
        opacity: ${props => props.carregando ? 0.5 : 1 };
        font-family: 'Lexend Deca', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 303px;
        height: 45px;
        color: white;
        border: none;
        border-radius: 4px;
        background-color: #52B6FF;
        margin-bottom: 15px;
    }

    .login{
        border: none;
        background-color: transparent;
        font-family: 'Lexend Deca', sans-serif;
        text-decoration: underline;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0em;
        color: #52B6FF;
    }
`;