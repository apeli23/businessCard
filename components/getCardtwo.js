import React, { useState, useEffect, createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import QRCode from "react-qr-code";
import { useScreenshot } from 'use-react-screenshot'
import BackgroundImage from "../images/card1.jpg"

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

function Buildcardtwo() {
    let cardurl = []
    let urls = []
    const classes = useStyles();
    const profileref = createRef(null)
    const cardref = createRef(null)


    const [codeLink, setCodeLink] = useState('');
    const [qrCodeText, setQRCodeText] = useState('');
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [business, setBusiness] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [location, setLocation] = useState(null)
    const [website, setWebsite] = useState(null)
    const [logo, setLogo] = useState(null)
    const [link, setLink] = useState()
    const [userprofile, takeScreenshot] = useScreenshot()
    const [usercard, getFinalCard] = useScreenshot()





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
        var x = document.getElementById("showcard2");
        x.style.display = "block";
    }

    function showgeneratedFunction() {
        var x = document.getElementById("generated");
        x.style.display = "flex";
    }

    function showgeneratedCard() {
        var x = document.getElementById("finalcard");
        x.style.display = "flex";
    }
    //get profile
    const getProfile = () => {
        takeScreenshot(profileref.current)
        if (!userprofile) return
        uploadProfile(userprofile)
    }

    function confirmProfile(profile) {
        console.log(profile)

    }

    function uploadProfile(img) {
        // console.log(img)
        try {
            fetch("/api/upload", {
                method: "POST",
                body: JSON.stringify({ data: img }),
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => {
                    console.log("response", name, response.status)
                    response.json().then((data) => {
                        urls.push(data.data);
                        toStringUrl(urls)
                    });
                });
        } catch (error) {
            console.error(error);
        }
    }

    function toStringUrl(link) {
        console.log("setupQr received", link);
        let text = link.toString()
        console.log("link string", text)

        if (!text) {
            console.log("no link text received")
        } else {
            setQRCodeText(text)
        }

    }
    //final card
    const getCard = () => {
        getFinalCard(cardref.current)
        uploadCard(usercard)
    }

    function uploadCard(card) {
        console.log("uploading", card)
        try {
            fetch("/api/upload", {
                method: "POST",
                body: JSON.stringify({ data: card }),
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => {
                    console.log("response", name, response.status)
                    response.json().then((data) => {
                        cardurl.push(data.data);
                        // console.log("cardurl", cardurl)
                        setupCard(cardurl)
                    });
                });
        } catch (error) {
            console.error(error);
        }
    }

    function setupCard(cardurl) {
        console.log("cardurl", cardurl)
        let cardurls = cardurl.toString()
        setLink(cardurls)
    }
    return (
        <div>
            <button onClick={showFunction}>sccscscsc</button>
            <div className="row">
                <div className="column">
                    <h1 id='subtitle'><span>FILL FORMS</span></h1>
                    <Typography variant="h5" gutterBottom><b>Import Logo :</b>
                        <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={handleFileInputChange} />
                    </Typography><br /><br />
                    <TextField label="Name" color="primary" onChange={getName} /><br />
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
                <div id="showcard2" className="column2">
                    <div ref={cardref} className="card-preview">
                        <div className="card2">
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
                        <div className="card2">
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
                        </div>
                    </div><br />
                    <Button color="primary" variant="contained" onClick={showgeneratedFunction}>Preview</Button>
                </div>
            </div>
            <div id="generated" className="row">
                <div className="generatedprofile">
                    <h1 id='subtitle'><span>Generated profile</span></h1>
                    <div ref={profileref} className="profile">
                        <img className="p_pic" width="150" height="150" src={logo} />
                        <Typography variant="h5" gutterBottom  ><b>Name :</b>  {name}</Typography><br />
                        <Typography variant="h5" gutterBottom  ><b>Email:</b> {email}</Typography><br />
                        <Typography variant="h5" gutterBottom  ><b>Business/Company :</b> {business}</Typography><br />
                        <Typography variant="h5" gutterBottom  ><b>Phone Number :</b> {phoneNumber}</Typography><br />
                        <Typography variant="h5" gutterBottom  ><b>Location :</b> {location}</Typography><br />
                        <Typography variant="h5" gutterBottom  ><b>Website :</b> {website}</Typography>
                    </div>
                    <Button variant="contained" color="primary" onClick={getProfile}>ACTIVATE QR to Get final card    </Button>
                </div>
                <div className="generatedcard">
                    <h1 id='subtitle'><span> Scan QR CODE to view profile details</span></h1><br />
                    <img src={usercard} />
                    <a href={link}><h1 id="subtitle"><span>Get_Card</span></h1></a>
                    <Button variant="contained" color="primary" onClick={getCard} >GET CARD IMAGE URL</Button>
                </div>
                <br />
            </div>
        </div>
    )
} export default Buildcardtwo