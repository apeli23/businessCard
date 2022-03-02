import { forwardRef, useState, createRef } from 'react';
import Layout from '../components/Layout';
import Card_2 from '../components/Card_2';
import { Container, Form, Title, CardTwoButton, FormButton } from '../styles/tags';
import { FormContainer, Input, Inputs, Label } from '../styles/tags/form';
import { useScreenshot } from 'use-react-screenshot'
import { FormLabel } from '@material-ui/core';
import html2canvas from 'html2canvas';
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
import Link from 'next/link'

const Card_1 = forwardRef((props, ref) => (
  <Card ref={ref} onClick={cardHandler}>
    <Front>
      <ColorGrid>
        <Black />
        <Red1 />
        <Red2 />
        <Green />
      </ColorGrid>
    </Front>
    <Back>
      <ColorGrid>
        <Black />
        <Red1 />
        <Red2 />
        <Green />
      </ColorGrid>
    </Back>
  </Card>
));

const ref = createRef();

function cardHandler() {
  console.log(ref.current)
}
export default function Home() {
  
  return (
    <Layout>
      <Title>Pick a Template</Title>
      <br />
      <Container>
        <FancyButton ref={ref} />;
      </Container>
      <canvas>sdsdsds</canvas>
    </Layout>
  );
}
