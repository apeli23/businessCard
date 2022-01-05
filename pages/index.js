import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import {
  Container,
  Back,
  ColorGrid,
  Red1,
  Red2,
  Green,
  Black,
  InfoGrid,
  Name,
  Brand,
  Card1,
  Adress,
  Icon,
  Text,
  PhoneNumber,
  Email,
  Front,
  NameTag,
  TextLg,
  TextSm
} from '../tags/card_1';
import { FaLaptop, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <p id="center">Select Card Template</p>
      <Container>
        <Card1>
          <Front>
            <ColorGrid>
              <Black />
              <Red1 />
              <Red2 />
              <Green />
            </ColorGrid>
            <InfoGrid>
              <Name>Name</Name>
              <Brand>Brand / company name</Brand>
              <Adress>
                <FaMapMarkerAlt id="icon" />
                <Text>Location</Text>
              </Adress>
              <PhoneNumber>
                <FaPhone />
                <Text>0700000000</Text>
              </PhoneNumber>
              <Email>
                <FaLaptop />
                <Text>user@example.com</Text>
                <Text>www.yourwebsite.com</Text>
              </Email>
            </InfoGrid>
          </Front>
          <Back>
            <ColorGrid>
              <Black />
              <Red1 />
              <Red2 />
              <Green />
            </ColorGrid>
            <NameTag>
              <TextLg>Your Name</TextLg>
              <TextSm>Company / Brand name</TextSm>
            </NameTag>
          </Back>
        </Card1>
        
      </Container>
    </Layout>
  );
}
