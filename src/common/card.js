import React from "react";
import styled from "styled-components";
import { BsBookmarks, BsStar } from "react-icons/bs";
import { Text } from "./text";

const Card = ({ work, position, duration, location, description, link }) => {
  return (
    <Content>
      <IconText1
        icon={<BsBookmarks color="var(--text)" />}
        text={work}
        link={link}
      />
      <Text as="h4" fontWeight="var(--bold)">
        {position}
      </Text>
      <div>
        <Text
          as="p"
          fontWeight="var(--light)"
          fontSize="var(--sm)"
          margin=".12rem 0"
        >
          {duration}
        </Text>
        <Text
          as="p"
          fontWeight="var(--light)"
          fontSize="var(--xs)"
          margin=".12rem 0 1.2rem"
        >
          {location}
        </Text>
      </div>
      {description.map((item, index) => (
        <IconText2
          key={index}
          icon={<BsStar color="var(--text)" />}
          text={item}
        />
      ))}
    </Content>
  );
};

export default Card;

const IconText1 = ({ icon, text, link }) => {
  return (
    <Container>
      <div style={{ marginRight: ".3rem" }}>{icon}</div>
      <Text
        style={{ textDecoration: "none" }}
        as="a"
        fontSize="var(--sm)"
        color="var(--blue)"
        fontWeight="var(--bold)"
        href={link}
        target="_blank"
        rel="nofollow"
      >
        {text}
      </Text>
    </Container>
  );
};

const IconText2 = ({ icon, text }) => {
  return (
    <Container style={{ alignItems: "flex-start" }}>
      <div style={{ marginRight: ".3rem" }}>{icon}</div>
      <Text as="p" fontWeight="var(--light)" fontSize="var(--sm)">
        {text}{" "}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.3;
  margin: 0.3rem 0;
`;

const Content = styled.div`
  margin: 0.9rem 0;
  padding: 1.2rem 1.2rem 3rem;
  border-radius: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;
