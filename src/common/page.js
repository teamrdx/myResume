import React from "react";

//Components
import Layout from "../layout";

const Page = ({ title, children }) => {
  return <Layout pageTitle={title}>{children}</Layout>;
};

export default Page;
