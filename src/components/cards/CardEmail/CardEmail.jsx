import { StyledCardEmail } from "./style"


export const CardEmail = ({logo, text}) => {

    return(
        <StyledCardEmail>
            <div>
                <img src={logo} alt={text} />
            </div>
            <h3>{text}</h3>
        </StyledCardEmail>
    )
}