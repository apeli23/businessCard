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

function Card (){
     
    const classes = useStyles();

    const [name, setName] = useState('')
    
    const setData = () => {
        setName(name)
    }
    
    const handleSubmit = (e) => {
        var inputValue = document.getElementById("myTextInputID").value;
        // setName( inputValue)   
         
    }
    return(
        
        <div className="float-container">
            <div className="float-child">
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField id="standard-basic" label="Name" value="" /><br/>
                    <TextField id="standard-basic" label="Email" /><br/>
                    <TextField id="standard-number" label="Phone_Number" type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /><br/> 
                    <TextField id="standard-basic" label="Business" /><br/>
                    <TextField id="standard-basic" label="Location" /><br/>
                    <TextField id="standard-basic" label="Website" /><br/><br/>      
                    
                    <Button type="submit" color="primary" variant="contained">Submit</Button>
                </form>
                
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Add_Title" /><br/>
                </form>
            </div>
            <div className="float-child">
            <Typography variant="h3" gutterBottom>Name :{name}</Typography>
            <Typography variant="h3" gutterBottom>Email :</Typography>
            <Typography variant="h3" gutterBottom>Business :</Typography>
            <Typography variant="h3" gutterBottom>Phone number :</Typography>
            <Typography variant="h3" gutterBottom>Location :</Typography>
            <Typography variant="h3" gutterBottom>Website :</Typography>

            </div>
        </div> 
    )
}export default Card;