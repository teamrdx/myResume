import React from "react";
import styled from "styled-components";
import { Text } from "./text";

const RoundText = ({ text }) => {
  return (
    <Container>
      <Text as="p" color="var(--blue)" fontWeight="var(--bold)">
        {text}
      </Text>
    </Container>
  );
};

export default RoundText;

const Container = styled.div`
  background: var(--blue-bg);
  padding: 0.51rem 0.9rem;
  border-radius: 1.2rem;
  display: inline-block;
  margin: 0.21rem;
`;
