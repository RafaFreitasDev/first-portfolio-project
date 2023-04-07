import styled from "styled-components";

export const StyledProjectCard = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
   
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
  }

  h3 {
    font-size: 12px;
    line-height: 12px;
    color: #070e47;
    font-weight: 600;
    text-align: center;
    margin-top: 15px;
  }

  @media(min-width:500px){
    h3{
    font-size: 16px;
  }
  }
`;
