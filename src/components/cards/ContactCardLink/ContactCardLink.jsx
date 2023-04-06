import { StyledContactCardLink } from "./style"


export const ContactCardLink = ({logo, text, link}) => {

    return(
        <StyledContactCardLink>
            <a href={link} target="_blank">
            <div>
                <img src={logo} alt={text} />
            </div>
            <h3>{text}</h3>
            </a>
        </StyledContactCardLink>
    )
}