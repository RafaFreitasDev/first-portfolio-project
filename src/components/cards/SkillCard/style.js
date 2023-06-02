import styled from "styled-components";

export const StyledSkillCard = styled.div`
 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
   
    
   
    div {
      display: flex;
      justify-content: center;
      border-radius: 8px;
      height: 40px;
      

      img {
        height: 100%;
        width: 40px;
        border-radius: 8px;
        background-color: white;
        
        
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