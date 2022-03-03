import { Container, Templates, Text, Title, TitleContainer } from "../styles/emotion";

export default function Home() {
  return (
    <>
      <TitleContainer>
        <Title>Design Business card with Nextjs and Emotion css</Title>
      </TitleContainer>
      <Container>
        <Text>Select Design </Text>
        <Templates></Templates>
      </Container>
    </>
  )
}
