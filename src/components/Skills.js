import React from "react";
import "../asset/css/Skills.css";

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//     },
//     card: {
//         display: "block",
//         width: "100%",
//         boxShadow: "2px 8px 8px 0 rgba(0, 0, 0, 0.2)",
//         padding: "5px",
//         borderRadius: "5px",
//     },
//     base: {
//         display: "block",
//         width: "100%",
//         margin: "0 auto",
//         [theme.breakpoints.up("sm")]: {
//             width: "80%"
//         }
//     },
// }));

const Skills = () => {
    // const classes = useStyles();

    return (
        <div class="container-cube">
            <div class="cube">
                <div class="cube-top"> </div>
                <div class="cube-bottom"></div>
                <div class="cube-left"></div>
                <div class="cube-right"></div>
                <div class="cube-front"></div>
                <div class="cube-back"></div>
            </div>
        </div>
    )
}

export default Skills;