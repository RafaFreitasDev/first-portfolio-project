import { StyledContactCard } from "./style"


export const ContactCard = ({logo, text}) => {

    return(
        <StyledContactCard>
            <div>
                <img src={logo} alt={text} />
            </div>
            <h3>{text}</h3>
        </StyledContactCard>
    )
}