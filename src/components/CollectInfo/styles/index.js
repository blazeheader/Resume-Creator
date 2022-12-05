import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        infoHeading:{
            textAlign: 'center',
            padding: theme.spacing(2)
        },
        textbox: {
            display: 'inline-block',
            margin: theme.spacing(2.5),
        }
    };
})

export default useStyles;