import { useState, useRef } from 'react';
import Layout from '../components/Layout';
import Card_1 from '../components/Card_1';
import Card_2 from '../components/Card_2';
import Forms from '../components/Forms';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import { Typography, List, ListItem } from '@material-ui/core';
import { useScreenshot } from 'use-react-screenshot';

export const customStyles = {
  content: {
    top: '50%',
    left: '75%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Home() {
  let props = {};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [brand, setBrand] = useState('');
  const [address, setAddress] = useState('');
  const [link, setLink] = useState();
  const [template, setTemplate] = useState();
  const [form, setForm] = useState(false);

  const [selectcard1, setSelectCard1] = useState(false);
  const [selectcard2, setSelectCard2] = useState(false);

  const card_1Ref = useRef();
  const card_2Ref = useRef();

  const [cards, takeScreenshot] = useScreenshot();

  const [modalIsOpen, setIsOpen] = useState(false);

  props = { name, brand, email, phonenumber, location, website, address };

  function template1Handler() {
    setIsOpen(true);
    setSelectCard1(true);
    setTemplate(card_1Ref.current);
  }

  function template2Handler() {
    setIsOpen(true);
    setSelectCard2(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // function cardHandler() {
  //   takeScreenshot(template).then(uploadHandler(cards));
  // }

  function uploadHandler(card) {
    try {
      fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: card }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => {
          setLink(data.data);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <h2 className="title">Pick a Template</h2>
      <br />
      <div className="container">
        {link ? <div className="status">Link: {link}</div> : ''}
        <div onClick={template1Handler} ref={card_1Ref}>
          <Card_1 />
        </div>
        <div className="forms"><Forms /></div>
      </div>
    </Layout>
  );
}
