import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const useStyles =makeStyles(theme =>({

    toolbar:theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
        },
    paper:{
        padding: theme.spacing(1),
        backgroundColor: '#222831',
        color: '#fff',
        },
  
  }));

  function AboutMe() {

    const classes = useStyles();

    return(
            <Container maxWidth="md">
                <main className={classes.content}>
                <div className={classes.toolbar}/>    

                <Paper className={classes.paper} >
                    <Typography variant="h3" align='center'>
                        About Me
                    </Typography>
                    <Typography paragraph variant="h6" align='Left'>
                        Hello there! <br/>
                        My name is Talib Khurshid.
                        I'm currently working as an Intern at Ebisu tech and am always interested in learning new things! <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.

                    </Typography>
                </Paper>
                </main>
            </Container>
    )
  }

  export default AboutMe;