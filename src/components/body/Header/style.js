import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;

  img {
    width: 100%;
  }

  @media (min-width: 769px) {
    img{
        height: 150px;
    }
  }

  @media (min-width: 1300px) {
    img{
        height: 200px;
    }
  }
`;
