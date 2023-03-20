import { ContainerHabitos, ContainerHeader, ContainerFooter, ContainerPrincipal } from "./StyledHabitos";
import perfil from "../../assets/perfil.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import CriaHabito from "./CriaHabito"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import HabitoElemento from "./HabitoElemento";
import UserContext from "../UserContext";

const arrayDias = [
    {id: 0, name: "D", clicado: false},
    {id: 1, name: "S", clicado: false},
    {id: 2, name: "T", clicado: false},
    {id: 3, name: "Q", clicado: false},
    {id: 4, name: "Q", clicado: false},
    {id: 5, name: "S", clicado: false},
    {id: 6, name: "S", clicado: false}
];

export default function Habitos(props) {
    const [criacao, setCriacao] = useState(false);
    const [listaHabitos, setListaHabitos] = useState([]);
    
    const { token, setToken } = useContext(UserContext);
    const { image, setImage } = useContext(UserContext);
    const { porcento, setPorcento } = useState(UserContext);

    function getListaHabitos(){
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", header)
            .then((res)=> {
                setListaHabitos(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    useEffect(() => {
        getListaHabitos();
    }, []);

    return (
        <ContainerHabitos>
            <ContainerHeader data-test="header" >
                <h1>TrackIt</h1>
                <img src={image} alt="foto de perfil do usuario" />
            </ContainerHeader>

            <div>
                <h2>Meus hábitos</h2>
                <button data-test="habit-create-btn" onClick={() => setCriacao(true)}>+</button>
            </div>
                
            <ContainerPrincipal>
                {criacao ?
                    <CriaHabito 
                        setCriacao={setCriacao} 
                        getListaHabitos={getListaHabitos}
                    /> : ""
                }


                {(listaHabitos.length > 0) ?
                    listaHabitos.map((habito) => 
                        <HabitoElemento 
                            key={habito.id} 
                            days={habito.days} 
                            name={habito.name} 
                            id={habito.id} 
                            getListaHabitos={getListaHabitos} 
                        />
                    )
                    :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                }
            </ContainerPrincipal>
                

            <ContainerFooter data-test="menu" >
                    <Link to="/habitos" data-test="habit-link" >
                        <p>Hábitos</p>
                    </Link>
                    <Link to="/hoje" data-test="today-link" >
                        <div className="botaoPrincipal">
                            <CircularProgressbar
                                value={porcento}
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
        </ContainerHabitos>
    );
}