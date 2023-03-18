import { ContainerHabitos, ContainerHeader, ContainerFooter } from "./StyledHabitos";
import perfil from "../../assets/perfil.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import CriaHabito from "./CriaHabito"

export default function Habitos(props) {
    return (
        <ContainerHabitos>
            <ContainerHeader>
                <h1>TrackIt</h1>
                <img src={perfil} alt="foto de perfil do usuario" />
            </ContainerHeader>

            <div>
                <h2>Meus hábitos</h2>
                <button>+</button>
            </div>
            
            <CriaHabito />

            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

            <ContainerFooter>
                    <Link to="/habitos" >
                        <p>Hábitos</p>
                    </Link>
                    <Link to="/hoje">
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
                    <Link to="/historico" >
                        <p>Histórico</p>
                    </Link>
                </ContainerFooter>
        </ContainerHabitos>
    );
}