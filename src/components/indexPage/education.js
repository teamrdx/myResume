import React from "react";
import CardPlain from "../../common/cardPlain";
import { IconText } from "../../common/iconText";
import { Container } from "../../common/container";
import { BsBook, BsBraces } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import RoundText from "../../common/roundText";

const SKILLS = [
  "React",
  "Redux",
  "Javascript",
  "Typescript",
  "Node & Express",
  "Git & GitHub",
  "Gatsby",
  "Next.js",
  "Bootstrap",
  "Responsive Design",
  "Python",
  "SSH/Linux",
  "HTTP/HTTPS/JSON",
  "HTML5",
  "CSS3",
  "ES10",
  "Flexbox & Grid",
  "GraphQL & REST API",
  "MongoDB/PostgreSQL/MySQL",
  "Security, Production & Deployment",
];

const HOBBY = ["Hacking", "Travelling", "Reading", "Passive Income"];

const Education = () => {
  return (
    <Container style={{ padding: 0 }}>
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
      <IconText
        text="Skills"
        icon={<BsBraces size={21} color="var(--black)" />}
      />
      <div style={{ margin: ".9rem 0", maxWidth: "300px" }}>
        {SKILLS.map((skill, index) => (
          <RoundText key={index} text={skill} />
        ))}
      </div>
      <IconText
        text="Hobbies"
        icon={<FiBox size={21} color="var(--black)" />}
      />
      <div
        style={{
          margin: ".9rem 0",
          maxWidth: "300px",
        }}
      >
        {HOBBY.map((skill, index) => (
          <RoundText key={index} text={skill} />
        ))}
      </div>
      <IconText
        text="Languages"
        icon={<FiBox size={21} color="var(--black)" />}
      />
      <div
        style={{
          margin: ".9rem 0",
          maxWidth: "300px",
        }}
      >
        <RoundText text="German - C1" />
        <RoundText text="English - C1" />
        <RoundText text="Nepali - Native" />
      </div>
    </Container>
  );
};

export default Education;
