import { ContainerCriacao } from "./StyledHabitos";
import DiaDaSemana from "./DiaDaSemana"
import { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner"

const arrayDias = [
    {id: 0, name: "D", clicado: false},
    {id: 1, name: "S", clicado: false},
    {id: 2, name: "T", clicado: false},
    {id: 3, name: "Q", clicado: false},
    {id: 4, name: "Q", clicado: false},
    {id: 5, name: "S", clicado: false},
    {id: 6, name: "S", clicado: false}
];

export default function CriaHabito(props){
    const [botoesDiaSemana, setBotoesDiaSemana] = useState(arrayDias);
    const [nomeNovoHabito, setNomeNovoHabito] = useState("");
    const [sendingHabito, setSendingHabito] = useState(false);

    function sendHabito(e){
        e.preventDefault();
        setSendingHabito(true);
        const novoArray = [...botoesDiaSemana];
        const idsDias = [];
        for(let i = 0; i < botoesDiaSemana.length; i++){
            if(botoesDiaSemana[i].clicado){
                idsDias.push(botoesDiaSemana[i].id);
                novoArray[i].clicado = false;
            }
        }
        const dados = {
            name: nomeNovoHabito,
            days: idsDias
        };
        const header = {
            headers: {
                Authorization: `Bearer ${props.token}`,
            }
        };
        if(idsDias.length > 0){
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
                dados, 
                header
            )
            .then((res) => {
                setBotoesDiaSemana(novoArray);
                setNomeNovoHabito("");
                props.setCriacao(false);
                props.getListaHabitos();
                setSendingHabito(false);
            })
            .catch((err) => {
                alert(err.message);
                setSendingHabito(false);
            });
        }

    }

    function sendCancel(e){
        e.preventDefault();
        props.setCriacao(false);
    }

    return(
        <ContainerCriacao sendingHabito={sendingHabito} > 
            <form onSubmit={sendHabito}>
                <input 
                    className="nomeCriacao" type="text" 
                    required 
                    placeholder="nome do hábito" 
                    value={nomeNovoHabito} 
                    onChange={(e) => setNomeNovoHabito(e.target.value)} 
                    disabled={sendingHabito}
                />
                <div className="semana" >
                    {botoesDiaSemana.map((botao) => 
                        <DiaDaSemana 
                            key={botao.id}
                            setBotoesDiaSemana={setBotoesDiaSemana} 
                            botoesDiaSemana={botoesDiaSemana}
                            id={botao.id}         
                            name={botao.name} 
                            clicado={botao.clicado} 
                            disabled={sendingHabito}
                        />
                    )}
                </div>
                <div className="botoes">
                    <button 
                        className="cancelar" 
                        name="cancelar" 
                        onClick={sendCancel} 
                        disabled={sendingHabito} 
                    >Cancelar</button>
                    <button 
                        type="submit" 
                        className="salvar" 
                        name="salvar" 
                        disabled={sendingHabito} 
                    >
                        {sendingHabito ? 
                            <TailSpin
                            height="18"
                            width="18"
                            color="#FFFFFF"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            /> : 
                            "Salvar"
                        }
                    </button>
                </div>
            </form>
        </ContainerCriacao>
    );
}