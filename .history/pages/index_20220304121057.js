
import { forwardRef, useState, createRef, useEffect, useRef } from 'react';
import UserDetails from '../components/UserDetails';
import { Black, Button, Details, FormContainer, Input, Inputs, Label, Blue, Card, Card_1, Card_2, ColorGrid, Container, Dots, Green, Pink, Red1, Red2, Templates, Text, Title, TitleContainer, Yellow, FinalCardContainer, CardFront, InfoGrid, NameTag, CardBack, Name, Brand, CardText, Address, PhoneNumber, Email, TextLg, TextSm, UploadButton } from "../styles/emotion";
import { FaLaptop, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Home() {
  const [selectedtemplate, setSelectedTemplate] = useState(false)
  const [submittedform, setSubmittedForm] = useState(false);
  const [background, setBackground] = useState("")
  const [finalcard, setFinalCard] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [brand, setBrand] = useState('');

  const refOne = createRef();
  const refTwo = createRef();
  const finalcardRef = useRef();

  const bg1 = "https://res.cloudinary.com/dogjmmett/image/upload/v1646384349/template1_eugneu.png";
  let bg2 = "https://res.cloudinary.com/dogjmmett/image/upload/v1646345504/template2_llfh3k.png";

  const Card1 = forwardRef((props, ref) => (
    <Card_1 ref={refOne} id="card"  >
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

  const detailsHandler = () => {
    setSubmittedForm(true);
    document.getElementById("front").style.backgroundImage = `url(${bg1})`;
    document.getElementById("back").style.backgroundImage = `url(${bg1})`;
  }

  const uploadHandler = () => {
    console.log(finalcardRef.current)
  }
  return (
    <>
      <TitleContainer>
        <Title>Design Business card with Nextjs and Emotion css</Title>
      </TitleContainer>
      <Container>
        {selectedtemplate ?
          <Details>
            {submittedform ?
              "" :
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
                    onClick={detailsHandler}
                  >
                    Submit
                  </Button>
                </Inputs>
              </FormContainer>
            }
            <FinalCardContainer >
              <div ref={finalcardRef}>
                <CardFront id="front">
                  <InfoGrid>
                    <Name>{name ? name : 'Your Name'}</Name>
                    <Brand>{brand ? brand : 'Company / Brand Name'}</Brand>
                    <Address>
                      <FaMapMarkerAlt id="icon" />
                      <CardText>{location ? location : 'Location'}</CardText>
                    </Address>
                    <PhoneNumber>
                      <FaPhone />
                      <CardText>
                        {phonenumber ? phonenumber : '0700000000'}
                      </CardText>
                    </PhoneNumber>
                    <Email>
                      <FaLaptop />
                      <CardText>{email ? email : 'user@example.com'}</CardText>
                      <CardText>{website ? website : 'website'}</CardText>
                    </Email>
                  </InfoGrid>
                </CardFront>

                <CardBack id="back">
                  <NameTag>
                    <TextLg>{name ? name : 'Your Name'}</TextLg>
                    <TextSm>
                      {brand ? brand : 'Company / Brand name'}
                    </TextSm>
                  </NameTag>
                </CardBack>
              </div>
              <UploadButton>Upload</UploadButton>
            </FinalCardContainer>
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
