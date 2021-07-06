import { Link } from "gatsby-plugin-react-intl";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : "var(--black)")};
  &:hover {
    color: ${(props) => (props.hovercolor ? props.hovercolor : "var(--green)")};
  }
  &:focus {
    color: var(--green);
  }
`;

export const activeStyles = {
  color: "var(--white)",
  borderBottom: "3px solid var(--verylightgreen) ",
};
