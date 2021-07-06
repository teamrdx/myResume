import React from "react";

//Components
import Header from "../common/header";
import Footer from "../common/footer";
import Seo from "../common/seo";

//styles
import "./styles.css";
import { Main } from "./styles";

const Layout = ({ pageTitle, children }) => {
  return (
    <Main>
      <title>{pageTitle}</title>
      <Seo title={pageTitle} />
      <Header />
      {children}
      <Footer />
    </Main>
  );
};

export default Layout;
