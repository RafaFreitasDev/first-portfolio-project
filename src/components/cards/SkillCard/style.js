import styled from "styled-components";

export const StyledSkillCard = styled.div`
 
    display: flex;
    flex-direction: column;
    align-items: center;
   
    div {
      width: 40px;
      height: 40px;
      border-radius: 8px;

      img {
        width: 100%;
        border-radius: 8px;
      }
    }

  h3 {
    font-size: 12px;
    line-height: 32px;
    color: #070e47;
    font-weight: 500;
  }

  @media(min-width:500px){
    h3{
    font-size: 16px;
  }
  }
`;