import { ContainerHoje, ContainerHeader, ContainerTarefas, ContainerTarefa, ContainerFooter } from "./StyledHoje";
import perfil from "../../assets/perfil.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import TarefaHoje from "./TarefaHoje";

const dayName = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
const now = new Date();

export default function Hoje(props) {
    const messageDate = `${dayName[now.getDay()]}, ${now.getDate()}/${now.getMonth() + 1}`;
    const [habitosHoje, setHabitoHoje] = useState([]);
    const [porcentagemConcluidos, setProcentagemConcluidos] = useState(0);
    const [habitosConcluidos, setHabitosConcluidos] = useState(0);

    function getHoje(){
        const header = {
            headers: {
                Authorization: `Bearer ${props.token}`,
            }
        };
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", header)
            .then((res) => {
                setHabitoHoje(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    useEffect(() => {
        getHoje();
    }, [])

    useEffect(() => {
        let porcentagemAux = 0;
        if(habitosHoje.length > 0){
            habitosHoje.forEach(element => {
                if(element.done){
                    porcentagemAux++;
                }
            });
            setHabitosConcluidos(porcentagemAux);
            setProcentagemConcluidos(Math.round((porcentagemAux/habitosHoje.length)*100))
        }
    }, [habitosConcluidos, porcentagemConcluidos, habitosHoje]);
    

    return (
        <>
            <ContainerHoje>
                <ContainerHeader data-test="header" >
                    <h1>TrackIt</h1>
                    <img src={props.image} alt="foto de perfil do usuario" />
                </ContainerHeader>


                <ContainerTarefas>
                    <h2 data-test="today" >{messageDate}</h2>
                    <h3 data-test="today-counter" >{(porcentagemConcluidos > 0) ? `${porcentagemConcluidos}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</h3>
                    
                    {habitosHoje.map((element) => {
                        return(
                            <TarefaHoje 
                                key={element.id}
                                token={props.token}
                                setHabitosConcluidos= {setHabitosConcluidos}
                                habitosConcluidos={habitosConcluidos}
                                setProcentagemConcluidos={setProcentagemConcluidos}
                                tamanho={habitosHoje.length}
                                getHoje={getHoje}
                                id={element.id}
                                name={element.name}
                                done={element.done}
                                currentSequence={element.currentSequence}
                                highestSequence={element.highestSequence}
                            />
                        )
                    })}
                    
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