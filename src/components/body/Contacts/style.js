import styled from "styled-components";

export const StyledContact = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
background-color: rgb(232, 234, 237);
padding: 20px;
padding-top: 40px;
padding-bottom: 50px;
width: 270px;

border-radius: 25px;
margin-top: 20px;

@media (min-width: 500px) {
    width: 320px;
    height: 340px;
  }

@media (min-width: 769px) {
    margin-top: 0;
  }
`;