import styled from "styled-components";

export const StyledContactCard = styled.div`
  display: flex;
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
    font-size: 14px;
    line-height: 32px;
    color: #070e47;
    font-weight: 500;
    margin-left: 15px;
  }

  @media (min-width: 500px) {
    h3 {
      font-size: 24px;
    }
  }
`;
