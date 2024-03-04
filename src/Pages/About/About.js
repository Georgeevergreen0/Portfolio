import React from "react";
import { NavLink } from "react-router-dom"
import ReactPlayer from "react-player"
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

import EvergreenIntro from "asset/images/office/intro.MP4";
import evergreenIntroImage from "asset/images/office/portfoilio_office_back.jpg";
import EvergreenChief from "asset/images/evergreen-cheif.png";
import about from "asset/images/about-about.png";
import blog from "asset/images/about-blog.png";
import community from "asset/images/about-community.png";
import services from "asset/images/about-services.png";
import gallery from "asset/images/about-gallery.png";
import portfolio from "asset/images/about-portfolio.png";
import skills from "asset/images/about-skills.png";
import resume from "asset/images/about-resume.png";
import contact from "asset/images/about-contact.png";

const useStyles = makeStyles(theme => ({
    intro: {
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        marginBottom: "30px"
    },
}));


const About = () => {
    const classes = useStyles()
    return (
        <>
            <Typography paragraph style={{ fontWeight: "bolder" }} variant="h3">SOFTWARE DEVELOPER</Typography>
            <Typography paragraph style={{ fontWeight: "bolder" }} variant="h6">Experienced Software Engineer | Expertise in JavaScript, TypeScript, Node.js, React.js, Gatsby.js, Next.js, Express.js, Electron, MongoDB, SQL, GraphQL, Firebase, AWS, Docker, Git, and more</Typography>

            <div className={classes.intro}>
                <ReactPlayer
                    url={EvergreenIntro}
                    playing={true}
                    width="100%"
                    height="auto"
                    controls={true}
                    loop={true}
                    muted={true}
                    playsinline={true}
                />
            </div>

            <Typography paragraph >My name is Evergreen George. I fondly like to be called Eky. I am based in Nigeria</Typography>
            <Typography paragraph >
                I am a highly skilled, experienced, and dynamic software developer with over 7 years of extensive experience. I am an expert in designing and developing front-end and back-end solutions for startups and enterprises, possessing an exceptional understanding of various web development frameworks and libraries, with an aim to enhance business operations and facilitate growth, meeting both current and future business requirements.
            </Typography>
            <Typography paragraph>
                I am comfortable developing on front-end or back-end. I primarily use Nodejs and I specialize in MERN stack (MongoDB, Express, React and Nodejs)
                but picking up a new framework is not a problem.
            </Typography>
            <Typography paragraph>
                Broad spectrum of expertise also covers web application development, desktop application (Electron), API development and integration, and cloud development, alongside developing and deploying web applications to the cloud, developing and executing result-driven web development policies that optimize user experience, set objectives and overall growth of the organization.
            </Typography>
            <Typography paragraph >
                In tech, I am a huge fan of great mobile experience driven by AI. At a tech event, you'd probably
                find me in a booth with a VR headset on, or trying to play a game (and possibly failing at it).
                I am also passionate about the developer community.
            </Typography>
            <Typography paragraph >
                My non-tech passion includes education & music. I believe everyone should be given a chance at basic education.
            </Typography>
            <Typography paragraph >
                Remote work pro, thriving as a team player with adaptability and collaborative prowess in every project.
            </Typography>
        </>
    )
}

export default About;


{/* <Grid style={{ padding: "24px 0" }} container justify="center">

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
</Grid> */}