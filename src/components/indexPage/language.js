import React from "react";
import { Container } from "../../common/container";
import { IoLanguageOutline } from "react-icons/io5";
import RoundText from "../../common/roundText";
import { IconText } from "../../common/iconText";

const LANGUAGES = [
  {
    level: "C1",
    language: "English",
  },
  {
    level: "C1",
    language: "German",
  },
  {
    level: "Native",
    language: "Nepali",
  },
];

const Language = () => {
  return (
    <Container>
      <IconText
        text="Languages"
        icon={<IoLanguageOutline size={21} color="var(--black)" />}
      />
      <div
        style={{
          margin: ".9rem 0",
          maxWidth: "300px",
        }}
      >
        {LANGUAGES.map((language) => (
          <RoundText key={language.level} text={language.language} />
        ))}
      </div>
    </Container>
  );
};

export default Language;
