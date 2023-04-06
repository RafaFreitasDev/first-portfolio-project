import { StyledSkillCard } from "./style"


export const SkillCard = ({logo, text}) => {

    return(
        <StyledSkillCard>
            <div className="foto">
                <img src={logo} alt={text} />
            </div>
            <h3>{text}</h3>
        </StyledSkillCard>
    )
}