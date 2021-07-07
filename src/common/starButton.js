import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";

const Star = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState("loading");

  const handleCount = async () => {
    if (isClicked) {
      setCount(count - 1);
      console.log("minus", count);
      await fetch("api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: count - 1,
      })
        // .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
    if (!isClicked) {
      setCount(count + 1);
      console.log("plus", count);
      await fetch("api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: count + 1,
      })
        // .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetch("api/data")
        .then((response) => response.json())
        .then((dbData) => setCount(dbData[0].likes))
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);

  useEffect(() => {}, [count]);

  return (
    <Holder>
      <Content>
        <Container onClick={() => [setIsClicked(!isClicked), handleCount()]}>
          <Icon>
            {isClicked ? (
              <AiFillLike color={"#24292f"} />
            ) : (
              <BiLike color={"#24292f"} />
            )}
          </Icon>
          <StarText>{isClicked ? "Unlike" : "Like"}</StarText>
        </Container>

        <Likes>{count} likes</Likes>
      </Content>
      {isClicked ? (
        <span style={{ color: "var(--green)", fontSize: "var(--sm)" }}>
          Thank you!
        </span>
      ) : (
        ""
      )}
    </Holder>
  );
};

export default Star;

const Holder = styled.div`
  display: grid;
  place-items: center;
  font-family: var(--family);
`;

const Container = styled.div`
  margin: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(27, 31, 36, 0.15);
  max-width: 90px;
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  background: #f6f8fa;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
    border-color: rgba(27, 31, 36, 0.15);
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--family);
`;

const Likes = styled.div`
  font-size: var(--sm);
`;

const Icon = styled.div`
  margin-right: 0.6rem;
`;

const StarText = styled.div`
  font-family: var(--family);
  color: #24292f;
`;
