import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from "./Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";

const useStyles = makeStyles(theme => ({
    body: {
        overflowX: "hidden",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5)
        }
    },
    content: {
        width: "100%",
        maxWidth: "var(--max-width)",
        flexGrow: 1,
        margin: "0 auto 50px"
    }
}));

const Layout = (props) => {
    const { children } = props;
    const classes = useStyles();
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
    const openSidebar = () => {
        setSideBarIsOpen(true);
    }

    return (
        <>
            <Header openSidebar={openSidebar} />
            <Sidebar sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen} />
            <div className={classes.body}>
                <div className={classes.content}>
                    {children}
                </div>
                <Typography variant="caption" align="center" display="block">
                    Copyright <br /> © Evergreen George <br /> 2024
                </Typography>
            </div>
        </>
    )
}

export default Layout;