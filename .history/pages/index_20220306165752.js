
import { forwardRef, useState, createRef, useEffect, useRef } from 'react';
import UserDetails from '../components/UserDetails';
import { Black, Button, Details, FormContainer, Contain, Input, Inputs, Label, Blue, Card, Card_1, Card_2, ColorGrid, Container, Dots, Green, Pink, Red1, Red2, Templates, Text, Title, TitleContainer, Yellow, FinalCardContainer, Front, InfoGrid, NameTag, Back, Name, Brand, CardText, Address, PhoneNumber, Email, TextLg, TextSm, UploadButto, Backn, UploadButton, Grid } from "../styles/emotion";
import { FaLaptop, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useScreenshot } from 'use-react-screenshot';
import html2canvas from 'html2canvas';

export default function Home() {
  const [selectedtemplate, setSelectedTemplate] = useState(false)
  const [ selectedcard, setSelectedCard] = useState("")
  const [submittedform, setSubmittedForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [brand, setBrand] = useState('');
  const [link, setLink] = useState('');
  const [finalcard, takeScreenshot] = useScreenshot();
  const frontRef = useRef();
  const backRef = useRef();
  const testRef = useRef();

  const refOne = createRef();
  const finalcardRef = useRef();
  const testCanvas = useRef();

  const $ = require('jquery')

  let background = "";
  let cnv;



  const Card1 = forwardRef((props, ref) => (
    <Card_1 ref={refOne} id="card" onClick={card1Handler} >
      <ColorGrid>
        <Black />
        <Red1 />
        <Red2 />
        <Green />
      </ColorGrid>
    </Card_1>
  ));

  const card1Handler = async () => {
    setSelectedTemplate(true);
    html2canvas(refOne.current).then((canvas) => {
      try {
        fetch('/api/upload', {
          method: 'POST',
          body: JSON.stringify({ data: canvas.toDataURL() }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .then((data) => {
            background = data.data
            document.getElementById("front").style.backgroundImage = `url(${background})`
            document.getElementById("back").style.backgroundImage = `url(${background})`
          })
      } catch (error) {
        console.error(error);
      }
    })
  }

  const card2Handler = async () => {
    setSelectedTemplate("card2");
  }

  return (
    <>
      <TitleContainer>
        <Title>Design Business card with Nextjs and Emotion css</Title>
      </TitleContainer>
      <Container>
        {selectedtemplate == true ?
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
                  // onClick={detailsHandler}
                  >
                    Submit
                  </Button>
                </Inputs>
              </FormContainer>
            }

            
          </Details>
          :
          <Templates >
            <Text>Select Design </Text>
            <Card1 ref={refOne} />
            {/* <Card2 ref={refTwo} /> */}
          </Templates>}

      </Container>
    </>
  )
}
