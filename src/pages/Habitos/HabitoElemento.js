import { Habito, BoataoDia } from "./StyledHabitos";
import lixeira from "../../assets/Lixeira.png"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
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

export default function HabitoElemento(props){
    const { token, setToken } = useContext(UserContext);
    const { image, setImage } = useContext(UserContext);
    const { porcento, setPorcento } = useContext(UserContext);
    function deleteHabito(){
        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`, header)
            .then((res) => {
                props.getListaHabitos();
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return(
        <Habito data-test="habit-container" >
            <h2 data-test="habit-name" >{props.name}</h2>
            <div className="dias" >
                {arrayDias.map((element) => 
                    <BoataoDia 
                        data-test="habit-day"
                        key={element.id}
                        id={element.id} 
                        type="button" 
                        name={element.id} 
                        value={element.name} 
                        clicado={(props.days.includes(element.id))} 
                    />
                )}
            </div>
            <img data-test="habit-delete-btn" src={lixeira} alt="icone de lixeira" onClick={deleteHabito} />
        </Habito>
    );
}