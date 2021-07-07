import React from "react";
import styled from "styled-components";
import { Container } from "./container";
import { ImageGatsby } from "../common/image";

const Footer = () => {
  return (
    <Container>
      <Foot>
        <div style={{ fontFamily: "var(--family)", color: "var(--text)" }}>
          © {new Date().getFullYear()} Biplav Dahal
        </div>
        <Image>
          <ImageGatsby src="footer-logo.png" alt="Biplav Dahal" />
        </Image>
        <div style={{ fontFamily: "var(--family)" }}>
          <a
            style={{ textDecoration: "none", color: "var(--text)" }}
            href="mailto:hi.biplav@gamil.com?subject=Loved your GitHub CV"
            target="_blank"
            rel="noreferrer"
          >
            Contact Me
          </a>
        </div>
      </Foot>
    </Container>
  );
};

export default Footer;

const Foot = styled.footer`
  border-top: 1px solid var(--text);
  margin-top: 0.9rem;
  height: 6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 420px) {
    flex-direction: column-reverse;
  } ;
`;

const Image = styled.div`
  width: 120px;
  @media (max-width: 500px) {
    width: 90px;
  }
`;
