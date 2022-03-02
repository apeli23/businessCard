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
  let props = {};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [brand, setBrand] = useState('');

  const [form, showForm] = useState(false);

  const [selectcard1, setSelectCard1] = useState(false);
  const [selectcard2, setSelectCard2] = useState(false);
  const [uploadstatus, setUploadStatus] = useState("");
  const [othertrial, setOtherTrial] = useState(false);
  const [cardd, takeScreenshot] = useScreenshot();

  const cardRef = createRef(null);

  props = { name, brand, email, phonenumber, location, website };

  function template1Handler() {
    showForm(true);
    setSelectCard1(true);
    
  }

  function template2Handler() {
    showForm(true);
    setSelectCard2(true);
  }
  function submitHandler() {
    showForm(false);
    setUploadStatus("ready");
  }

  function readFile(file) {
    return new Promise(function (resolve, reject) {
      let fr = new FileReader();

      fr.onload = function () {
        resolve(fr.result);
      };

      fr.onerror = function () {
        reject(fr);
      };

      fr.readAsDataURL(file);
    });
  }
  async function cardHandler() {
     
  }

  async function uploadHandler( card){
    console.log(card)
  }

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
