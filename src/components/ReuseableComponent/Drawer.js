import React from 'react';
import { useHistory, NavLink, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
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
import Email from '@material-ui/icons/Email';




const useStyles = makeStyles((theme) => ({
    fullList: {
        width: '80vw',
        maxWidth: "300px",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5)
        }
    },
    color: {
        color: "#fff"
    },
    background: {
        backgroundColor: "#fff"
    },
    subheader: {
        color: "#fff",
        backgroundColor: "black"
    },
    heading: {
        color: "white",
    },
    center: {
        display: "flex",
        justifyContent: "space-between",
        overflowX: "hidden"
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

        <Drawer open={drawerState} onClose={toggleDrawer}>
            <div className={classes.fullList}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}>
                <List component="nav" subheader={<ListSubheader className={classes.subheader}>Navigation</ListSubheader>} aria-label="main mailbox folders">

                    <div className={classes.center}>
                        <IconButton>
                            <Close fontSize="large" className={classes.color} />
                        </IconButton>
                        <IconButton onClick={navigation.bind(this, "/")} >
                            <Home fontSize="large" className={classes.color} />
                        </IconButton>
                    </div>
                    <br />
                    <div className={classes.center}>
                        <IconButton href="https://github.com/georgeevergreen0" rel="noopener" target="_blank" >
                            <GitHub className={classes.color} />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/georgeevergreen" rel="noopener" target="_blank" >
                            <Linkedin className={classes.color} />
                        </IconButton>
                        <IconButton href="https://twitter.com/georgeevergreen" rel="noopener" target="_blank" >
                            <Twitter className={classes.color} />
                        </IconButton>
                        <IconButton href="https://instagram.com/georgeevergreen" rel="noopener" target="_blank" >
                            <Instagram className={classes.color} />
                        </IconButton>
                    </div>
                    <br />
                    <Divider className={classes.background} />
                    <br />
                    <ListItem to="/about" component={NavLink} disableGutters>
                        <ListItemIcon>
                            <AccountCircle className={classes.color} />
                        </ListItemIcon>
                        <ListItemText primary="About" className={classes.color} />
                        <ListItemSecondaryAction>
                            {location.pathname === "/about" ? <ArrowBack fontSize="small" className={classes.color} /> : null}
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem to="/blog" component={NavLink} disableGutters>
                        <ListItemIcon>
                            <Edit className={classes.color} />
                        </ListItemIcon>
                        <ListItemText primary="Blog" className={classes.color} />
                        <ListItemSecondaryAction>
                            {location.pathname === "/blog" ? <ArrowBack fontSize="small" className={classes.color} /> : null}
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem to="/community" component={NavLink} disableGutters>
                        <ListItemIcon>
                            <Group className={classes.color} />
                        </ListItemIcon>
                        <ListItemText primary="Community" className={classes.color} />
                        <ListItemSecondaryAction>
                            {location.pathname === "/community" ? <ArrowBack fontSize="small" className={classes.color} /> : null}
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem to="/services" component={NavLink} disableGutters >
                        <ListItemIcon>
                            <Store className={classes.color} />
                        </ListItemIcon>
                        <ListItemText primary="Services" className={classes.color} />
                        <ListItemSecondaryAction>
                            {location.pathname === "/services" ? <ArrowBack fontSize="small" className={classes.color} /> : null}
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem to="/gallery" component={NavLink} disableGutters>
                        <ListItemIcon>
                            <Image className={classes.color} />
                        </ListItemIcon>
                        <ListItemText primary="Gallery" className={classes.color} />
                        <ListItemSecondaryAction>
                            {location.pathname === "/gallery" ? <ArrowBack fontSize="small" className={classes.color} /> : null}
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem to="/portfolio" component={NavLink} disableGutters >
                        <ListItemIcon>
                            <Style className={classes.color} />
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" className={classes.color} />
                        <ListItemSecondaryAction>
                            {location.pathname === "/portfolio" ? <ArrowBack fontSize="small" className={classes.color} /> : null}
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem to="/skills" component={NavLink} disableGutters >
                        <ListItemIcon>
                            <Work className={classes.color} />
                        </ListItemIcon>
                        <ListItemText primary="Skills" className={classes.color} />
                        <ListItemSecondaryAction>
                            {location.pathname === "/skills" ? <ArrowBack fontSize="small" className={classes.color} /> : null}
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem to="/contact" component={NavLink} disableGutters >
                        <ListItemIcon>
                            <Email className={classes.color} />
                        </ListItemIcon>
                        <ListItemText primary="Contact" className={classes.color} />
                        <ListItemSecondaryAction>
                            {location.pathname === "/contact" ? <ArrowBack fontSize="small" className={classes.color} /> : null}
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>

                <Divider className={classes.background} />

                <br />

                <Typography variant="caption" className={classes.color} align="center" component="p">
                    Copyright Evergreen George 2020 ©
                </Typography>
            </div>
        </Drawer>
    );
}
export default Drawers;