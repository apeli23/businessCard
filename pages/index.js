import React from 'react'
import Head from 'next/head'
import Button from '@material-ui/core/Button';
import QRCode from "react-qr-code";
import BuildCard from '../components/getcard'
import Buildcardtwo from '../components/getCardtwo'

export default function Home() {

  function selectcardOne() {
    var x = document.getElementById("selectcards");
    x.style.display = "none";
    var y = document.getElementById("cardone");
    y.style.display = "block";
  }
  function selectcardTwo() {
    var x = document.getElementById("selectcards");
    x.style.display = "none";
    var y = document.getElementById("cardtwo");
    y.style.display = "block";
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 id='title'><span> BUSINESS CARD GENERATOR</span></h1>
      <div id="selectcards">
        <div className="row">
          <div className="column">
            <div className="card" >
              <div className="back-header">
                <img className="p_pic"
                  width="150"
                  height="150"
                  src="https://thumbs.dreamstime.com/z/your-logo-7271668.jpg"
                  alt="logo "
                />
                <h1 id='subtitle' > < span > Company name </span></h1>
              </div><br />
              <div className="card-content">
                <QRCode size={120}
                  value="{qrCodeText}"
                />
                <div className="details">
                  <h3 id='span' > < span > Name </span></h3 >
                  <h3 id='span' > < span > Phone number </span></h3>
                  <h3 id='span' > < span > Email </span></h3 >
                  <h3 id='span' > < span > Location </span></h3 >
                </div>
              </div>
              <Button variant="contained" color="primary" onClick={selectcardOne}>SELECT CARD</Button>
            </div>

          </div>
          <br/>
          <div className="column">
            <div className="card2" >
              <div className="back-header">
                <img className="p_pic"
                  width="150"
                  height="150"
                  src="https://thumbs.dreamstime.com/z/your-logo-7271668.jpg"
                  alt="logo "
                />
                <h1 id='subtitle' > < span > Company name </span></h1>
              </div><br />
              <div className="card-content">
                <QRCode size={120}
                  value="{qrCodeText}"
                />
                <div className="details">
                  <h3 id='span' > < span > Name </span></h3 >
                  <h3 id='span' > < span > Phone number </span></h3>
                  <h3 id='span' > < span > Email </span></h3 >
                  <h3 id='span' > < span > Location </span></h3 >
                </div>
              </div>
              <Button variant="contained" color="primary" onClick={selectcardTwo}>SELECT CARD</Button>
            </div>


          </div>
        </div>
      </div>
      <div id="cardone">
        <BuildCard />
      </div>
      <div id="cardtwo">
        <Buildcardtwo/>
      </div>


    </div>
  )
}
