import { forwardRef, useState, createRef, useEffect } from 'react';
import Layout from '../components/Layout';
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
  const[ cnv, setCnv ] = useState();
  const [ card, takeScreenshot ] = useScreenshot()

  useEffect(() => {
    const canvas = document.createElement("canvas");
     
     
  }, [])

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
    takeScreenshot(ref.current)
    console.log(card)
  }
  return (
    <div >
       <Top>
        <TopLeft>
          <TopImg src="https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png" />
          Next js
          <TopImg src="https://cdn-images-1.medium.com/max/1200/1*gGzRmUKNOC_X7klFjTk8EA.png" /> Emotion css
          <Cloudinary src="https://res.cloudinary.com/cloudinary-marketing/images/dpr_2.0/c_scale,w_300,dpr_3.0/f_auto,q_auto/v1638460217/website_2021/cloudinary_logo_blue_0720/cloudinary_logo_blue_0720.png?_i=AA"/>
        </TopLeft>
        <TopCenter>
            <TopText>
            BUSINESS CARD GENERATOR
            </TopText>
        </TopCenter>
        <TopRight></TopRight>
      </Top>
      <Title>Pick a Template</Title>
      <br />
      <Container ref={ref} >
        <Card_1 />
      </Container>
      <canvas>sdsdsds</canvas>
    </div>
  );
}
