import { StyledHeader } from "./style"
import fundo from "../../../assets/img/perfil/alta-velocidade-mapa-mundial-tecnologia-abstrata-plano-de-fundo-conceituado-padrão-movimento-e-brilho-sobre-azul-escuro-hitech-193132388.jpg"

export const Header = () => {

    return(
        <StyledHeader>
                <img src={fundo} alt="Mapa mundi tech" />
        </StyledHeader>
    )
}