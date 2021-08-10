import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';  
import QRCode from 'qrcode.react';

const useStyles = makeStyles((theme) => ({
    
    root: {
        margin: theme.spacing(3 ),
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

function Card (){
    const classes = useStyles();

    const [codeLink, setCodeLink] = useState('');
    const [qrCodeText, setQRCodeText] = useState('');
    const[print, setPrint] = useState(false)
    const[name, setName] = useState(null)
    const[email, setEmail]=useState(null)
    const[business, setBusiness]=useState(null)
    const[phoneNumber, setPhoneNumber]=useState(null)
    const[location, setLocation]=useState(null)
    const[website, setWebsite]=useState(null)


   // generate QR code
  const generateQRCode = () => {
    setQRCodeText(codeLink);
  }
  const getName =(e) => {
    setName(e.target.value)
    setPrint(false)
}
const getEmail =(e) => {
   setEmail(e.target.value)
   setPrint(false)
}
const getBusiness =(e) => {
    setBusiness(e.target.value)
    setPrint(false)
}
const getPhoneNumber =(e) => {
    setPhoneNumber(e.target.value)
    setPrint(false)
}
const getLocation =(e) => {
    setLocation(e.target.value)
    setPrint(false)
}
const getWebsite =(e) => {
    setWebsite(e.target.value)
    setPrint(false)
 
}

  
    return(
        <div>
            <div className="card-container">
                <div className="card">
                    <div className="card-header">
                        <img className="p_pic" width="150" height="150" src="https://image.shutterstock.com/image-vector/your-logo-600w-743186359.jpg" alt="profile"/>
                            <h1 ><b>Business name</b></h1>
                    </div>
                    
                    <div className="card-content">
                    <QRCode
                        id="qrCodeEl"
                        size={100}
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
                <TextField id="standard-basic" label="Name" onChange={getName} fullWidth /><br/>
                <TextField id="standard-basic" label="Email" onChange={getEmail}/><br/>
                <TextField id="standard-number" label="Phone_Number"onChange={getPhoneNumber} type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /><br/> 
                <TextField id="standard-basic" label="Business" onChange={getBusiness}/><br/>
                <TextField id="standard-basic" label="Location" onChange={getLocation}/><br/>
                <TextField id="standard-basic" label="Website" onChange={getWebsite}/><br/><br/>
                <Button color="primary" variant="contained"onClick={( ) => setPrint(true)}>Create Profile</Button>
                
            </div>
            <div className="float-child2">
                {
                    print?
                    <>
                    <img className="p_pic" width="150" height="150" src="https://image.shutterstock.com/image-vector/your-logo-600w-743186359.jpg" alt="profile"/>
                    <Typography variant="h5" gutterBottom><b>Name :</b>  {name}</Typography><br/>
                    <Typography variant="h5" gutterBottom><b>Email:</b> {email}</Typography><br/>
                    <Typography variant="h5" gutterBottom><b>Business/Company :</b> {business}</Typography><br/>
                    <Typography variant="h5" gutterBottom><b>Phone Number :</b> {phoneNumber}</Typography><br/>
                    <Typography variant="h5" gutterBottom><b>Location :</b> {location}</Typography><br/>
                    <Typography variant="h5" gutterBottom><b>Website :</b> {website}</Typography>
                    </>
                    :null
                }
            </div>
            </div>
        </div>
    )
}export default Card;