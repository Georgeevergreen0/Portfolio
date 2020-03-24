import React from "react";
import EvergreenChief from "../asset/images/evergreen-cheif.png";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    image: {
        display: "block",
        width: "100%",
    },
    container: {
        padding: theme.spacing(0),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(0, 0, 0, 4),
        }
    }
}));
const About = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container  >
                <Grid item xs={12} sm={5} >
                    <img src={EvergreenChief} className={classes.image} alt="Evergreen" />
                </Grid>

                <Grid item xs={12} sm={7} >
                    <div className={classes.container}>
                        <Typography paragraph style={{ fontWeight: "bolder" }} variant="h2">Hi, I'm George</Typography>
                        <Typography paragraph >My name is Evergreen George Ekene. I fondly like to be called Eky.</Typography>
                        <Typography paragraph >
                            I am a software developer, open source advocate and technical writer based in Anambra, Nigeria.
                            I am very passionate about education, technology & music. I have excellent relationship-building and communication skills,
                            I love to design and create things.
                            I am passionate about Artificial Intelligence, VR experience and developing JAMstack application,  PWA applications and SPA application
                            with focus on accessibility.
                    </Typography>
                        <Typography paragraph>
                            I am comfortable developing on front-end or back-end. I primarily use Nodejs and I specialize in MERN stack (MongoDB, Express, React and Nodejs)
                            but picking up a new framework is not a problem.
                    </Typography>
                        <Typography paragraph >
                            In tech, I am a huge fan of great mobile experience driven by AI. At a tech event, you'd probably
                            find me in a booth with a VR headset on, or trying to play a game (and possibly failing at it).
                            I am also passionate about the developer community.
                    </Typography>
                        <Typography paragraph >
                            My non-tech passion includes education & music. I believe everyone should be given a chance at basic education.
                    </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;