import { useState, useRef, useEffect } from 'react';
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
  CardOneButton,
  Status,
} from '../styles/tags/card_1';
import { FaLaptop, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Card_1({ props, uploadstatus }) {
  useEffect(() => {
    console.log(document.getElementById("card"))
    console.log("upload statusu",uploadstatus)
  },[])
  return (
    <>
      <Card id="card" >
        <Front>
          <ColorGrid>
            <Black />
            <Red1 />
            <Red2 />
            <Green />
          </ColorGrid>
          <InfoGrid>
            <Name>{props?.name ? props.name : 'Your Name'}</Name>
            <Brand>{props?.brand ? props.brand : 'Company / Brand Name'}</Brand>
            <Adress>
              <FaMapMarkerAlt id="icon" />
              <Text>{props?.location ? props.location : 'Location'}</Text>
            </Adress>
            <PhoneNumber>
              <FaPhone />
              <Text>
                {props?.phonenumber ? props.phonenumber : '0700000000'}
              </Text>
            </PhoneNumber>
            <Email>
              <FaLaptop />
              <Text>{props?.email ? props.email : 'user@example.com'}</Text>
              <Text>{props?.website ? props.website : 'website'}</Text>
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
            <TextLg>{props?.name ? props.name : 'Your Name'}</TextLg>
            <TextSm>
              {props?.brand ? props.brand : 'Company / Brand name'}
            </TextSm>
          </NameTag>
        </Back>
      </Card>
       
      </>
  );
}
