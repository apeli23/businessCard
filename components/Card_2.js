import React from 'react';
import {
  Back,
  BackBrand,
  BackInfo,
  BackName,
  BackText,
  BackTopDots,
  BackYellow,
  Blue,
  Card,
  Dots,
  Front,
  FrontBrand,
  FrontName,
  Intro,
  Pink,
  Yellow,
} from '../styles/tags/card_2';

export default function Card_2({ props}) {
  return (
    <Card>
      <Front>
        <Blue />
        <Yellow />
        <Pink />
        <Dots />
        <Intro>
          <FrontName>{props?.name? props.name : "Your Name"}</FrontName>
          <FrontBrand>{props?.brand? props.brand : "Company / Brand Name"}</FrontBrand>
        </Intro>
      </Front>
      <Back>
        <BackYellow />
        <BackTopDots />
        <BackInfo>
          <BackName>{props?.name? props.name : "Your Name"}</BackName>
          <BackBrand>{props?.brand ? props.brand : "Company / Brand Name"}</BackBrand>
          <BackText>  
            {props?.location? props.location : "location"} <br />
            {props?.phonenumber? props.phonenumber : "0700000000"}<br />
            {props?.website? props.website : "website"} <br />
          </BackText>
        </BackInfo>
      </Back>
    </Card>
  );
}
