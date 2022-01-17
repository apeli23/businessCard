import { useRef, useState, useEffect } from 'react';
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
import html2canvas from 'html2canvas';

export default function Card_1({ props }) {
  useEffect(() => {
    createTemplate();
  }, []);
  const cardRef = useRef(undefined);
  const readyGrid = useRef(undefined);
  const frontgridRef = useRef(undefined);
  const [link, setLink] = useState('');
  const [cards, takeScreenshot] = useScreenshot();
  const [templatedesign, setTemplateDesign] = useState(false);

  function createTemplate() {
    html2canvas(cardRef.current).then(function (canvas) {
      const frontGrid = document.getElementById('frontgrid');
      frontGrid.style.display = 'none';

      const front = document.getElementById('front');
      front.appendChild(canvas);
    });
  }

  function cardHandler() {}

  function uploadHandler(card) {}

  return (
    <div ref={cardRef} className={styles.card}>
      <div id="front" className={styles.front}>
        <div id="frontgrid" className={styles.colorGrid}>
          <div className={styles.black}></div>
          <div className={styles.red1}></div>
          <div className={styles.red2}></div>
          <div className={styles.green}></div>
        </div>
        <div className={styles.infoGrid}>
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
      </div>
      <div className={styles.back}>
        
      </div>

    </div>
  );
}
