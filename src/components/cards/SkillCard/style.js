import styled from "styled-components";

export const StyledSkillCard = styled.div`
 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
   
    div {
      display: flex;
      justify-content: center;
      border-radius: 8px;
      

      img {
        height: 40px;
        width: 40px;
        border-radius: 8px;
      }
    }

  h3 {
    font-size: 12px;
    line-height: 15px;
    color: #070e47;
    font-weight: 600;
    text-align: center;
  }

  @media(min-width:500px){
    h3{
    font-size: 14px;
  }
  }
`;