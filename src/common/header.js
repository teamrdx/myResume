import React from "react";
import styled from "styled-components";
import { Text } from "../common/text";
import { ButtonLink } from "../common/button";
import { ImageGatsby } from "../common/image";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { Container } from "../common/container";
import Star from "./starButton";

const LINKS = [
  {
    name: "Website",
    link: "https://team-rdx.com/",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/biplavdahal/",
  },
  {
    name: "GitHub",
    link: "https://github.com/teamrdx",
  },
];

const Header = () => {
  return (
    <StyledContainer>
      <Head>
        <div>
          <Text
            as="h1"
            color="var(--black)"
            fontWeight="var(--bold)"
            margin="0 0 .6rem 0"
          >
            Biplav Dahal
          </Text>
          <IconText
            icon={<HiOutlineMail size={27} color="var(--text)" />}
            text=" hi.biplav@gmail.com"
          />
          <IconText
            icon={<FiPhone size={27} color="var(--text)" />}
            text=" +49 176 315 35 367"
          />
          <IconText
            icon={<BiMap size={27} color="var(--text)" />}
            text=" Florian-Geyer-Straße 110 12489 Berlin"
          />
          <ButtonHolder>
            {LINKS.map((link, index) => (
              <ButtonLink
                key={index}
                href={link.link}
                rel="nofollow"
                target="_blank"
              >
                {link.name}
              </ButtonLink>
            ))}
          </ButtonHolder>
        </div>
        <ImageHolder>
          <Image>
            <ImageGatsby src="profile.png" alt="Biplav Dahal photo" />
          </Image>
          <Star />
        </ImageHolder>
      </Head>
    </StyledContainer>
  );
};

export default Header;

const IconText = ({ icon, text }) => {
  return (
    <Content>
      <div style={{ marginRight: ".3rem" }}>{icon}</div>
      <Text as="p" fontSize="var(--md)" color="var(--black)">
        {text}{" "}
      </Text>
    </Content>
  );
};
const StyledContainer = styled(Container)``;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.3;
  max-width: 270px; ;
`;

const ButtonHolder = styled.div`
  margin: 0.9rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.6rem;
  max-width: 300px;
`;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;
  max-width: 1200px;
  margin-inline: auto;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 3rem;
  border-radius: 0.9rem;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Image = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border: 3px solid var(--black);
  border-radius: 50%;
`;

const ImageHolder = styled.div`
  display: grid;
  place-items: center;
`;
