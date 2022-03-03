
import { forwardRef, useState, createRef, useEffect } from 'react';
import UserDetails from '../components/UserDetails';
import { Black, Button, Details, FormContainer, Input, Inputs, Label, Blue, Card, Card_1, Card_2, ColorGrid, Container, Dots, Green, Pink, Red1, Red2, Templates, Text, Title, TitleContainer, Yellow } from "../styles/emotion";

export default function Home() {
  const [selectedtemplate, setSelectedTemplate] = useState(false)
  const [ submittedform, setSubmittedForm ] = useState(false);

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
        <Details>
          {submittedform ? "submitted": 
            <FormContainer>
              <Inputs>
                <Label>Name</Label>
                <Input
                  id="name"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Label>Company / Business Name</Label>
                <Input
                  id="brandname"
                  placeholder="company / breand /name"
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
                <Label>Phone Number</Label>
                <Input
                  id="phonenumber"
                  placeholder="070000000"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
                <Label>Email</Label>
                <Input
                  id="email"
                  placeholder="example@test.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Label >Location</Label>
                <Input
                  id="location"
                  type="location"
                  placeholder="location"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
                <Label >Website</Label>
                <Input
                  id="website"
                  type="website"
                  placeholder="website"
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    setSubmittedForm(true);
                  }}
                >
                  Submit
                </Button>
              </Inputs>
            </FormContainer>
            }
          </Details>
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
