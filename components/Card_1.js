import { useRef, useState } from 'react';
import styles from '../styles/Card_1.module.css';
import { FaLaptop, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useScreenshot } from 'use-react-screenshot';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';


export default function Card_1({ props }) {
  const cardRef = useRef(undefined);
  const [link, setLink] = useState('');
  const [cards, takeScreenshot] = useScreenshot();


  function cardHandler() {
    takeScreenshot(cardRef.current).then(uploadHandler(cards));
  }

  function uploadHandler(card) {
    console.log(card)
    // try {
    //   fetch('/api/upload', {
    //     method: 'POST',
    //     body: JSON.stringify({ data: card }),
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setLink(data.data);
    //     });
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <>
      <Card className={styles.card} >
        <div className={styles.front} ref={cardRef}>
          <div className={styles.colorGrid} >
            <div className={styles.black}></div>
            <div className={styles.red1}></div>
            <div className={styles.red2}></div>
            <div className={styles.green}></div>
          </div>
          <div className={styles.infoGrid} >
            <h2 className={styles.name}>
              {props?.name ? props.name : 'Your Name'}
            </h2>
            <p className={styles.brand}>
              {props?.brand ? props.brand : 'Company / Brand Name'}
            </p>
            <div className={styles.address}>
              <FaMapMarkerAlt id="icon" />
              <p className={styles.text}>
                {props?.location ? props.location : 'Location'}
              </p>
            </div>
            <div className={styles.phonenumber}>
              <FaPhone />
              <p>{props?.phonenumber ? props.phonenumber : '0700000000'}</p>
            </div>
            <div className={styles.mailname}>
              <FaLaptop />
              <p className={styles.text}>
                {props?.email ? props.email : 'email@example.com'}
              </p>
              <p className={styles.text}>
                {props?.website ? props.website : 'website'}
              </p>
            </div>
          </div>
          {/* <div className={styles.InfoGrid}>
          <h2 className={styles.name}>
            {props?.name ? props.name : 'Your Name'}
          </h2>
          <p className={styles.brand}>
            {props?.brand ? props.brand : 'Company / Brand Name'}
          </p>
          <div className={styles.adress}>
            <FaMapMarkerAlt id="icon" />
            <p className={styles.text}>
              {props?.location ? props.location : 'Location'}
            </p>
          </div>
          <div className={styles.phonenumber}>
            <FaPhone />
            <p className={styles.text}>
              {props?.phonenumber ? props.phonenumber : '0700000000'}
            </p>
          </div>
          <div className={styles.email}>
            <FaLaptop />
            <p className={styles.text}>
              {props?.email ? props.email : 'user@example.com'}
            </p>
            <p className={styles.text}>
              {props?.website ? props.website : 'website'}
            </p>
          </div>
        </div> */}
        </div>
        {/* <div className={styles.back}>
        <div className={styles.colorGrid}>
          <div className={styles.black} />
          <div className={styles.red1} />
          <div className={styles.red2} />
          <div className={styles.green} />
        </div>
        <div div={styles.nameTag}>
          <p className={styles.textLg}>
            {props?.name ? props.name : 'Your Name'}
          </p>
          <p className={styles.textSm}>
            {props?.brand ? props.brand : 'Company / Brand name'}
          </p>
        </div>
      </div> */}
      </Card>
      {props ? (
        <button className="button" fullWidth onClick={cardHandler}>
          Submit
        </button>
      ) : (
        ''
      )}
    </>
  );
}
