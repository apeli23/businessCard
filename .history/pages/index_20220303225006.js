
import { forwardRef, useState, createRef, useEffect } from 'react';
import { Card, Container, Templates, Text, Title, TitleContainer } from "../styles/emotion";

export default function Home() {
  const refOne = crea
  const Card1 = forwardRef((props, ref) => (
    <Card ref={ref} id="card">
      <Front>
        <ColorGrid>
          <Black />
          <Red1 />
          <Red2 />
          <Green />
        </ColorGrid>
      </Front>
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
           
        </Templates>
      </Container>
    </>
  )
}
