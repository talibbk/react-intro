import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme=>({

    footer:{
        textAlign:"center",
        display: 'flex',
        minHeight: '30vh',
        flexDirection: "column",
        flexGrow:1,
        background: '#000',
        color:'#fff',
    },

    whitener:{
        color:'#fff',
    },

}));

function Footer() {
    const classes = useStyles();

    return(
        <Typography>
            <Grid className={classes.footer}>
                Hello from Footer
            </Grid>
        </Typography>
    )
}

export default Footer;