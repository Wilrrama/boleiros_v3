import React from "react";
import styled from "styled-components";

const FormationWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2em;
`;

const Paragraph = styled.p`
  color: #666;
  font-size: 1.2em;
`;

export const Formation = () => {
  return (
    <FormationWrapper>
      <Title>Escalação</Title>
      <Paragraph>Em construção</Paragraph>
    </FormationWrapper>
  );
};
