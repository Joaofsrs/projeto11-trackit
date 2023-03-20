import styled from "styled-components";

export const ContainerTarefas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 70px;
    margin-bottom: 100px;
    h2{
        margin-top: 28px;
        margin-bottom: 8px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        width: 340px;
        font-weight: 400;
        text-align: left;
        color: #126BA5;
    }

    h3{
        margin-bottom: 30px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        width: 340px;
        font-weight: 400;
        text-align: left;
        color: #BABABA;
    }
`;

export const ContainerTarefa = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;400;700&display=swap');
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 94px;
    width: 340px;
    border-radius: 5px;
    margin-bottom: 10px;

    .check{
        border: none;
        margin: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 69px;
        width: 69px;
        border-radius: 5px;
        background-color: ${props => props.done ? "#8FC549" : "#E7E7E7"};
        img{
            height: 28px;
            width: 35px;
        }
    }

    h4{
        margin: 13px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
    }
    p{
        margin-left: 13px;
        margin-bottom: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: left;
    }
    .maiorSequencia{
        color: ${props => props.done ? (props.quantidade ? "#8FC549" : "white") : "white"};
    }
    .sequenciaAtual{
        color:  ${props => props.done ? "#8FC549" : "while"};
    }
`;

export const ContainerHoje = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
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