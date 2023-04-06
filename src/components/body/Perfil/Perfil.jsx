import {Moldura} from "../Moldura/Moldura"
import { StyledPerfil } from "./style"



export const Perfil = () => {

    return(
        <StyledPerfil>
                <Moldura/>
                <div>
                    <h3>
                        <span className="title">Olá,</span><br />meu nome é <span className="neg">Rafael Freitas</span>, Desenvolvedor <span className="neg">FullStack</span> em formação, já graduado como Desenvolvedor <span className="neg">Front</span> End. Formado em Eng. Mecânica, bom em trabalhar em equipe, fácil comunicação e versátil em solucionar problemas. Sempre buscando melhorias, com muito foco e disciplina para adquirir novos conhecimentos.
                    </h3>
                </div>
        </StyledPerfil>
    )
}