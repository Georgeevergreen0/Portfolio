import React from "react";
import EvergreenChief from "../asset/images/evergreen-cheif.png";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
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
                        <Typography paragraph >My name is Evergreen George Ekene. I fondly like to be called Eky.</Typography>
                        <Typography paragraph >
                            I am a web developer, open source advocate and technical writer based in Anambra, Nigeria and I am very passionate about education, technology & music.
                            Am an enthusiastic individual with excellent relationship building and communication skills, I love to design and create things.
                            I'm passionate about VR experiences and developing JAMstack + PWA applications with focus on accessibility.
                            I loves mobile experiences and Artificial Intelligence.
                    </Typography>
                        <Typography paragraph>
                            I am comfortable developing on front-end or back-end. I primarily use Nodejs and I specialize in MERN stack (MongoDB, Express, React and Nodejs) but picking up a new framework is not a problem.
                    </Typography>
                        <Typography paragraph >
                            In tech, I am a huge fan of great mobile experiences driven by AI. At a tech event, you'd probably find me in a booth with a VR headset on, or trying to play a game (and possibly failing at it).
                    </Typography>
                        <Typography paragraph >
                            My non-tech passion includes education & music. I believe everyone should be given a chance at basic education.
                    </Typography>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;