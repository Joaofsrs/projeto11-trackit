import { ContainerHistorico, ContainerHeader, ContainerConteudo, ContainerFooter } from "./StyledHistorico";
import perfil from "../../assets/perfil.png"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Histórico() {
    return (
        <ContainerHistorico>
            <ContainerHeader data-test="header" >
                <h1>TrackIt</h1>
                <img src={perfil} alt="foto de perfil do usuario" />
            </ContainerHeader>

            <ContainerConteudo>
                <h2>Histórico</h2>
                <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
            </ContainerConteudo>

            <ContainerFooter data-test="menu" >
                    <Link to="/habitos" data-test="habit-link" >
                        <p>Hábitos</p>
                    </Link>
                    <Link to="/hoje" data-test="today-link" >
                        <div className="botaoPrincipal">
                            <CircularProgressbar
                                value={20}
                                text="Hoje"
                                background
                                backgroundPadding={6}
                                className="circularBar"
                                styles={buildStyles({
                                    textSize: "17px",
                                    backgroundColor: "#3e98c7",
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "transparent"
                                })}
                            />
                        </div>
                    </Link>
                    <Link to="/historico" data-test="history-link" >
                        <p>Histórico</p>
                    </Link>
                </ContainerFooter>
        </ContainerHistorico>
    );
}