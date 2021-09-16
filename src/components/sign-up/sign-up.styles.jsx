import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    width: 330px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
