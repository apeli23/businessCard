import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import CARD1 from '../public/card1.jpg';

export default function Card_1({ props }) {
  return (
    <div>
      <button onClick={() => {console.log(props)}}>props</button>
    </div>
  );
}
