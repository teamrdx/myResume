import React from "react";
import styled from "styled-components";
import { Text } from "./text";

export const IconText = ({ icon, text }) => {
  return (
    <Container>
      <div style={{ margin: "0 .6rem" }}>{icon}</div>
      <Text as="h3" color="var(--black)" fontWeight="var(--bold)">
        {text}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 3px solid var(--red);
  max-width: 159px;
  padding-bottom: 0.6rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
