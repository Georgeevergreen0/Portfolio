import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import evergreenNative from "../asset/images/evergreen-native.png";
import { NavLink } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "./ReuseableComponent/Drawer";
import Button from '@material-ui/core/Button';
import Linkedin from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import Instagram from '@material-ui/icons/Instagram';


const useStyles = makeStyles(theme => ({
    root: {
        display: "grid",
        "overflow-x": "hidden",
        minHeight: "100vh",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateAreas: " 'a a' 'c c' 'b b'  ",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "1fr 1fr",
            gridTemplateAreas: " 'a c' 'b c'  ",
            padding: theme.spacing(0),

        }
    },
    menu: {
        gridArea: "a",
        padding: theme.spacing(0, 0, 2, 0),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5)
        }
    },
    body: {
        gridArea: "b",
        padding: theme.spacing(2, 0, 0, 0),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5)
        }
    },
    image: {
        gridArea: "c",
        backgroundImage: `url(${evergreenNative})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "70vh",
        [theme.breakpoints.up("sm")]: {
            height: "100vh"
        }
    },
    text: {
        textTransform: "none",
    }
}));

const Home = (props) => {
    const classes = useStyles();

    let { drawerState, setDrawerState } = props

    let toggleDrawer = () => {
        setDrawerState(true);
    }

    return (
        <>
            <Drawer drawerState={drawerState} setDrawerState={setDrawerState} />
            <div className={classes.root}>
                <div className={classes.menu}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </div>
                <div className={classes.body}>
                    <Typography paragraph style={{ fontWeight: "bolder" }} variant="h2">Hi, I'm George</Typography>
                    <Typography paragraph >Hi, my name is Evergreen George Ekene but you can call me Eky. </Typography>
                    <Typography paragraph >I am a software developer, open source advocate and technical writer based in Anambra,
                    Nigeria. I am very passionate about education, technology & music.</Typography>
                    <Typography paragraph >
                        More about me ? <Button component={NavLink} className={classes.text} to="/about" size="small" >Click Here</Button>
                    </Typography>
                    <div>
                        <Button size="small" to="/contact" color="primary" component={NavLink} className={classes.text} variant="contained" >
                            Contact
                        </Button>
                        <IconButton href="https://github.com/georgeevergreen0" rel="noopener" target="_blank" >
                            <GitHub color="primary" />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/georgeevergreen" rel="noopener" target="_blank" >
                            <Linkedin color="primary" />
                        </IconButton>
                        <IconButton href="https://twitter.com/georgeevergreen" rel="noopener" target="_blank" >
                            <Twitter color="primary" />
                        </IconButton>
                        <IconButton href="https://instagram.com/georgeevergreen" rel="noopener" target="_blank" >
                            <Instagram color="primary" />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.image}></div>
            </div>
        </>
    );
}

export default Home;
