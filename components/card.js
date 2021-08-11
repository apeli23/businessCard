import React, {useState, createRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';  
import QRCode from 'qrcode.react';
import { useScreenshot } from 'use-react-screenshot'


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
    const[logo, setLogo]=useState(null)
    const[link, setLink]=useState()
    
    //screenshot
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)

    
   // generate QR code
  const generateQRCode = () => {
    setQRCodeText(codeLink);
  }
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Abort if there were no files selected
    if (!file.length) return;

    console.log(file)
    const reader = new FileReader();
    // convert the image  to  url and pass it
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setLogo(reader.result);
    };
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
    
    function showFunction() {
        var x = document.getElementById("show");
        x.style.display = "block";
    } 

    uploadImage(image)

    function uploadImage (EncodedImage) {
        let urls =[] 
            // console.log("EncodedImage", EncodedImage)
            
            try {
                fetch("/api/upload", {
                  method: "POST",
                  body: JSON.stringify({ data: EncodedImage }),
                  headers: { "Content-Type": "application/json" },
                })
                .then((response) => {
                //   console.log(name,response.status);
                  response.json().then((data) => {
                    urls.push(data.data); 
                    console.log(data.data)
                  });
                });
              } catch (error) {
                console.error(error);
              }
            createCard(urls)
    }
    function createCard(urls){
        console.log(urls[0])
    }
    return(
        <div>
            <div className="card-container">
                <div className="card">
                    <div className="card-header">
                    <img className="p_pic" width="150" height="150" src={logo} alt ="logo "/>
                            <h1 ><b>Business name</b></h1>
                    </div>
                    
                    <div className="card-content">
                    <QRCode
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
                <Typography variant="h5" gutterBottom><b>Import Logo :</b> 
                    <input type="file" accept="image/x-png,image/gif,image/jpeg"  onChange={handleFileInputChange}/>
                </Typography><br/>

                <TextField  label="Name" onChange={getName} fullWidth /><br/>
                <TextField label="Email" onChange={getEmail}/><br/>
                <TextField id="standard-number" label="Phone_Number"onChange={getPhoneNumber} type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /><br/> 
                <TextField label="Business" onChange={getBusiness}/><br/>
                <TextField label="Location" onChange={getLocation}/><br/>
                <TextField label="Website" onChange={getWebsite}/><br/><br/>
                <Button color="primary" variant="contained"  onClick={( ) => setPrint(true)}>Create Profile</Button><br/><br/>
                <Button   color="primary" variant="contained" onClick={getImage}>Upload Profile</Button>

            </div>
            <div className="float-child2" ref={ref} >
                {
                    print?
                    <>
                    <img className="p_pic" width="150" height="150" src={logo}/>
                    
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
            
            <img width ="600" src={image}/>
            </div>
        </div>
    )
}export default Card;