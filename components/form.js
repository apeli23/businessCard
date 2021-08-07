import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';  
 
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

function Forms (){
     
    const classes = useStyles();

    const [data, setData] = useState(null)
    const[print, setPrint] = useState(false)
    const[name, setName] = useState(null)
    const[email, setEmail]=useState(null)
    const[business, setBusiness]=useState(null)
    const[phoneNumber, setPhoneNumber]=useState(null)
    const[location, setLocation]=useState(null)
    const[website, setWebsite]=useState(null)

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
        
        <div className="float-container">
            
            <div className="float-child">
            
                <TextField id="standard-basic" label="Name" onChange={getName} /><br/>
                <TextField id="standard-basic" label="Email" onChange={getEmail}/><br/>
                <TextField id="standard-number" label="Phone_Number"onChange={getPhoneNumber} type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /><br/> 
                <TextField id="standard-basic" label="Business" onChange={getBusiness}/><br/>
                <TextField id="standard-basic" label="Location" onChange={getLocation}/><br/>
                <TextField id="standard-basic" label="Website" onChange={getWebsite}/><br/><br/>
                <Button color="primary" onClick={( ) => setPrint(true)}>Set</Button>
                
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Add_Title" /><br/>
                </form>
            </div>
            <div className="float-child">
            {
                print?
                <>
                <Typography variant="h5" gutterBottom>Name :  {name}</Typography>
                <Typography variant="h5" gutterBottom>Email : {email}</Typography>
                <Typography variant="h5" gutterBottom>Business : {business}</Typography>
                <Typography variant="h5" gutterBottom>Phone number : {phoneNumber}</Typography>
                <Typography variant="h5" gutterBottom>Location : {location}</Typography>
                <Typography variant="h5" gutterBottom>Website : {website}</Typography>
                </>
                :null
            }
            </div>
        </div> 
    )
}export default Forms;