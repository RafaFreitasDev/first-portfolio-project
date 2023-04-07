import styled from "styled-components";

export const StyledProjects = styled.header`
  padding: 20px;
  width: 100%;
  background-color: rgb(232, 234, 237, 0.8);
  justify-content: space-around;
  border-radius: 25px;
  margin-top: 20px;
  padding-bottom: 40px;

  .projects {
    font-size: 32px;
    line-height: 48px;
    color: #070e47;
    font-weight: 600;
    text-align: center;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-gap: 10px;
    margin-top: 8px;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
    
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 1025px) {
    width: 990px;
  }
`;
