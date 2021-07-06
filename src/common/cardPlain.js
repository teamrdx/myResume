import React from "react";
import styled from "styled-components";
import { Text } from "./text";

const CardPlain = ({ school, location, duration, description }) => {
  return (
    <Content>
      <Text as="h4" fontWeight="var(--bold)">
        {school}
      </Text>
      <Text as="p" fontSize="var(--sm)">
        {location}
      </Text>
      <Text
        as="p"
        fontWeight="var(--bold)"
        fontSize="var(--sm)"
        margin=".3rem 0"
      >
        {description}
      </Text>
      <Text
        as="p"
        fontWeight="var(--light)"
        fontSize="var(--sm)"
        margin=".3rem 0"
      >
        {duration}
      </Text>
    </Content>
  );
};

export default CardPlain;

const Content = styled.div`
  padding: 1.2rem 0;
`;
