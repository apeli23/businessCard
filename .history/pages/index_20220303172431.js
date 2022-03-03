import { forwardRef, useState, createRef, useEffect } from 'react';
import Card_2 from '../components/Card_2';
import { Container, Form, Title, CardTwoButton, FormButton, Left, Right } from '../styles/tags';
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
import Templates from "../components/Templates"


export default function Home() {
  const [canvasOne, setCanvasOne] = useState();
  const [card, takeScreenshot] = useScreenshot();
  var $ = require('jquery');
  let template;
 

  const Card_1 = forwardRef((ref) => (
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
      console.log("canvas.toDataURL()")
    })
  }
  function handleClick(){
    template =  document.getElementById("card1")
    console.log(template)
    html2canvas($(ref.current)[0]).then(canvas => {
     setCanvasOne(canvas.toDataURL())
    }) 
  }
  return (
    <Container>
      <Title>Pick a Template</Title>
      {/* <Left onClick={handleClick}>
        <Card_1 id="card1" ref={ref} onClick={handleClick} />
        <img src={cnv} />
      </Left> */}
      <Left onClick={handleClick}>
         {canvasOne? <Templates canvas={canvasOne} /> :  <Card_1 id="card1" ref={ref} onClick={handleClick} />}
      </Left>
      <Right>
        <Card_1 ref={ref} onClick={cardHandler}></Card_1>
      </Right>
    </Container>
  );
}
