import { forwardRef, useState, createRef, useEffect } from 'react';
import Card_2 from '../components/Card_2';
import { Container, Form, Title, CardTwoButton, FormButton } from '../styles/tags';
import { FormContainer, Input, Inputs, Label } from '../styles/tags/form';
import { useScreenshot } from 'use-react-screenshot'
import { FormLabel } from '@material-ui/core';
import html2canvas from 'html2canvas';
import Topbar from '../components/Topbar';

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


export default function Home() {
  const [cnv, setCnv] = useState();
  const [card, takeScreenshot] = useScreenshot()

  useEffect(() => {
    const canvas = document.createElement("canvas");

  }, [])

  const Card_1 = forwardRef((props, ref) => (
    <Card ref={ref} >
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
    const screenS(ref.current)
    console.log(card)
  }
  return (
    < >
      {/* <Topbar />
      <Container ref={ref} onClick={cardHandler} >
        <Title>Pick a Template</Title>
        <Card_1 />
      </Container> */}
      <div ref={ref}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"/></div>
      <button  onClick={cardHandler}>click</button>
    </>
  );
}
