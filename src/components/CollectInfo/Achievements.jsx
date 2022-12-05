import React, { useState } from "react";
import useStyles from './styles';
import Container from '@mui/material/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Achievements(){
    const classes = useStyles();

    const [achievements, setAchievements] = useState({
        certifications:"",
        awards:"",
        other:"",
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAchievements({...achievements,[name]: value});
    }

    const handleSubmit = () => {
        localStorage.setItem('achievements', JSON.stringify(achievements));
    }

    const getStoredAchievements = () => {
        const storedAchievements = localStorage.getItem('achievements');
        return JSON.parse(storedAchievements);
    }

    return(
        <Container maxWidth="sm">
            <Paper elevation={3} >
            <form className={classes.form} action="" >
                <h2 className={classes.infoHeading}>Achievements</h2>
                <div className={classes.textbox}><TextField  id="outlined-basic" name = "certifications" label="Certifications" variant="outlined" 
                    value = {achievements.certifications}
                    onChange={handleInput}/>
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name = "awards" label="Awards" variant="outlined" 
                    value = {achievements.awards}
                    onChange={handleInput}/>
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name = "other" label="Other" variant="outlined" 
                    value = {achievements.other}
                    onChange={handleInput}/>
                </div>
                <Button type="Submit" onClick = {()=>{handleSubmit()}} fullWidth variant="contained">Done</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Achievements;