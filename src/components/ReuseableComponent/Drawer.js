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
import IconBotton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
    fullList: {
        width: '70vw',
        minHeight: "100%",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5)
        }
    },
    heading: {
        padding: theme.spacing(5, 0)
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
                            <IconBotton>
                                <Close fontSize="large" />
                            </IconBotton>
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                            <Avatar className={classes.avatar} src={evergreen} onClick={navigation.bind(this, "/")} />
                        </ListItemSecondaryAction>
                    </ListItem>



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
                            <Button color="primary" activeClassName="Selected" to="/gallary" component={NavLink} >
                                Gallary
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