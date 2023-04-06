import styled from "styled-components";

export const StyledPerfil = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: rgb(232, 234, 237);
padding: 0px  20px;
padding-bottom: 30px;
border-radius: 25px;

div{
  h3{
    font-size: 14px;
    color: #070e47;
    font-weight: 500;
    text-align: center;
    line-height: 24px;

    .title{
      font-size: 24px;
      font-weight: 600;
    }

    .neg{
      font-weight: 600;
    }
  }
}

  @media (min-width: 500px) {
    width: 650px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    height: 340px;

    div{
      margin-right: 15px;
      h3{
    font-size: 16px;
    line-height: 24px;

    .title{
      font-size: 36px;
      font-weight: 600;
    }

    .neg{
      font-weight: 600;
    }
  }
    }
    }
`;