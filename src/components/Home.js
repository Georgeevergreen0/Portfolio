import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import evergreenNative from "../asset/images/evergreen-native.png";
import { NavLink } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "./ReuseableComponent/Drawer"


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
        height: "50vh",
        [theme.breakpoints.up("sm")]: {
            height: "100vh"
        }
    },
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
                    <Typography paragraph >I am a web developer, open source advocate and technical writer based in Anambra, Nigeria and I am very passionate about education, technology & music.</Typography>
                    <Typography paragraph >
                        Need pictures or more about my bio ? {<NavLink to="/about" >Click here</NavLink>}
                    </Typography>
                </div>
                <div className={classes.image}></div>
            </div>
        </>
    );
}

export default Home;
