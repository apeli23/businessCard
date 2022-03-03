
import { forwardRef, useState, createRef, useEffect } from 'react';
import { Black, Card, Card_1, Card_2, ColorGrid, Container, Green, Red1, Red2, Templates, Text, Title, TitleContainer } from "../styles/emotion";

export default function Home() {
  const refOne = createRef();

  const Card1 = forwardRef((props, ref) => (
    <Card_1 ref={ref} id="card">
      <ColorGrid>
        <Black />
        <Red1 />
        <Red2 />
        <Green />
      </ColorGrid>
    </Card_1>
  ));

  const Card2 = forwardRef((props, ref) => (
    Card_2
  ));

  return (
    <>
      <TitleContainer>
        <Title>Design Business card with Nextjs and Emotion css</Title>
      </TitleContainer>
      <Container>
        <Text>Select Design </Text>
        <Templates>
          <Card1 ref={refOne} />
        </Templates>
      </Container>
    </>
  )
}
