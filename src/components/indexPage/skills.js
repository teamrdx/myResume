import React from "react";
import { Container } from "../../common/container";
import { IconText } from "../../common/iconText";
import RoundText from "../../common/roundText";
import { BsBraces } from "react-icons/bs";

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

const Skills = () => {
  return (
    <Container>
      <IconText
        text="Skills"
        icon={<BsBraces size={21} color="var(--black)" />}
      />
      <div style={{ margin: ".9rem 0", maxWidth: "300px" }}>
        {SKILLS.map((skill, index) => (
          <RoundText key={index} text={skill} />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
