import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import evergreen from "asset/images/office/profile_photo.jpg";


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#fff",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5)
        },
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
    toolbar: theme.mixins.toolbar,
}));

const Header = (props) => {
    const classes = useStyles();
    const location = useLocation()
    const history = useHistory()
    const { openSidebar } = props;

    const navigation = (path) => {
        history.push(path)
    }

    return (
        <>
            <AppBar position="sticky" color="inherit" className={classes.root}>
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
            <div className={classes.toolbar}></div>
        </>
    )
}

export default Header;