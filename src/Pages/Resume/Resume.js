import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import GetApp from '@material-ui/icons/GetApp';

import EvergreenDoc from "asset/files/Evergreen.docx";
import EvergreenImage from "asset/files/Evergreen.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "right",
    },
    image: {
        display: "inline-block",
        width: "100%",
        height: "auto",
        boxShadow: "2px 8px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "5px",
        borderRadius: "5px",
        marginBottom: theme.spacing(2)
    }
}));


const Resume = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} disableGutters maxWidth="md">
            <ButtonBase style={{ width: "100%" }} component="div">
                <img className={classes.image} src={EvergreenImage} alt="Resume" />
            </ButtonBase>
            <Fab download="Evergreen" href={EvergreenDoc} color="primary" aria-label="Download Resume"><GetApp /></Fab>
        </Container>
    )
}

export default Resume;