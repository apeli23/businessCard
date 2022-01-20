import { useState } from 'react';
import Layout from '../components/Layout';
import Card_1 from '../components/Card_1';
import Card_2 from '../components/Card_2';
import { Container, Form, Title } from '../styles/tags';
import { FormContainer, Input, Inputs, Label } from '../styles/tags/form';
import { Button } from '../styles/tags/card_1';

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

  props = { name, brand, email, phonenumber, location, website };

  function template1Handler() {
    showForm(true);
    setSelectCard1(true);
  }

  function template2Handler() {
    showForm(true);
    setSelectCard2(true);
  }

  return (
    <Layout>
      <Title>Pick a Template</Title>
      <br />
      <Container>
        <div onClick={template1Handler}>
          {selectcard2 ? (
            ''
          ) : (
            <>
              <Card_1 props={props} />
            </>
          )}
        </div>
        <div onClick={template2Handler}>
          {selectcard1 ? (
            ''
          ) : (
            <>
              <Card_2 props={props} />
            </>
          )}
        </div>
        {form ? (
          <Form>
            <FormContainer>
              <Inputs>
                <Label>Name</Label>
                <Input
                  id="name"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Label>Company / Business Name</Label>
                <Input
                  id="brandname"
                  placeholder="company / breand /name"
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
                <Label>Phone Number</Label>
                <Input
                  id="phonenumber"
                  placeholder="070000000"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
                <Label>EMAIL</Label>
                <Input
                  id="email"
                  placeholder="example@test.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Label >Location</Label>
                <Input
                  id="location"
                  type="location"
                  placeholder="location"
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
                <Label >Website</Label>
                <Input
                  id="website"
                  type="website"
                  placeholder="website"
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    showForm(false);
                  }}
                >
                  Submit
                </Button>
              </Inputs>
            </FormContainer>
          </Form>
        ) : (
          ''
        )}
      </Container>
    </Layout>
  );
}
