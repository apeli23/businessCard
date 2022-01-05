import {
  Card,
  Back,
  ColorGrid,
  Red1,
  Red2,
  Green,
  Black,
  InfoGrid,
  Name,
  Brand,
  Adress,
  Text,
  PhoneNumber,
  Email,
  Front,
  NameTag,
  TextLg,
  TextSm,
} from '../styles/tags/card_1';
import { FaLaptop, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Card_1({ props }) {
  return (
    <Card>
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
    </Card>
  );
}
