import React from "react";
import { Container } from "../../common/container";
import { IconText } from "../../common/iconText";
import RoundText from "../../common/roundText";
import { FiBox } from "react-icons/fi";

const HOBBY = ["Hacking", "Travelling", "Reading", "Passive Income"];

const Hobby = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Hobby;
