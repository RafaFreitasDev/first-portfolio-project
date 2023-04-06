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

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 769px) {
    
    .box {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }

  @media (min-width: 1025px) {
    /* width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center; */
  }
`;
