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
      <Grid item md={4}>
        <Card>
          <CardActionArea>
            <Image
              alt="card1"
              src={CARD1}
              width={400}
              height={300}
              title="CARD 1"
              path="/card3"
            />
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
}
