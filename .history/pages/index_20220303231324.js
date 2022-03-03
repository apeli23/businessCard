
import { forwardRef, useState, createRef, useEffect } from 'react';
import { Card, Container, Templates, Text, Title, TitleContainer } from "../styles/emotion";

export default function Home() {
  const refOne = createRef();
  const Card1 = forwardRef((props, ref) => (
    <Card ref={ref} id="card">
      <
    </Card>
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
