import React from 'react';
import { useHistory, NavLink } from "react-router-dom";
import evergreen from "../../asset/images/evergreen.png";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Linkedin from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import Instagram from '@material-ui/icons/Instagram';




const useStyles = makeStyles((theme) => ({
    fullList: {
        width: '70vw',
        maxWidth: "300px",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5)
        }
    },
    heading: {
        padding: theme.spacing(1, 0)
    },
    center: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(3, 0)
    },
    avatar: {
        cursor: "pointer"
    },
    listItem: {
        padding: theme.spacing(3, 0)
    }
}));

const Drawers = (props) => {
    const classes = useStyles();
    const history = useHistory()
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
                <List component="nav" subheader={<ListSubheader>Navigation</ListSubheader>} aria-label="main mailbox folders">
                    <ListItem className={classes.heading}>
                        <ListItemIcon>
                            <IconButton>
                                <Close fontSize="large" color="primary" />
                            </IconButton>
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                            <Avatar className={classes.avatar} src={evergreen} onClick={navigation.bind(this, "/")} />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <div className={classes.center}>
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
                    <Divider />

                    <ListItem className={classes.listItem}>
                        <ListItemSecondaryAction>
                            <Button color="primary" activeClassName="Selected" to="/about" component={NavLink} >
                                About
                        </Button>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <ListItemSecondaryAction>
                            <Button color="primary" activeClassName="Selected" to="/blog" component={NavLink} >
                                Blog
                        </Button>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <ListItemSecondaryAction>
                            <Button color="primary" activeClassName="Selected" to="/community" component={NavLink} >
                                Community
                        </Button>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <ListItemSecondaryAction>
                            <Button color="primary" activeClassName="Selected" to="/services" component={NavLink} >
                                Services
                        </Button>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <ListItemSecondaryAction>
                            <Button color="primary" activeClassName="Selected" to="/gallery" component={NavLink} >
                                Gallery
                        </Button>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <ListItemSecondaryAction>
                            <Button color="primary" activeClassName="Selected" to="/portfolio" component={NavLink} >
                                Portfolio
                        </Button>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <ListItemSecondaryAction>
                            <Button color="primary" activeClassName="Selected" to="/skills" component={NavLink} >
                                Skills
                        </Button>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem className={classes.listItem} divider>
                        <ListItemSecondaryAction>
                            <Button color="primary" activeClassName="Selected" to="/contact" component={NavLink} >
                                Contact
                        </Button>
                        </ListItemSecondaryAction>
                    </ListItem>

                </List>
            </div>
        </Drawer>
    );
}
export default Drawers;