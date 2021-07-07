import React from "react";
import CardPlain from "../../common/cardPlain";
import { IconText } from "../../common/iconText";
import { Container } from "../../common/container";
import { BsBook } from "react-icons/bs";

const Education = () => {
  return (
    <Container padding="0 0.9rem">
      <IconText
        icon={<BsBook size={21} color="var(--black)" />}
        text="Education"
      />
      <CardPlain
        school="Technische Hochschule Wildau"
        location="Wildau, Berlin"
        duration="2013 - 2014"
        description="Abitur"
      />
      <CardPlain
        school="GPB College Berlin"
        location="Berlin, Germany"
        duration="2018 - 2019"
        description="Ausbildung as IT Professional"
      />
      <CardPlain
        school="Zero to Mastery Academy"
        location="Online"
        duration="2019 - 2020"
        description="Full-stack web Development, Data science and Artificial Intelligence"
      />
    </Container>
  );
};

export default Education;
