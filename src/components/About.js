import React from "react";
import EvergreenChief from "../asset/images/evergreen-cheif.png";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles"
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    image: {
        backgroundImage: `url(${EvergreenChief})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "70vh",
        [theme.breakpoints.up("sm")]: {
            height: "60vh",
        },
        [theme.breakpoints.up("md")]: {
            height: "100vh",
        },
    }
}));
const About = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container  >
                <Grid item xs={12} sm={5} className={classes.image} ></Grid>
                <Grid item xs={12} sm={7} >
                    <Container>
                        <Typography paragraph style={{ fontWeight: "bolder" }} variant="h2">Hi, I'm George</Typography>
                        <Typography paragraph >My name is Evergreen George Ekene. I fondly like to be called Eky. I am a Software Engineer based in Lagos, Nigeria who loves mobile experiences and Artificial Intelligence.</Typography>
                        <Typography paragraph >I am a Software Engineer based in Lagos, Nigeria and I am very passionate about education, technology & music.</Typography>
                        <Typography paragraph >
                            I currently work as a Software Engineer at the Microsoft Mixed Reality
                             team where I build cloud services and high value experiences related to Artificial Intelligence & Mixed Reality.
                              I have a Bachelor of Science (First class) in Computer Science from the University of Lagos, Nigeria.
                    </Typography>
                        <Typography paragraph>
                            In October 2018, I created a blog called AdoraHack, where I post software development articles or any tech thing I find interesting. In June 2019, I took AdoraHack to YouTube. On the YouTube channel, I post tech content that could be useful to software developers.
                    </Typography>
                        <Typography paragraph >
                            My non-tech passion includes education & music. I believe everyone should be given a chance at basic education.
                    </Typography>
                        <Typography paragraph >
                            In tech, I am a huge fan of great mobile experiences driven by AI. At a tech event, you'd probably find me in a booth with a VR headset on, or trying to play a game (and possibly failing at it).
                    </Typography>
                        <Typography paragraph >
                            I am also passionate about the developer community and I am trying to drive inclusion for more women in tech. Because of this, I co-organize some developer events (e.g. GDG Ajah, FSD Lagos, Android Nigeria, Unstack), I speak at some events as well & I mentor developers through ALC or any other platform that lets me do so.
                    </Typography>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;