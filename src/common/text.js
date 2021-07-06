import React from "react";
import styled from "styled-components";
// Defaults to weight 400 with all styles included.

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-style: ${(props) => (props.italic ? "italic" : "")};
  color: ${(props) => (props.color ? props.color : "var(--text)")};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-width: ${(props) => props.maxWidth};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1.32)};
  text-transform: ${(props) => (props.capital ? "uppercase" : "")};
  @media (max-width: 48em) {
    font-size: ${(props) => props.mobFontSize};
    padding: ${(props) => props.mobPadding};
  }
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

export const Text = ({ as, children, ...props }) => {
  return (
    <Container as={as} {...props}>
      {children}
    </Container>
  );
};
