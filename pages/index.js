import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import CARD1 from '../public/card1.jpg';
import CARD2 from '../public/card2.jpg';
import CARD3 from '../public/card3.jpg';
import useStyles from '../utils/styles';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';


export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <p id="center">Select Card Template</p>
      <div id="centerContent">
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Card>
              <Link href="/forms" passHref>
                <CardActionArea>
                  <Image 
                    alt="card1" 
                    src={CARD1} 
                    width={400} 
                    height={300} 
                    title = "CARD 1"
                    path = '/card3'
                    />
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card>
              <Link href="#" passHref>
                <CardActionArea>
                  <Image 
                    alt="card1" 
                    src={CARD2} 
                    width={400} 
                    height={300} 
                    title = "CARD 2"
                    path = '/card3'
                    />
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card>
              <Link href="#" passHref>
                <CardActionArea>
                  <Image 
                    alt="card1" 
                    src={CARD3} 
                    width={400} 
                    height={300} 
                    title = "CARD 3"
                    path = '/card3'
                    />
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
