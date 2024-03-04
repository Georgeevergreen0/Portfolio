import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useTypewriter from "react-typewriter-hook"
import evergreenOffice from "asset/images/office/portfolio_office_front.jpg";
import { NavLink } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import Linkedin from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import Instagram from '@material-ui/icons/Instagram';


const useStyles = makeStyles(theme => ({
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        marginBottom: "30px"
    },
    text: {
        textTransform: "none",
    },
}));


const sentence = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React.js",
    "Gatsby.js",
    "Next.js",
    "Express.js",
    "Electron",
    "MongoDB",
    "SQL",
    "GraphQL",
    "Firebase",
    "AWS",
    "Docker",
    "Git"
]

let index = 0;


const Home = () => {
    const classes = useStyles();
    const intervalRef = useRef({});

    const [words, setWords] = useState("JavaScript");

    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                index = index > 15 ? 0 : ++index;
                setWords(sentence[index]);
            }, 3000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [words]
    );

    const typing = useTypewriter(words);


    return (
        <>
            <Typography paragraph style={{ fontWeight: "bolder" }} variant="h3">SOFTWARE DEVELOPER</Typography>
            <Typography paragraph style={{ fontWeight: "bolder" }} variant="h4">{typing}_</Typography>

            <img alt="Evergreen George Home Office" src={evergreenOffice} className={classes.image} />

            <Typography paragraph>Hi, my name is Evergreen George but you can call me Eky.</Typography>
            <Typography paragraph>
                I am a highly skilled, experienced, and dynamic software developer with over 7 years of extensive experience. I am an expert in designing and developing front-end and back-end solutions for startups and enterprises, possessing an exceptional understanding of various web development frameworks and libraries, with an aim to enhance business operations and facilitate growth, meeting both current and future business requirements.
            </Typography>
            <Typography paragraph>
                Remote work pro, thriving as a team player with adaptability and collaborative prowess in every project.
            </Typography>
            <Typography paragraph>
                More about me ? <Button component={NavLink} className={classes.text} to="/about" size="small" ><ArrowForward /></Button>
            </Typography>

            <div>
                <IconButton href="https://github.com/georgeevergreen0" rel="noopener" target="_blank" >
                    <GitHub />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/georgeevergreen" rel="noopener" target="_blank" >
                    <Linkedin />
                </IconButton>
                <IconButton href="https://twitter.com/georgeevergreen" rel="noopener" target="_blank" >
                    <Twitter />
                </IconButton>
                <IconButton href="https://instagram.com/georgeevergreen" rel="noopener" target="_blank" >
                    <Instagram />
                </IconButton>
            </div>
        </>
    );
}

export default Home;
