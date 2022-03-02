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
  Image,
} from '../styles/tags/card_1';
import Link from 'next/link'


export default function Home() {
  const [cnv, setCnv] = useState();
  const [card, takeScreenshot] = useScreenshot();
  var $ = require('jquery');

  useEffect(() => {
    const canvas = document.createElement("canvas");
    html2canvas($(ref.current)[0]).then(canvas => {
     setCnv(canvas.toDataURL());
    })
    const card = document.getElementById("card")
  }, [])

  const Card_1 = forwardRef((props, ref) => (
    <Card ref={ref} id="card">
      <Front>
        <ColorGrid>
          <Black />
          <Red1 />
          <Red2 />
          <Green />
        </ColorGrid>
      </Front>
      
    </Card>
  ));

  const ref = createRef();
  function cardHandler() {
    html2canvas($(ref.current)[0]).then(canvas => {
      setCnv(canvas.toDataURL())
     })
  }
  return (
    <Container>
      <Title></Title>
    </Container>
  );
}
