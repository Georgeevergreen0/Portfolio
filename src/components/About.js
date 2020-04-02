import React from "react";
import { NavLink } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import EvergreenChief from "../asset/images/evergreen-cheif.png";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

import about from "../asset/images/about-about.png";
import blog from "../asset/images/about-blog.png";
import community from "../asset/images/about-community.png";
import services from "../asset/images/about-services.png";
import gallery from "../asset/images/about-gallery.png";
import portfolio from "../asset/images/about-portfolio.png";
import skills from "../asset/images/about-skills.png";
import resume from "../asset/images/about-resume.png";
import contact from "../asset/images/about-contact.png";

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
    },
    flexed: {
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 8px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "5px",
        borderRadius: "5px",
        width: "100%",
        margin: "16px 0",
        [theme.breakpoints.up("sm")]: {
            width: "31%",
            margin: "1%"
        },
        [theme.breakpoints.up("md")]: {
            width: "23%",
            margin: "1%"
        },
        "&:hover": {
            flexDirection: "column-reverse",
            border: `1px solid ${theme.palette.primary.main}`
        },
        "&:hover $typography": {
            color: theme.palette.primary.main,
            fontWeight: 600
        },
    },
    typography: {
        padding: theme.spacing(3, 0),
    },
    images: {
        display: "inline-block",
        width: "100%",
        height: "auto"
    }
}));
const About = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container  >
                <Grid item xs={12} sm={4} >
                    <img src={EvergreenChief} className={classes.image} alt="Evergreen" />
                </Grid>

                <Grid container alignItems="center" item xs={12} sm={8} >
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

            <Grid style={{ padding: "24px 0" }} container justify="center">

                <ButtonBase to="/about" component={NavLink} className={classes.flexed}>
                    <img className={classes.images} src={about} alt="about" />
                    <Typography className={classes.typography} variant="h4" align="center"> About</Typography>
                </ButtonBase>

                <ButtonBase to="/blog" component={NavLink} className={classes.flexed}>
                    <img className={classes.images} src={blog} alt="blog" />
                    <Typography className={classes.typography} variant="h4" align="center"> Blog</Typography>
                </ButtonBase>

                <ButtonBase to="/community" component={NavLink} className={classes.flexed}>
                    <img className={classes.images} src={community} alt="community" />
                    <Typography className={classes.typography} variant="h4" align="center"> Community</Typography>
                </ButtonBase>

                <ButtonBase to="/services" component={NavLink} className={classes.flexed}>
                    <img className={classes.images} src={services} alt="services" />
                    <Typography className={classes.typography} variant="h4" align="center" > Services</Typography>
                </ButtonBase>

                <ButtonBase to="/gallery" component={NavLink} className={classes.flexed}>
                    <img className={classes.images} src={gallery} alt="gallery" />
                    <Typography className={classes.typography} variant="h4" align="center" > Gallery</Typography>
                </ButtonBase>

                <ButtonBase to="/portfolio" component={NavLink} className={classes.flexed}>
                    <img className={classes.images} src={portfolio} alt="portfolio" />
                    <Typography className={classes.typography} variant="h4" align="center"  > Portfolio</Typography>
                </ButtonBase>

                <ButtonBase to="/skills" component={NavLink} className={classes.flexed}>
                    <img className={classes.images} src={skills} alt="skills" />
                    <Typography className={classes.typography} variant="h4" align="center" > Skills</Typography>
                </ButtonBase>

                <ButtonBase to="/resume" component={NavLink} className={classes.flexed}>
                    <img className={classes.images} src={resume} alt="resume" />
                    <Typography className={classes.typography} variant="h4" align="center"> Resume</Typography>
                </ButtonBase>

                <ButtonBase to="/contact" component={NavLink} className={classes.flexed}>
                    <img className={classes.images} src={contact} alt="contact" />
                    <Typography className={classes.typography} variant="h4" align="center"> Contact</Typography>
                </ButtonBase>
            </Grid>
        </div>
    )
}

export default About;