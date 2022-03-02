import { useState, createRef } from 'react';
import Layout from '../components/Layout';
import Card_1 from '../components/Card_1';
import Card_2 from '../components/Card_2';
import { Container, Form, Title, CardOneButton, CardTwoButton, FormButton } from '../styles/tags';
import { FormContainer, Input, Inputs, Label } from '../styles/tags/form';
import { useScreenshot } from 'use-react-screenshot'
import { FormLabel } from '@material-ui/core';
import html2canvas from 'html2canvas';


export default function Home() {
  let props = {}, finalcard;
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
  async function uploadHandler() {
    setOtherTrial(true);
    finalcard = document.getElementById("card");
    // console.log(finalcard)
    html2canvas(finalcard).then(function(canvas) {
      document.body.appendChild(canvas);
    })
    // if (!card) return;
    // console.log(card);
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
              <div><Card_1 id="card" props={props} uploadstatus={uploadstatus}/></div>

              {uploadstatus &&
                <CardOneButton
                  onClick={uploadHandler}
                >
                  Upload Card
                </CardOneButton>}
            </>
          )}
        </div>
        <div onClick={template2Handler}>
          {selectcard1 ? (
            ''
          ) : (
            <>
              <Card_2 props={props} uploadstatus={uploadstatus} />
            </>

          )}

        </div>
        {form ? (
          <Form>
            <FormContainer>
              {othertrial && <FormLabel>Retry...</FormLabel>}
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
                  placeholder="company  brand /name"
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
                <FormButton
                  onClick={submitHandler}
                >
                  Submit
                </FormButton>
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
