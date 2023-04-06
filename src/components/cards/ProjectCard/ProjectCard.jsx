import { StyledProjectCard } from "./style"


export const ProjectCard = ({logo, text, link}) => {

    return(
        <StyledProjectCard>
            <a href={link} target="_blank">
            <div>
                <img src={logo} alt={text} />
            </div>
            <h3>{text}</h3>
            </a>
        </StyledProjectCard>
    )
}