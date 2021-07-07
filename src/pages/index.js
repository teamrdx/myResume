import React from "react";
import { Container } from "../common/container";
import Page from "../common/page";
import Main from "../components/main";
import SideBar from "../components/sideBar";

const pageStyle = {
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  gridGap: "3rem",
  margin: "var(--mg)",
};

const IndexPage = () => {
  return (
    <Page title="home">
      <Container style={pageStyle} padded>
        <Main />
        <SideBar />
      </Container>
    </Page>
  );
};

export default IndexPage;
