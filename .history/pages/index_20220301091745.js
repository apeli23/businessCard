import { useState, createRef } from 'react';
import Layout from '../components/Layout';
import Card_1 from '../components/Card_1';
import Card_2 from '../components/Card_2';
import { Container, Form, Title, CardOneButton, CardTwoButton, FormButton } from '../styles/tags';
import { FormContainer, Input, Inputs, Label } from '../styles/tags/form';
import { useScreenshot } from 'use-react-screenshot'
import { FormLabel } from '@material-ui/core';
import html2canvas from 'html2canvas';
import { Card } from '../styles/tags/card_1';


export default function Home() {

  fun

  return (
    <Layout>
      <Title>Pick a Template</Title>
      <br />
      <Container>
       < Card_1 onClick={cardHandler} />
      </Container>
      <canvas>sdsdsds</canvas>
    </Layout>
  );
}