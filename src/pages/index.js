import React from "react";
import styled from "styled-components";
import { Container } from "../common/container";
import Page from "../common/page";
import Main from "../components/main";
import SideBar from "../components/sideBar";

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 3fr, 1fr;
  grid-gap: 3rem;
  margin: var(--mg);
`;

const IndexPage = () => {
  return (
    <Page title="home">
      <StyledContainer padded>
        <Main />
        <SideBar />
      </StyledContainer>
    </Page>
  );
};

export default IndexPage;
