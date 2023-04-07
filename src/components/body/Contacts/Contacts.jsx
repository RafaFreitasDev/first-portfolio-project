import { StyledContact } from "./style"
import { ContactCardLink } from "../../cards/ContactCardLink/ContactCardLink"
import { ContactCard } from "../../cards/ContactCard/ContactCard"
import linkedin from "../../../assets/img/perfil/linkedin.png"
import github from "../../../assets/img/perfil/github.png"
import email from "../../../assets/img/perfil/email.png"
import whatsapp from "../../../assets/img/perfil/whatsapp.png"
import curriculo from "../../../assets/img/perfil/curriculo.png"
import { CardEmail } from "../../cards/CardEmail/CardEmail"
import { useContext } from "react"
import { LanguageContext } from "../../../context/language"




export const Contacts = () => {

    const { lang } = useContext(LanguageContext)

    return(
        <StyledContact>
            {lang=="port"?<ContactCardLink logo={linkedin} text="Linkedin" link="https://www.linkedin.com/in/rafael-almeida-freitas/"/>:<ContactCardLink logo={linkedin} text="Linkedin" link="https://www.linkedin.com/in/rafael-almeida-freitas/?locale=en_US"/>}
            <ContactCardLink logo={github} text="GitHub" link="https://github.com/RafaFreitasDev?tab=repositories"/>
            <CardEmail logo={email} text="rafafreitas.dev@gmail.com"/>
            {lang=="port"?<ContactCard logo={whatsapp} text="(71) 99295-1939"/>:<CardEmail logo={whatsapp} text="+55 (71) 99295-1939"/>}
            {lang=="port"?<ContactCardLink logo={curriculo} text="Currículo" link="https://drive.google.com/file/d/17v6YHsqVhIB9-yy3MdZeqtWO6X2HjzEE/view?usp=share_link"/>:<ContactCardLink logo={curriculo} text="Resume" link="https://drive.google.com/file/d/1RkQzntOziau8Fg_u0-5lSYRPGniQ06OP/view?usp=share_link"/>}
        </StyledContact>
    )
}