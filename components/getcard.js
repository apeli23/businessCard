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
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

}));

function GetCard() {
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
             console.log(name,response.status);
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
    
    function setupQr(urls) {
        // console.log("backendlinks",urls[0]);
        
        // console.log("qrlinks",urls[0]);
        for (var i = 0; i < urls.length; i++) {
            qrlink=urls[i]
        }
        console.log("qrlinks",qrlink)
        generateQRCode(qrlink)
    }
    const generateQRCode = (link) => {
        console.log("qrgenerate",link)
            setQRCodeText(link);
    }
     
    return (
        <div>
            <div className="float-container">
                <div className="float-child">
                    <div className="card-header">
                        <img className="p_pic" width="150" height="150" src={logo} alt="logo " />
                        <h1 ><b>Business name</b></h1>
                    </div>
                    <div className="card-content">
                        <QRCode
                            size={150}
                            value={qrCodeText}
                        />
                        <div className="details">
                            <h3>{name}</h3>
                            <h3>{phoneNumber}</h3>
                            <h3>{email}</h3>
                            <h3>{location}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="float-container">
                <div className="float-child">
                    <Typography variant="h5" gutterBottom><b>Import Logo :</b>
                        <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={handleFileInputChange} />
                    </Typography><br />
                    <TextField label="Name" onChange={getName} fullWidth /><br />
                    <TextField label="Email" onChange={getEmail} /><br />
                    <TextField id="standard-number" label="Phone_Number" onChange={getPhoneNumber} type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /><br />
                    <TextField label="Business" onChange={getBusiness} /><br />
                    <TextField label="Location" onChange={getLocation} /><br />
                    <TextField label="Website" onChange={getWebsite} /><br /><br />
                    <Button color="primary" variant="contained" onClick={showFunction}>Create Profile</Button><br /><br />
                    <Button color="primary" variant="contained" onClick={getImage}>Upload Profile</Button>
                </div>

                <div ref={ref} className="float-child2"
                // ref={ref}
                   id="show" 
                >

                        <img className="p_pic" width="150" height="150" src={logo} />

                    <Typography variant="h5" gutterBottom><b>Name :</b>  {name}</Typography><br />
                    <Typography variant="h5" gutterBottom><b>Email:</b> {email}</Typography><br />
                    <Typography variant="h5" gutterBottom><b>Business/Company :</b> {business}</Typography><br />
                    <Typography variant="h5" gutterBottom><b>Phone Number :</b> {phoneNumber}</Typography><br />
                    <Typography variant="h5" gutterBottom><b>Location :</b> {location}</Typography><br />
                    <Typography variant="h5" gutterBottom><b>Website :</b> {website}</Typography>

                </div>
            </div>
            <img src={image}/>

        </div>
    )
} export default GetCard