import React from "react";
import EvergreenDoc from "../asset/files/Evergreen.docx";
import EvergreenImage from "../asset/files/Evergreen.jpg";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import GetApp from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "200px"
    },
    image: {
        display: "block",
        width: "100%",
        height: "auto",
        boxShadow: "2px 8px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "5px",
        borderRadius: "5px",
    },
    fab: {
        position: "fixed",
        bottom: "20vh",
        right: "50px",
    }
}));


const Resume = () => {
    const classes = useStyles();

    return (
        <Container disableGutters className={classes.root}>
            <ButtonBase component="div">
                <img className={classes.image} src={EvergreenImage} alt="Resume" />
            </ButtonBase>
            <Fab className={classes.fab} download="Evergreen" href={EvergreenDoc} color="primary" aria-label="Download Resume"><GetApp /></Fab>
        </Container>
    )
}

export default Resume;