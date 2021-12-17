import React, { useState, useRef, createRef } from 'react';
import Layout from '../components/Layout';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useStyles from '../utils/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
} from '@material-ui/core';
import Modal from 'react-modal';
import Link from 'next/link';
import Image from 'next/image';
import LOGO from '../public/logo.jpg';

const profileStyles = {
  content: {
    top: '50%',
    left: '25%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#ffff',
  },
};
const cardStyles = {
  content: {
    top: '50%',
    left: '75%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#ffff',
  },
};

export default function Forms({ props }) {
  const classes = useStyles();
  console.log(props);

  const [name, setName] = useState(null);
  const [brand, setBrand] = useState(null);
  const [phonenumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [location, setLocation] = useState(null);
  const [logo, setLogo] = useState(null);
  const [logotitle, setLogoTitle] = useState(null);
  const [website, setWebsite] = useState(null);
  const [link, setLink] = useState(null);
  const profileRef = useRef(null);

  const [profile, showProfile] = useState(false);
  const [card, showCard] = useState(false);

  function profileHandler(user) {
    showProfile(true);
  }

  function closeProfile() {
    showProfile(false);
  }

  function cardHandler(user) {
    showCard(true);
  }

  function closeCard() {
    showCard(false);
  }

  const handleLogoChange = async (e) => {
    const files = e.target.files;
    setLogoTitle(files[0].name);
    if (!files.length) return;
    for (let file of files) {
      await readFile(file).then((encoded_file) => {
        setLogo(encoded_file);
      });
    }
  };
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
  async function handleProfile() {
    takeScreenshot(userCardRef.current).then(handleUpload(profile));
  }

  return (
    <Layout>
      <div className={classes.form}>
        <List id="center">
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
              id="location"
              label="Location"
              defaultValue=""
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </ListItem>
          <ListItem>
            <Button variant="contained" component="label">
              Upload File
              <input type="file" onChange={handleLogoChange} hidden />
            </Button>
            {logotitle ? <Typography>{logotitle}</Typography> : ''}
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={profileHandler}
            >
              Submit
            </Button>
          </ListItem>
        </List>
      </div>
      <>
        <Modal
          isOpen={profile}
          onRequestClose={closeProfile}
          style={profileStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className="status">
            {link ? (
              <Link href={link}>{link}</Link>
            ) : (
              <h3>click UPLOAD to get get your profile card link</h3>
            )}
          </div>
          <>
            <div ref={profileRef} className="item">
              <div className={classes.imgContainer}>
                <Image
                  className="img"
                  src={logo ? logo : LOGO}
                  height={200}
                  width={200}
                  alt="Campaign Banner"
                />
              </div>
              <div className={classes.rightItems}>
                <Typography>
                  <h3>NAME :</h3>
                  {name ? name : ` missing`}
                </Typography>
                <Typography>
                  <h3>Company/Business :</h3> {brand ? brand : ` missing`}
                </Typography>
                <Typography>
                  <h3>EMAIL : </h3>
                  {email ? email : ` missing`}
                </Typography>
                <Typography>
                  <h3>PHONE NUMBER :</h3>{' '}
                  {phonenumber ? phonenumber : ` missing`}
                </Typography>
                <Typography>
                  <h3>Location :</h3> {location ? location : ` missing`}
                </Typography>
              </div>
            </div>
            <br />
            <Button 
              fullWidth 
              variant="contained" 
              color="secondary"
              onClick={cardHandler}
              >
              View Card
            </Button>
          </>
        </Modal>
      </>
      <>
        <Modal
          isOpen={card}
          onRequestClose={closeCard}
          style={cardStyles}
          contentLabel="Card Modal"
          ariaHideApp={false}
        ></Modal>
      </>
    </Layout>
  );
}
