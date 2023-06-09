import { BoataoDia } from "./StyledHabitos";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function DiaDaSemana(props){

    const { token, setToken } = useContext(UserContext);
    const { image, setImage } = useContext(UserContext);

    function changeButtonDay(){
        let arrayAux = props.botoesDiaSemana;
        for(let i = 0; i < arrayAux.length; i++){
            if(arrayAux[i].id === props.id){
                if(arrayAux[i].clicado){
                    arrayAux[i].clicado = false;
                }else{
                    arrayAux[i].clicado = true;
                }
            }
        }
        const novoArray = [...arrayAux];
        props.setBotoesDiaSemana(novoArray);
    }

    return(
        <>
            <BoataoDia 
                data-test="habit-day"
                id={props.id} 
                type="button" 
                name={props.id} 
                value={props.name} 
                clicado={props.clicado} 
                onClick={changeButtonDay} 
                disabled={props.disabled}
            />
        </>
    );
}