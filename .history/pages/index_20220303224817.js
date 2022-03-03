
import { forwardRef, useState, createRef, useEffect } from 'react';
import { Container, Templates, Text, Title, TitleContainer } from "../styles/emotion";

export default function Home() {
  const Card1 = forwardRef((props, ref) =>(
  ))
  return (
    <>
      <TitleContainer>
        <Title>Design Business card with Nextjs and Emotion css</Title>
      </TitleContainer>
      <Container>
        <Text>Select Design </Text>
        <Templates>
          <Card1>
            
          </Card1>
        </Templates>
      </Container>
    </>
  )
}
