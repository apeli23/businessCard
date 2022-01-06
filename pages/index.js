import { useState, useRef } from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import Card_1 from '../components/Card_1';
import styled from '@emotion/styled';
import Card_2 from '../components/Card_2';
import Modal from 'react-modal';

const Container = styled.div`
  margin-left: 5%;
  margin-top: 1%;
  display: flex;
  flex-wrap: wrap;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [link, setLink] = useState();

  const [selectcard1, setSelectCard1] = useState(false);
  const [selectcard2, setSelectCard2] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  function card1Handler() {
    setIsOpen(true);
    setSelectCard1(true);
  }

  function card2Handler() {
    setIsOpen(true);
    setSelectCard2(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout>
      <Container>
        <div onClick={card1Handler}>
          {selectcard2 ? '': <Card_1 />}
        </div>
        <div onClick={card2Handler}>
          {selectcard1 ? '' : <Card_2 />}
        </div>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      ></Modal>
    </Layout>
  );
}
