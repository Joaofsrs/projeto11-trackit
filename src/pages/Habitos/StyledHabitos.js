import styled from "styled-components";

export const ContainerHabitos = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;400;700&display=swap');
    margin-top: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
        width: 90%;
        display: flex;
        justify-content: space-between;
        h2{
            color: #126BA5;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 23px;
            font-weight: 400;
        }
        button{
            background-color: #52B6FF;
            color: white;
            font-size: 23px;
            height: 35px;
            width: 40px;
            border-radius: 5px;
            border: none;
        }
    }

    p{
        font-family: 'Lexend Deca', sans-serif;
        margin-top: 25px;
        width: 90%;
        font-size: 18px;
        font-weight: 400;
        color: #666666;
    }
`;

export const ContainerFooter = styled.footer`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;400;700&display=swap');
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: white;
    left: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .botaoPrincipal{
        font-family: 'Lexend Deca', sans-serif;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -45px;
        width: 91px;
        height: 91px;
    }
    p{  
        font-family: 'Lexend Deca', sans-serif;
        color: #52B6FF;
        margin: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
    }   
    a{
        text-decoration: none;
    }
`;

export const ContainerHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        color: white;
        font-family: 'Playball', cursive;
        font-size: 48px;
        margin-left: 18px;
    }

    img{
        margin-right: 18px;
        width: 51px;
        height: 51px;
        border-radius: 98px;
    }
`;

export const ContainerCriacao = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;400;700&display=swap');
    margin-top: 22px;
    height: 180px;
    min-width: 340px;
    margin-bottom: 12px;
    border-radius: 5px;
    background-color: white;
    .nomeCriacao{
        margin: 18px 18px 0 18px;
        height: 45px;
        width: 303px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        color: #D4D4D4;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
    }
    .semana{
        margin-left: 18px;
        margin-top: 10px;
        width: 240px;
        display: flex;
        justify-content: space-between;
    }
    .botoes{
        position: relative;
        width: 327px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        .cancelar{
            position: absolute;
            right: 95px;
            bottom: 0px;
            height: 35px;
            width: 84px;
            color: #52B6FF;
            background-color: transparent;
            border: none;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0em;
            text-align: center;
        }
        .salvar{
            position: absolute;
            opacity: ${props => props.sendingHabito ? 0.5 : 1 };
            display: flex;
            align-items: center;
            justify-content: center;
            right: 0px;
            bottom: 0px;
            height: 35px;
            width: 84px;
            border-radius: 5px;
            border: none;
            background-color: #52B6FF;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0em;
            text-align: center;
            div{
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

export const BoataoDia = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;400;700&display=swap');
    height: 30px;
    width: 30px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.clicado ? "#CFCFCF" : "#D4D4D4"};
    color: ${(props) => props.clicado ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${(props) => props.clicado ? "#CFCFCF" : "#FFFFFF"};
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const Habito = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;400;700&display=swap');

    display: flex;
    flex-direction: column;
    height: 91px;
    width: 340px;
    border-radius: 5px;
    background-color: white;
    position: relative;
    margin-bottom: 10px;

    h2{
        margin: 13px;
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
    }

    img{
        position: absolute;
        top: 10px;
        right: 10px;
        height: 15px;
        width: 13px;
    }

    .dias{
        display: flex;
        margin-left: 13px;
        margin-bottom: 15px;
        width: 240px;
    }
`;

export const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    margin-top: 22px;
    margin-bottom: 100px;
`;