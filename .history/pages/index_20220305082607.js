
import { forwardRef, useState, createRef, useEffect, useRef } from 'react';
import UserDetails from '../components/UserDetails';
import { Black, Button, Details, FormContainer, Input, Inputs, Label, Blue, Card, Card_1, Card_2, ColorGrid, Container, Dots, Green, Pink, Red1, Red2, Templates, Text, Title, TitleContainer, Yellow, FinalCardContainer, Front, InfoGrid, NameTag, Back, Name, Brand, CardText, Address, PhoneNumber, Email, TextLg, TextSm, UploadButto, Backn, UploadButton } from "../styles/emotion";
import { FaLaptop, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useScreenshot } from 'use-react-screenshot';
import html2canvas from 'html2canvas';

export default function Home() {
  const [selectedtemplate, setSelectedTemplate] = useState(false)
  const [submittedform, setSubmittedForm] = useState(false);
  const [finalcard, setFinalCard] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [brand, setBrand] = useState('');
  const [link, setLink] = useState('');
  const [userprofile, takeScreenshot] = useScreenshot();

  const refOne = createRef();
  const finalcardRef = useRef();

  const $ = require('jquery')

  let backgroundURL = ""

  function templateHandler() {
    setSelectedTemplate(true);
  }

  const Card1 = forwardRef((props, ref) => (
    <Card_1 ref={refOne} id="card" onClick={templateHandler} >
      <ColorGrid>
        <Black />
        <Red1 />
        <Red2 />
        <Green />
      </ColorGrid>
    </Card_1>
  ));

    const FinalCard = forwardRef((props, ref) => (
      <Card ref={finalcardRef}>
      <Front id="front">
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
      </Front>

      <Back id="back">
        <NameTag>
          <TextLg>{name ? name : 'Your Name'}</TextLg>
          <TextSm>
            {brand ? brand : 'Company / Brand name'}
          </TextSm>
        </NameTag>
      </Back>
    </Card>
    ));


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
              
            }
            <FinalCardContainer>
               <FinalCard ref={finalcardRef}/>
              <UploadButton >Upload</UploadButton>
            </FinalCardContainer>

          </Details>
          :
          <Templates >
            <Text>Select Design </Text>
            <Card1 ref={refOne} />
          </Templates>}

      </Container>
    </>
  )
}
