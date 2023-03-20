import { ContainerHoje, ContainerHeader, ContainerTarefas, ContainerTarefa, ContainerFooter } from "./StyledHoje";
import perfil from "../../assets/perfil.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import check from "../../assets/check.png";
import { Link } from "react-router-dom";

export default function Hoje() {
    return (
        <>
            <ContainerHoje>
                <ContainerHeader data-test="header" >
                    <h1>TrackIt</h1>
                    <img src={perfil} alt="foto de perfil do usuario" />
                </ContainerHeader>

                <ContainerTarefas>
                    <h2>Segunda, 17/05</h2>
                    <h3>Nenhum hábito concluído ainda</h3>

                    <ContainerTarefa>
                        <div>

                            <h4>Ler 1 capítulo de livro</h4>
                            <p>Sequência atual: 3 dias</p>
                            <p>Seu recorde: 5 dias</p>
                        </div>
                        <div>
                            <img src={check} alt="checkmark" />
                        </div>
                    </ContainerTarefa>
                </ContainerTarefas>

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
            </ContainerHoje>
        </>
    );
}