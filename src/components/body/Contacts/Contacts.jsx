import { StyledContact } from "./style"
import { ContactCardLink } from "../../cards/ContactCardLink/ContactCardLink"
import { ContactCard } from "../../cards/ContactCard/ContactCard"
import linkedin from "../../../assets/img/perfil/linkedin.png"
import github from "../../../assets/img/perfil/github.png"
import email from "../../../assets/img/perfil/email.png"
import whatsapp from "../../../assets/img/perfil/whatsapp.png"
import curriculo from "../../../assets/img/perfil/curriculo.png"
import { CardEmail } from "../../cards/CardEmail/CardEmail"




export const Contacts = () => {

    return(
        <StyledContact>
            <ContactCardLink logo={linkedin} text="Linkedin" link="https://www.linkedin.com/in/rafael-almeida-freitas/"/>
            <ContactCardLink logo={github} text="GitHub" link="https://github.com/RafaFreitasDev?tab=repositories"/>
            <CardEmail logo={email} text="rafafreitas.dev@gmail.com"/>
            <ContactCard logo={whatsapp} text="(71) 99295-1939"/>
            <ContactCardLink logo={curriculo} text="Currículo" link="https://drive.google.com/file/d/17v6YHsqVhIB9-yy3MdZeqtWO6X2HjzEE/view?usp=share_link"/> 
        </StyledContact>
    )
}