
import { forwardRef, useState, createRef, useEffect } from 'react';
import { Black, Blue, Card, Card_1, Card_2, ColorGrid, Container, Dots, Green, Pink, Red1, Red2, Templates, Text, Title, TitleContainer, Yellow } from "../styles/emotion";

export default function Home() {
  const [selectedtemplate, setSelectedTemplate] = useState(false)
  const refOne = createRef();
  const refTwo = createRef();

  const Card1 = forwardRef((props, ref) => (
    <Card_1 ref={refOne} id="card">
      <ColorGrid>
        <Black />
        <Red1 />
        <Red2 />
        <Green />
      </ColorGrid>
    </Card_1>
  ));

  const Card2 = forwardRef((props, ref) => (
    <Card_2>
      <Blue />
      <Yellow />
      <Pink />
      <Dots />
    </Card_2>
  ));

  const templateHandler = () => {
    setSelectedTemplate(true);
  }
  return (
    <>
      <TitleContainer>
        <Title>Design Business card with Nextjs and Emotion css</Title>
      </TitleContainer>
      <Container>
        {selectedtemplate ?
          <User
           :
          <Templates onClick={templateHandler}>
            <Text>Select Design </Text>
            <Card1 ref={refOne} />
            <Card2 ref={refTwo} />
          </Templates>}
      </Container>
    </>
  )
}
