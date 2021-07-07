import React from "react";
import { Container } from "../../common/container";
import Education from "../indexPage/education";
import Hobby from "../indexPage/hobby";
import Language from "../indexPage/language";
import Skills from "../indexPage/skills";

const SideBar = () => {
  return (
    <Container>
      <Skills />
      <Education />
      <Language />
      <Hobby />
    </Container>
  );
};

export default SideBar;
