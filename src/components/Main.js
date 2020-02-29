import React from 'react';
import { useLocation, useHistory, Switch, Route, Redirect } from "react-router-dom";
import evergreen from "../asset/images/evergreen.png"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "./ReuseableComponent/Drawer"
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Community from "./Community";
import Services from "./Services";
import Gallary from "./Gallary";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";


const useStyles = makeStyles(theme => ({
    body: {
        overflowX: "hidden",
        width: "auto",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5)
        }
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    avatar: {
        cursor: "pointer"
    },
    title: {
        flexGrow: 1,
        textDecoration: "underline",
        fontStyle: "italic",
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    div: theme.mixins.toolbar
}));

let Main = (props) => {
    let classes = useStyles();
    let location = useLocation()
    let history = useHistory()
    let { setDrawerState } = props;

    let toggleDrawer = () => {
        setDrawerState(true);
    }
    let navigation = (path) => {
        history.push(path)
    }

    if (location.pathname === "/") {
        return <Home {...props} />
    } else {
        return (
            <div className={classes.body}>
                <Drawer {...props} />
                <AppBar position="relative" color="inherit">
                    <Toolbar disableGutters>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
                            <MenuIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="overline" className={classes.title}>
                            {location.pathname.replace("/", "")}
                        </Typography>
                        <Avatar className={classes.avatar} src={evergreen} onClick={navigation.bind(this, "/")} />
                    </Toolbar>
                </AppBar>
                <div className={classes.div}></div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/community">
                        <Community />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/gallary">
                        <Gallary />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/skills">
                        <Skills />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Redirect to="/dd" />
                </Switch>
            </div>
        )
    }

}

export default Main;
