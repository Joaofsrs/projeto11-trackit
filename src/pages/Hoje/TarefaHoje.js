import { ContainerTarefa } from "./StyledHoje";
import check from "../../assets/check.png";
import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../UserContext";

export default function TarefaHoje(props){
    const { token, setToken } = useContext(UserContext);
    const { image, setImage } = useContext(UserContext);

    const [carregando, setCarregando] = useState(false);

    function marcaDesmarcaHabito(){
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        setCarregando(true);
        if(props.done){
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`, "",header)
                .then((res) => {
                    console.log(res);
                    props.getHoje();
                    setCarregando(false);
                    props.setHabitosConcluidos(props.habitosConcluidos - 1)
                })
                .catch((err) => {
                    console.log(err);
                    setCarregando(false);
                });
        }else{
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`, "", header)
                .then((res) => {
                    console.log(res);
                    props.getHoje();
                    setCarregando(false);
                    props.setHabitosConcluidos(props.habitosConcluidos + 1)
                })
                .catch((err) => {
                    alert(err.message);
                    setCarregando(false);
                });
        }
    }

    return(
        <ContainerTarefa data-test="today-habit-container" done={props.done} quantidade={props.highestSequence >= props.currentSequence} >
            <div>
                <h4 data-test="today-habit-name" >{props.name}</h4>
                <p data-test="today-habit-sequence" >Sequência atual: <span className="sequenciaAtual">{props.currentSequence} dias</span></p>
                <p data-test="today-habit-record" >Seu recorde: <span className="maiorSequencia">{props.highestSequence} dias</span></p>
            </div>
            <button data-test="today-habit-check-btn" className="check" onClick={marcaDesmarcaHabito} disabled={carregando} >
                <img src={check} alt="checkmark" />
            </button>
        </ContainerTarefa>
    );
}