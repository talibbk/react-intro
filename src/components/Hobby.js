import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Hobby(){


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: '#222831',
        color: '#fff',
    },
    blackBack:{
        backgroundColor:'#212121',
        padding: theme.spacing(3),
        color: '#fff',
    },
    card: {
        maxWidth:'100%',
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        backgroundColor: '#424242',
        color: '#fff',
        textAlign: 'center',
      },
  }));

  const classes = useStyles();

    return (
        <Container maxWidth="md">
        <main className={classes.content}>
        <Paper className={classes.paper}> 
            <Paper className={classes.blackBack}>
                <Typography variant="h4">
                My Hobby List:
                </Typography>
                </Paper>
            <div className={classes.root}>
            <Grid container spacing={3}>                       
                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="solace"
                            height="250"
                            image="/img/gym.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Gym
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Getting stronger everyday!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="dont mention my face"
                            height="250"
                            image="/img/bike.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bike
                                </Typography>
                                <Typography variant="body2" component="p">
                                    I love riding bike through country roads!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="geek"
                            height="250"
                            image="/img/anime.jpg"
                            title="geek"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Anime
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Exploring your hidden geek.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
        </Paper>
        </main>
        </Container>
    )
}

export default Hobby;