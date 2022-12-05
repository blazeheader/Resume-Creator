import React, { useEffect, useState } from "react";
import useStyles from './styles';
import Container from '@mui/material/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function BasicInfo(){
    const classes = useStyles();

    const [basicInfo, setBasicInfo] = useState({
        name: "",
        contact: "",
        email: "",
        dob: "",
        city: "",
        state: ""
    })
    
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBasicInfo({...basicInfo, [name]: value});
    }

    const handleSubmit = () => {
        localStorage.setItem('basicInformation', JSON.stringify(basicInfo));
    }

    const getStoredBasicInfo = () => {
        const storedBasicInfo = localStorage.getItem('basicInformation');
        return JSON.parse(storedBasicInfo);
    }

    return(
        <Container maxWidth="sm">
            <Paper elevation={3} >
                <form className={classes.form} action="" > 
                <h2 className={classes.infoHeading}>Basic Information</h2>
                <div className={classes.textbox}><TextField required id="outlined-basic" name="name" label="Name" variant="outlined"
                    value = {basicInfo.name}
                    onChange={handleInput} />
                 </div>
                <div className={classes.textbox}><TextField required id="outlined-basic" name="contact" label="Contact No." variant="outlined"
                    value = {basicInfo.contact}
                    onChange={handleInput} />
                </div>
                <div className={classes.textbox}><TextField required id="outlined-basic" name="email" label="Email" variant="outlined"
                    value = {basicInfo.email}
                    onChange={handleInput} />
                </div>
                <div className={classes.textbox}><TextField required id="outlined-basic" name="dob" label="Date of Birth" variant="outlined" 
                    value = {basicInfo.dob}
                    onChange={handleInput} />
                </div>
                <div className={classes.textbox}><TextField required id="outlined-basic" name="city" label="City" variant="outlined"
                    value = {basicInfo.city}
                    onChange={handleInput} />
                </div>
                <div className={classes.textbox}><TextField required id="outlined-basic" name="state" label="State" variant="outlined"
                    value = {basicInfo.state}
                    onChange={handleInput} />
                </div>
                <Button type="Submit" onClick = {()=>{handleSubmit()}} fullWidth variant="contained">Done</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default BasicInfo;