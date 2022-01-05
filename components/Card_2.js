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

export default function Card_2() {
  return (
    <Card>
      <Front>
        <Blue />
        <Yellow />
        <Pink />
        <Dots />
        <Intro>
          <FrontName>Your Name</FrontName>
          <FrontBrand>Company / Brand Name</FrontBrand>
        </Intro>
      </Front>
      <Back>
        <BackYellow />
        <BackTopDots />
        <BackInfo>
          <BackName>Your Name</BackName>
          <BackBrand>Company / Brand name</BackBrand>
          <BackText>
            Adress <br />
            Location <br />
            Phone number <br />
            Website <br />
          </BackText>
        </BackInfo>
      </Back>
    </Card>
  );
}
