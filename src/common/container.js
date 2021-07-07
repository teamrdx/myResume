import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-inline: auto;
  padding: ${(props) => (props.padded ? " 0 1.5rem" : props.padding)};
`;

export const ContainerColumn = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-inline: auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${(props) => (props.gap ? props.gap : " 3rem")};
  justify-items: ${(props) =>
    props.justifyItems ? props.justifyItems : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 1.5rem;
  }
`;
