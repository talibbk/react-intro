import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import WorkIcon from '@material-ui/icons/Work';



const useStyles =makeStyles(theme =>({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },

      nested: {
        paddingLeft: theme.spacing(4),
      },

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

    whitener:{
        color:'#fff',
    },
  
  }));

  function AboutMe() {

    const classes = useStyles();
    const [Aopen, setAOpen] = React.useState(false);
    const [Bopen, setBOpen] = React.useState(false);

    const handleClickA= () => setAOpen(!Aopen);


    const handleClickB= () => setBOpen(!Bopen);

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
                        Below you can find mention few things about me:
                    </Typography>

                    {/* ---------------- Fav Food List --------------- */}

                    <List className="root">
                        <ListItem button onClick={handleClickA}>
                            <ListItemIcon>
                            <FastfoodIcon className={classes.whitener} />
                            </ListItemIcon>
                            <ListItemText primary="My Favourite Food" />
                            {Aopen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={Aopen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                <StarRoundedIcon className={classes.whitener} />
                                </ListItemIcon>
                                <ListItemText primary="Ramen" />

                                
                            </ListItem>

                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                <StarRoundedIcon className={classes.whitener} />
                                </ListItemIcon>
                                <ListItemText primary="Biryani" />

                                
                            </ListItem>

                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                <StarRoundedIcon className={classes.whitener} />
                                </ListItemIcon>
                                <ListItemText primary="Sushi" />

                                
                            </ListItem>
                            </List>
                        </Collapse>
                    </List>

  {/* ---------------- Work Experience List --------------- */}

                    <List className="root">
                    <ListItem button onClick={handleClickB}>
                        <ListItemIcon>
                        <WorkIcon className={classes.whitener} />
                        </ListItemIcon>
                        <ListItemText primary="Work Experience" />
                        {Bopen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={Bopen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                            <StarRoundedIcon className={classes.whitener} />
                            </ListItemIcon>
                            <ListItemText primary="English Teacher" />

                            
                        </ListItem>

                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                            <StarRoundedIcon className={classes.whitener} />
                            </ListItemIcon>
                            <ListItemText primary="Front End Developer" />

                            
                        </ListItem>

                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                            <StarRoundedIcon className={classes.whitener} />
                            </ListItemIcon>
                            <ListItemText primary="Ramen Shop Server/Host" />

                            
                        </ListItem>
                        </List>
                    </Collapse>
                    </List>
                </Paper>
                </main>
            </Container>
    )
  }

  export default AboutMe;