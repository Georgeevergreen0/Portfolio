import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import evergreen from "./../../asset/images/evergreen.png";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#fff"
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
    div: theme.mixins.toolbar,
}));

let Header = (props) => {
    let classes = useStyles();
    let location = useLocation()
    let history = useHistory()
    let { openSidebar } = props;

    let navigation = (path) => {
        history.push(path)
    }

    return (
        <>
            <AppBar position="relative" color="inherit" className={classes.root}>
                <Toolbar disableGutters>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={openSidebar}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="overline" className={classes.title}>
                        {location.pathname.replace("/", "")}
                    </Typography>
                    <Avatar className={classes.avatar} src={evergreen} onClick={navigation.bind(this, "/")} />
                </Toolbar>
            </AppBar>
            <div className={classes.div}></div>
        </>
    )
}

export default Header;