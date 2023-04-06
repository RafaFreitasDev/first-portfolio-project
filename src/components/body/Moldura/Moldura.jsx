import { StyledMoldura } from "./style"
import moldura from "../../../assets/img/perfil/moldura.png"
import foto from "../../../assets/img/perfil/foto perfil.png"


export const Moldura = () => {

    return(
        <StyledMoldura>
                <img className="moldura" src={moldura} alt="moldura" />
                <img className="foto" src={foto} alt="Rafael Freitas" />
        </StyledMoldura>
    )
}