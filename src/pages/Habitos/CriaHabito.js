import { ContainerCriacao, DiaDaSemana } from "./StyledHabitos";

export default function CriaHabito(){


    return(
        <ContainerCriacao>
            <form>
                <input className="nomeCriacao" type="text" placeholder="nome do hábito" />
                <div className="semana" >
                    <DiaDaSemana type="button" value="S"/>
                    <DiaDaSemana type="button" value="S"/>
                    <DiaDaSemana type="button" value="S"/>
                    <DiaDaSemana type="button" value="S"/>
                    <DiaDaSemana type="button" value="S"/>
                    <DiaDaSemana type="button" value="S"/>
                    <DiaDaSemana type="button" value="S"/>
                </div>

            </form>
        </ContainerCriacao>
    );
}

const diasDaSemana = [
    {id: 1, name: "S", clicado: false},
    {id: 2, name: "S", clicado: false},
    {id: 3, name: "S", clicado: false},
    {id: 4, name: "S", clicado: false},
    {id: 5, name: "S", clicado: false},
    {id: 6, name: "S", clicado: false},
    {id: 7, name: "S", clicado: false},
]