import { forwardRef, useState, createRef } from 'react';
import Layout from '../components/Layout';
import Card_1 from '../components/Card_1';
import Card_2 from '../components/Card_2';
import { Container, Form, Title, CardOneButton, CardTwoButton, FormButton } from '../styles/tags';
import { FormContainer, Input, Inputs, Label } from '../styles/tags/form';
import { useScreenshot } from 'use-react-screenshot'
import { FormLabel } from '@material-ui/core';
import html2canvas from 'html2canvas';
// import { Card } from '../styles/tags/card_1';
import Link from 'next/link'

const FancyButton = forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton" onClick={cargHandler}>
    {props.children}
  </button>
));

const ref = createRef();
export default function Home() {

  return (
    <Layout>
      <Title>Pick a Template</Title>
      <br />
      <Container>
        <FancyButton ref={ref} >Click me!</FancyButton>;
      </Container>
      <canvas>sdsdsds</canvas>
    </Layout>
  );
}
