import React, { useState } from "react";
import useStyles from './styles';
import Container from '@mui/material/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function WorkExp(){
    const classes = useStyles();

    const [workExp, setWorkExp] = useState({
        currentOrg:"",
        totalExp:"",
        skills:"",
        projects:""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setWorkExp({...workExp, [name]: value});
    }

    const handleSubmit = () => {
        localStorage.setItem('workExp', JSON.stringify(workExp));
    }

    const getStoredWorkExp = () => {
        const storedWorkExp = localStorage.getItem(workExp);
        return JSON.parse(storedWorkExp);
    }

    return(
        <Container maxWidth="sm">
            <Paper elevation={3} >
            <form className={classes.form} action="" >
                <h2 className={classes.infoHeading}>Work Experience</h2>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="currentOrg" label="Current Organinzation" variant="outlined" 
                value={workExp.currentOrg}
                onChange={handleInput}
                />
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="totalExp" label="Total Experience" variant="outlined"
                value={workExp.totalExp}
                onChange={handleInput} />
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="skills" label="Skills" variant="outlined" 
                value={workExp.skills}
                onChange={handleInput}/>
                </div>
                <div className={classes.textbox}><TextField  id="outlined-basic" name="projects" label="Projects" variant="outlined" 
                value={workExp.projects}
                onChange={handleInput}/>
                </div>
                <Button type="Submit" onClick = {()=>{handleSubmit()}} fullWidth variant="contained">Done</Button>
            </form>
            </Paper>
        </Container>
    )
}

export default WorkExp;