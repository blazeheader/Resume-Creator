import React, { useState } from "react";
import useStyles from './styles';
import Container from '@mui/material/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EduInfo(){
    const classes = useStyles();

    const [eduInfo, setEduInfo] = useState({
        highestQualification: "",
        course: "",
        college: "",
        yop: "",
        gpa: ""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEduInfo({...eduInfo, [name]: value});
    }

    const handleSubmit = () => {
        localStorage.setItem('eduInfo', JSON.stringify(eduInfo));
    }

    const getStoredEduInfo = () => {
        const storedEduInfo = localStorage.getItem(eduInfo);
        return JSON.parse(storedEduInfo);
    }

    return(
        <Container maxWidth="sm">
            <Paper elevation={3} >
            <form className={classes.form} action="" >
                <h2 className={classes.infoHeading}>Education</h2>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="highestQualification" label="Highest Qualification" variant="outlined" 
                value = {eduInfo.highestQualification}
                onChange = {handleInput}/>
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="course" label="Course" variant="outlined" 
                value = {eduInfo.course}
                onChange = {handleInput}/>
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="college" label="College/University" variant="outlined" 
                value = {eduInfo.college}
                onChange = {handleInput}/>
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="yop" label="Year of Passout" variant="outlined" 
                value = {eduInfo.yop}
                onChange = {handleInput}/>
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="gpa" label="GPA/Percentage" variant="outlined" 
                value = {eduInfo.gpa}
                onChange = {handleInput}/>
                </div>
                <Button type="Submit" onClick = {()=>{handleSubmit()}} fullWidth variant="contained">Done</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default EduInfo;