
import { forwardRef, useState, createRef, useEffect } from 'react';
import { Black, Card, Card_1, Card_2, ColorGrid, Container, Green, Red1, Red2, Templates, Text, Title, TitleContainer } from "../styles/emotion";

export default function Home() {
  const [selectedtemplate, setSelectedTemplate] = useState(false)
  const refOne = createRef();
  const refTwo = createRef();

  const Card_1 = forwardRef((props, ref) => (
    <Card1 ref={ref} id="card">
      <Front>
        <ColorGrid>
          <Black />
          <Red1 />
          <Red2 />
          <Green />
        </ColorGrid>
      </Front>
    </Card1>
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
          "selected": 
          <Templates onClick={templateHandler}>
          <Text>Select Design </Text>
          <Card1 ref={refOne} />
          {/* <Card2 ref={refTwo} /> */}
        </Templates>}
      </Container>
    </>
  )
}
