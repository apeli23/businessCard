import React, { useState, useRef, createRef } from 'react';
import Layout from '../components/Layout';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from 'react-modal';
import Link from 'next/link';
import Image from 'next/image';
import LOGO from '../public/logo.jpg';
import styles from '../styles/Forms.module.css';

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

  function profileHandler() {
    showProfile(true);
  }

  function closeProfile() {
    showProfile(false);
  }

  function cardHandler() {
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
    <div className={styles.formContainer}>
      <div className={styles.inputs}>
        <label className={styles.label}>Name</label>
        <input className={styles.input} id="name" placeholder="Full Name" />
        <label className={styles.label}>Company / Business Name</label>
        <input
          className={styles.input}
          id="brandname"
          placeholder="company / breand /name"
        />
        <label className={styles.label}>Phone Number</label>
        <input
          className={styles.input}
          id="phonenumber"
          placeholder="070000000"
        />
        <label className={styles.label}>EMAIL</label>
        <input
          className={styles.input}
          id="email"
          placeholder="example@test.com"
        />
        <label className={styles.label}>Location</label>
        <input
          className={styles.input}
          id="location"
          type="location"
          placeholder="location"
        />
        <label className={styles.label}>Website</label>
        <input
          className={styles.input}
          id="website"
          type="website"
          placeholder="website"
        />
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
}
