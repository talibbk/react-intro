import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@material-ui/core/Fab';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(3),
    flexDirection: 'column',
    minHeight: '50vh',
    color:'#fff',
    backgroundColor:'#222831',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(1),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  fab: {
    margin: theme.spacing(2),
  },
  hovereffect:{
    '&:hover': {
        backgroundColor: "#999",
      },
    borderRadius:'5px',
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm" align='center'> 
        <Typography variant="h2" component="h1" gutterBottom align='center'>
          Social Media
        </Typography>
        <fab className={classes.fab}>
            <Link color="inherit" href="https://www.facebook.com/abdullah.tkb">
                <FontAwesomeIcon icon={['fab', 'facebook']} color='white' size='6x' />
            </Link>
        </fab>  
        
        <fab className={classes.fab}>         
            <Link color="inherit" href="https://www.facebook.com/abdullah.tkb">
                <FontAwesomeIcon icon={['fab', 'instagram']} color='white' size='6x' />           
            </Link>
        </fab>

        <fab className={classes.fab}>    
            <Link color="inherit" href="https://www.facebook.com/abdullah.tkb">
                <FontAwesomeIcon icon={['fab', 'linkedin']} color='white' size='6x' />
            </Link>
        </fab>

        <fab className={classes.fab}>    
            <Link color="inherit" href="https://www.facebook.com/abdullah.tkb">
                <FontAwesomeIcon icon={['fab', 'github']} color='white' size='6x' />
            </Link>
        </fab>

      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}