import styled from "styled-components";
import fundoImg from "./assets/img/perfil/img1.webp";

export const StyledContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${fundoImg});
  background-size: cover;

  .btnBox{
    display: flex;
    gap: 20px;

    button{
      width: 120px;
      height: 40px;
      border-radius: 8px;
      color: #070e47;
      font-weight: 600;
      background-color: rgb(232, 234, 237, 0.8);
      border: 4px solid white;
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  @media (min-width: 769px) {
    
    .box {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }

 
`;
