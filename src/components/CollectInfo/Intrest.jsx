import React, { useState } from "react";
import useStyles from './styles';
import Container from '@mui/material/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Intrest(){
    const classes = useStyles();

    const [intrest, setIntrest] = useState({
        hobbies:"",
        other:""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setIntrest({...intrest, [name]: value});
    }

    const handleSubmit = () => {
        localStorage.setItem('intrest', JSON.stringify(intrest));
    }

    const getStoredIntrest = () => {
        const storedIntrest = localStorage.getItem(intrest);
        return JSON.parse(storedIntrest);
    }

    return(
        <Container maxWidth="sm">
            <Paper elevation={3} >
            <form className={classes.form} action="" >
                <h2 className={classes.infoHeading}>Intrest</h2>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="hobbies" label="Hobbies" variant="outlined" 
                value={intrest.hobbies}
                onChange={handleInput}
                />
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="other"label="Other" variant="outlined" 
                value={intrest.other}
                onChange={handleInput}/>
                </div>
                <Button type="Submit" onClick = {()=>{handleSubmit()}} fullWidth variant="contained">Done</Button>
            </form>
            </Paper>
        </Container>
    )
}

export default Intrest;