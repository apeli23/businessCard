import React, { useState, useEffect, createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import QRCode from "react-qr-code";
import { useScreenshot } from 'use-react-screenshot'

const useStyles = makeStyles((theme) => ({

  root: {
    margin: theme.spacing(3),
    width: '50ch',

  },

  tyography: {
    width: '100%',
    maxWidth: 500,
    textcolor: "white",
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

}));


function Test() {
  let urls = []
  let qrlink = ""
  let encodedImg;
  const classes = useStyles();
  const ref = createRef(null)


  const [codeLink, setCodeLink] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');
  const [print, setPrint] = useState(false)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [business, setBusiness] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [location, setLocation] = useState(null)
  const [website, setWebsite] = useState(null)
  const [logo, setLogo] = useState(null)
  const [link, setLink] = useState()
  const [image, takeScreenshot] = useScreenshot()





  const handleFileInputChange = async (e) => {
    const files = e.target.files;
    if (!files.length) return;
    console.log(files)

    // Store promises in array
    for (let file of files) {
      await readFile(file).then((encoded_file) => {
        setLogo(encoded_file);
      });
    }
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

  const getName = (e) => {
    setName(e.target.value)
  }
  const getEmail = (e) => {
    setEmail(e.target.value)
  }
  const getBusiness = (e) => {
    setBusiness(e.target.value)
  }
  const getPhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  const getLocation = (e) => {
    setLocation(e.target.value)
  }
  const getWebsite = (e) => {
    setWebsite(e.target.value)

  }

  function showFunction() {
    var x = document.getElementById("show");
    x.style.display = "block";
  }
  //screenshot
  const getImage = () => {
    takeScreenshot(ref.current)
      .then(uploadImage(image))
  }

  // uploadImage(image)
  function uploadImage(img) {
    // console.log(img)
    try {
      fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: image }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(name, response.status);
          response.json()
            .then((data) => {
              urls.push(data.data);
            })
            .then(setupQr(urls));
        })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="column">
          <h1 id='subtitle'><span>FILL FORMS</span></h1>
          <Typography variant="h5" gutterBottom><b>Import Logo :</b>
            <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={handleFileInputChange} />
          </Typography><br /><br />
          <TextField label="Name" color="primary" onChange={getName} fullWidth />
          <TextField label="email" onChange={getEmail} /><br />
          <TextField id="phone_number" label="Phone_Number" onChange={getPhoneNumber} type="number"
            InputLabelProps={{
              shrink: true,
            }}
          /><br />
          <TextField label="Business" onChange={getBusiness} /><br />
          <TextField label="Location" onChange={getLocation} /><br />
          <TextField label="Website" onChange={getWebsite} /><br /><br />
          <Button color="primary" variant="contained" onClick={showFunction}>Create Profile</Button><br /><br />

        </div>
        <div id="show" className="column2">
          <div className="card-preview">
            <div className="card">
              <div className="back-header">
                <img className="p_pic" width="150" height="150" src={logo} alt="logo " />
                <h1 id='subtitle'><span> Company name</span></h1>
              </div><br />
              <div className="card-content">
                <QRCode
                  size={120}
                  value={qrCodeText}
                />
                <div className="details">
                  <h3 id='span'><span> {name}</span></h3>
                  <h3 id='span'><span> {phoneNumber}</span></h3>
                  <h3 id='span'><span> {email}</span></h3>
                  <h3 id='span'><span> {location}</span></h3>
                </div>
              </div>
            </div>
            <br />

            <div className="card">
              <div className="back-content">
                <h1 id='subtitle'><span> Company name</span></h1>
                <img className="b_pic" width="150" height="150" src={logo} alt="logo " />
              </div>

              <div className="card-content">

                <div className="backfooter">
                  <h3 id='span'><span> {phoneNumber}</span></h3>
                  <h3 id='span'><span> {location}</span></h3>
                </div>
              </div>
            </div></div><br />
          
          <Button color="primary" variant="contained" onClick={getImage}>Create Card</Button>

        </div>

      </div>
      <div className="row">
        <div className="profile">
          <div className="generatedcard">
            <h1 id='subtitle'><span> GENERATED CARD</span></h1>
            <div className="card-preview">
            <div className="card">
              <div className="back-header">
                <img className="p_pic" width="150" height="150" src={logo} alt="logo " />
                <h1 id='subtitle'><span> Company name</span></h1>
              </div><br />
              <div className="card-content">
                <QRCode
                  size={120}
                  value={qrCodeText}
                />
                <div className="details">
                  <h3 id='span'><span> {name}</span></h3>
                  <h3 id='span'><span> {phoneNumber}</span></h3>
                  <h3 id='span'><span> {email}</span></h3>
                  <h3 id='span'><span> {location}</span></h3>
                </div>
              </div>
            </div>
            <br />

            <div className="card">
              <div className="back-content">
                <h1 id='subtitle'><span> Company name</span></h1>
                <img className="b_pic" width="150" height="150" src={logo} alt="logo " />
              </div>

              <div className="card-content">

                <div className="backfooter">
                  <h3 id='span'><span> {phoneNumber}</span></h3>
                  <h3 id='span'><span> {location}</span></h3>
                </div>
              </div>
            </div></div><br />
          
          </div>
        </div>
        
        <div className="finalstage">
        <h1 id='subtitle'><span> Scan QR CODE to view profile details</span></h1><br/>
          <Button variant = "contained" color = "primary" >DOWNLOAD CARD</Button>
        </div>
        <br />
      </div>
    </div>

  )
} export default Test