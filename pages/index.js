import { useState, useRef } from 'react';
import Layout from '../components/Layout';
import Card_1 from '../components/Card_1';
import Card_2 from '../components/Card_2';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import { Typography, List, ListItem, Button } from '@material-ui/core';
import { Form, Container, customStyles, Title} from '../styles/tags';
 
export default function Home() {
  let props = {}
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [brand, setBrand] = useState('');
  const [address, setAddress] = useState('')
  
  const [selectcard1, setSelectCard1] = useState(false);
  const [selectcard2, setSelectCard2] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

 props = {name, brand, email, phonenumber, location, website, address}

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
      <Title>Pick a Template</Title><br />
      <Container>
        <div onClick={card1Handler}>
          {selectcard2 ? (
            ''
          ) : (
            <Card_1
              props = {props} 
            />
          )}
        </div>
        <div onClick={card2Handler}>
          {selectcard1 ? (
            ''
          ) : (
            <Card_2
              props={props}
            />
          )}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <Form>
            <List>
              <Typography component="h3" variant="h3">
                Fill Form
              </Typography>
              <ListItem>
                <TextField
                  fullWidth
                  required
                  id="name"
                  label="Full Name"
                  defaultValue=""
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  required
                  id="brandname"
                  label="Company/Business Name"
                  defaultValue=""
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              </ListItem>
              <ListItem>
                <TextField
                  id="phonenumber"
                  label="Phone Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  defaultValue=""
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  required
                  id="address"
                  label="Address"
                  defaultValue=""
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  required
                  id="location"
                  label="Location"
                  defaultValue=""
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  required
                  id="website"
                  label="Website"
                  defaultValue="website"
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                />
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={closeModal}
                >
                  Submit
                </Button>
              </ListItem>
            </List>
          </Form>
        </Modal>
      </Container>
    </Layout>
  );
}
