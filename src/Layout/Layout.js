import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Header from "./Header/Header";
import Sidebar from "../Layout/Sidebar/Sidebar";

const useStyles = makeStyles(theme => ({
    body: {
        overflowX: "hidden",
        width: "auto",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(5)
        }
    }
}));

let Layout = (props) => {
    const { children, Home } = props;
    let classes = useStyles();
    let location = useLocation()
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
    let openSidebar = () => {
        setSideBarIsOpen(true);
    }

    return (
        <>
            <Sidebar sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen} />
            {
                location.pathname === "/" ? (
                    <Home openSidebar={openSidebar} />
                ) : (
                        <div className={classes.body}>
                            <div>
                                <Header openSidebar={openSidebar} />
                                {children}
                                <br />
                                <br />
                            </div>
                            <Typography variant="caption" align="center" display="block">
                                Copyright <br /> © Evergreen George <br /> 2021
                            </Typography>
                        </div>
                    )
            }
        </>
    )
}

export default Layout;