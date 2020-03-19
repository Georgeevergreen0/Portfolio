import React from 'react';
import HackerImage from "../../asset/images/hacker.png"
import { useHistory, NavLink, useLocation } from "react-router-dom";
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import Home from '@material-ui/icons/Home';
import Linkedin from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import Instagram from '@material-ui/icons/Instagram';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Edit from '@material-ui/icons/Edit';
import Group from '@material-ui/icons/Group';
import Store from '@material-ui/icons/Store';
import Image from '@material-ui/icons/Image';
import Style from '@material-ui/icons/Style';
import Work from '@material-ui/icons/Work';
import Attachment from '@material-ui/icons/Attachment';
import Email from '@material-ui/icons/Email';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            paper: "#000"
        }
    },
});

const Font = createMuiTheme({
    typography: {
        fontFamily: "Niconne, cursive",
    },
});


const useStyles = makeStyles((theme) => ({
    fullList: {
        width: '80vw',
        maxWidth: "300px",
        padding: theme.spacing(2, 3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(3, 4)
        }
    },
    center: {
        display: "flex",
        justifyContent: "space-between",
        overflowX: "hidden"
    },
    image: {
        width: "100%",
    },
    relative: {
        position: "relative",
        minHeight: "100px",
    },
    absolute: {
        width: "100%",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
    }
}));

const Drawers = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    let { drawerState, setDrawerState } = props;

    let toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState(false);
    }

    let navigation = (path) => {
        history.push(path)
    }
    return (
        <ThemeProvider theme={darkTheme} >
            <Drawer open={drawerState} onClose={toggleDrawer}>
                <div className={classes.fullList}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}>
                    <List component="nav" aria-label="Navigation">

                        <div className={classes.center}>
                            <IconButton >
                                <Close fontSize="large" />
                            </IconButton>
                            <IconButton onClick={navigation.bind(this, "/")} >
                                <Home fontSize="large" />
                            </IconButton>
                        </div>

                        <div className={classes.relative}>
                            <img className={classes.image} src={HackerImage} alt="White Hacker" />
                            <div className={classes.absolute}>
                                <ThemeProvider theme={Font}>
                                    <Typography align="center" variant="h5">Evergreen George</Typography>
                                    <Typography align="center" variant="subtitle2">Senior Web Developer</Typography>
                                </ThemeProvider>
                            </div>
                        </div>

                        <Divider />
                        <div className={classes.center}>
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

                        <Divider />
                        <br />
                        <ListItem to="/about" button component={NavLink} selected={location.pathname === "/about"}>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                            <ListItemSecondaryAction>
                                {location.pathname === "/about" ? <ArrowBack fontSize="small" /> : null}
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem to="/blog" button component={NavLink} selected={location.pathname === "/blog"}>
                            <ListItemIcon>
                                <Edit />
                            </ListItemIcon>
                            <ListItemText primary="Blog" />
                            <ListItemSecondaryAction>
                                {location.pathname === "/blog" ? <ArrowBack fontSize="small" /> : null}
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem to="/community" button component={NavLink} selected={location.pathname === "/community"}>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Community" />
                            <ListItemSecondaryAction>
                                {location.pathname === "/community" ? <ArrowBack fontSize="small" /> : null}
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem to="/services" button component={NavLink} selected={location.pathname === "/services"}>
                            <ListItemIcon>
                                <Store />
                            </ListItemIcon>
                            <ListItemText primary="Services" />
                            <ListItemSecondaryAction>
                                {location.pathname === "/services" ? <ArrowBack fontSize="small" /> : null}
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem to="/gallery" button component={NavLink} selected={location.pathname === "/gallery"}>
                            <ListItemIcon>
                                <Image />
                            </ListItemIcon>
                            <ListItemText primary="Gallery" />
                            <ListItemSecondaryAction>
                                {location.pathname === "/gallery" ? <ArrowBack fontSize="small" /> : null}
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem to="/portfolio" button component={NavLink} selected={location.pathname === "/portfolio"}>
                            <ListItemIcon>
                                <Style />
                            </ListItemIcon>
                            <ListItemText primary="Portfolio" />
                            <ListItemSecondaryAction>
                                {location.pathname === "/portfolio" ? <ArrowBack fontSize="small" /> : null}
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem to="/skills" button component={NavLink} selected={location.pathname === "/skills"}>
                            <ListItemIcon>
                                <Work />
                            </ListItemIcon>
                            <ListItemText primary="Skills" />
                            <ListItemSecondaryAction>
                                {location.pathname === "/skills" ? <ArrowBack fontSize="small" /> : null}
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem to="/resume" button component={NavLink} selected={location.pathname === "/resume"}>
                            <ListItemIcon>
                                <Attachment />
                            </ListItemIcon>
                            <ListItemText primary="Resume" />
                            <ListItemSecondaryAction>
                                {location.pathname === "/resume" ? <ArrowBack fontSize="small" /> : null}
                            </ListItemSecondaryAction>
                        </ListItem>

                        <ListItem to="/contact" button component={NavLink} selected={location.pathname === "/contact"}>
                            <ListItemIcon>
                                <Email />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                            <ListItemSecondaryAction>
                                {location.pathname === "/contact" ? <ArrowBack fontSize="small" /> : null}
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>

                    <Divider />
                    <br />
                    <Typography variant="caption" align="center" display="block">
                        Copyright <br /> © Evergreen George <br /> 2020
                </Typography>

                </div>
            </Drawer>
        </ThemeProvider >
    );
}
export default Drawers;