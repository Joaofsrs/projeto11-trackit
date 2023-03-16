import styled from "styled-components";
import perfil from "../assets/perfil.png"
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Hoje() {
    return (
        <ContainerHoje>
            <ContainerHoje>
                <ContainerHeader>
                    <h1>TrackIt</h1>
                    <img src={perfil} alt="foto de perfil do usuario" />
                </ContainerHeader>
            </ContainerHoje>        

            <ContainerFooter>
                    <p>Hábitos</p>
                    <div class="botaoPrincipal">
                        <CircularProgressbar
                            value={20}
                            text="Hoje"
                            background
                            backgroundPadding={6}
                            className="circularBar"
                            styles={buildStyles({
                                textSize:"17px",
                                backgroundColor: "#3e98c7",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                    </div>

                    <p>Histórico</p>
            </ContainerFooter>
        </ContainerHoje>
    );
}

const ContainerHoje = styled.div`
    width: 100%;
    height: 100%;
`

const ContainerHeader = styled.header`
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

const ContainerFooter = styled.footer`
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
`;