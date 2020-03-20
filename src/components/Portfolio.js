import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import GitHub from '@material-ui/icons/GitHub';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import weather from "../asset/images/portfolio-weather.png";
import burger from "../asset/images/portfolio-burger.png";
import portfolio from "../asset/images/portfolio-portfolio.png";
import edu from "../asset/images/portfolio-edu.png";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    card: {
        display: "block",
        width: "100%",
        boxShadow: "2px 8px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "5px",
        borderRadius: "5px",
    },
    base: {
        display: "block",
        width: "100%",
        margin: "0 auto",
        [theme.breakpoints.up("sm")]: {
            width: "80%"
        }
    },
    text: {
        textDecoration: "underline"
    },
    list: {
        listStyleType: "circle",
        listStylePosition: "inside"
    },
    heading: {
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 5,
        padding: theme.spacing(5),
        textAlign: "center",
    },
    spacing: theme.mixins.toolbar,
}));

let Portfolio = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('weather');

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Typography className={classes.heading}>
                For a full list of all my software projects expecially back-end only projects visit my github repository by clicking on the button below.
                <br />
                <Button startIcon={<GitHub />} size="small" color="primary" variant="contained" href="https://github.com/georgeevergreen0" rel="noopener" target="_blank" >
                    click here
                </Button>
            </Typography>
            <div className={classes.spacing}></div>
            <Container maxWidth="md" disableGutters>
                <ExpansionPanel expanded={expanded === 'weather'} onChange={handleChange('weather')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="weather"
                    >
                        <Typography variant="h6">Weather Application</Typography>
                    </ExpansionPanelSummary>
                    <Divider variant="middle" />
                    <ExpansionPanelDetails>
                        <Grid container   >
                            <Grid item xs={12} sm={6}>
                                <Typography component="div" variant="body2" paragraph>
                                    <Typography display="block" className={classes.text} variant="overline">Features</Typography>
                                    A react weather application with map and graph at real-time that interact with OpenWeatherMap API.

                                    <Typography display="block" className={classes.text} variant="overline">Stack</Typography>
                                    <ul className={classes.list} >
                                        <li>MaterialUI</li>
                                        <li>JavaScript</li>
                                        <li>Firebase</li>
                                        <li>Mapbox</li>
                                        <li>React</li>
                                        <li>HTML5</li>
                                        <li>Css3</li>
                                        <li>D3</li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ButtonBase className={classes.base} component="div" >
                                    <img src={weather} className={classes.card} alt="Weather Application" />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                    <Divider variant="middle" />
                    <ExpansionPanelActions>
                        <Button href="https://weather.georgeevergreen.com" rel="noopener" target="_blank" size="small">Visit</Button>
                        <Button href="https://github.com/Georgeevergreen0/weather-graph" rel="noopener" target="_blank" size="small" color="primary"> Source</Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'burger'} onChange={handleChange('burger')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="burger"
                    >
                        <Typography variant="h6" >Burger Application</Typography>
                    </ExpansionPanelSummary>
                    <Divider variant="middle" />
                    <ExpansionPanelDetails>
                        <Grid container   >
                            <Grid item xs={12} sm={6}>
                                <Typography component="div" variant="body2" paragraph>
                                    <Typography display="block" className={classes.text} variant="overline">Features</Typography>
                                    A react burger building application with authentication that allow logged in user to order burger from any where on earth.

                                    <Typography display="block" className={classes.text} variant="overline">Stack</Typography>
                                    <ul className={classes.list} >
                                        <li>Realtime firestore</li>
                                        <li>JavaScript</li>
                                        <li>Firebase</li>
                                        <li>React</li>
                                        <li>HTML5</li>
                                        <li>Css3</li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ButtonBase className={classes.base} component="div">
                                    <img src={burger} className={classes.card} alt="Burger Application" />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                    <Divider variant="middle" />
                    <ExpansionPanelActions>
                        <Button href="https://burger.georgeevergreen.com" rel="noopener" target="_blank" size="small">Visit</Button>
                        <Button href="https://github.com/Georgeevergreen0/burger-builder" rel="noopener" target="_blank" size="small" color="primary"> Source</Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'portfolio'} onChange={handleChange('portfolio')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="portfolio"
                    >
                        <Typography variant="h6">My Portfolio</Typography>
                    </ExpansionPanelSummary>
                    <Divider variant="middle" />
                    <ExpansionPanelDetails>
                        <Grid container   >
                            <Grid item xs={12} sm={6}>
                                <Typography component="div" variant="body2" paragraph>
                                    <Typography display="block" className={classes.text} variant="overline">Features</Typography>
                                    My previous portfolio website No framework with scrollspy, image slider and scroll reveal.

                                    <Typography display="block" className={classes.text} variant="overline">Stack</Typography>
                                    <ul className={classes.list} >
                                        <li>JavaScript</li>
                                        <li>JQuery</li>
                                        <li>HTML5</li>
                                        <li>SASS</li>
                                        <li>Css3</li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ButtonBase className={classes.base} component="div">
                                    <img src={portfolio} className={classes.card} alt="Portfolio Site" />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                    <Divider variant="middle" />
                    <ExpansionPanelActions>
                        <Button href="https://georgeevergreen0.github.io" rel="noopener" target="_blank" size="small">Visit</Button>
                        <Button href="https://github.com/Georgeevergreen0/georgeevergreen0.github.io" rel="noopener" target="_blank" size="small" color="primary"> Source</Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'edu'} onChange={handleChange('edu')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="edu"
                    >
                        <Typography variant="h6">School Website</Typography>
                    </ExpansionPanelSummary>
                    <Divider variant="middle" />
                    <ExpansionPanelDetails>
                        <Grid container   >
                            <Grid item xs={12} sm={6}>
                                <Typography component="div" variant="body2" paragraph>
                                    <Typography display="block" className={classes.text} variant="overline">Features</Typography>
                                    A school portal built with gatsby. Key features includes signup, user profile dash board, online school registeration Payment, admin dash board etc.

                                    <Typography display="block" className={classes.text} variant="overline">Stack</Typography>
                                    <ul className={classes.list} >
                                        <li>Payment gateway</li>
                                        <li>MaterialUI</li>
                                        <li>JavaScript</li>
                                        <li>Heraku</li>
                                        <li>gatsby</li>
                                        <li>React</li>
                                        <li>HTML5</li>
                                        <li>Css3</li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ButtonBase className={classes.base} component="div">
                                    <img src={edu} className={classes.card} alt="School Website" />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                    <Divider variant="middle" />
                    <ExpansionPanelActions>
                        <Button size="small">Visit</Button>
                        <Button size="small" color="primary"> Source</Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

                <ExpansionPanel disabled={true} expanded={expanded === 'w'} onChange={handleChange('w')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="weather"
                    >
                        <Typography variant="h6">Google Drive</Typography>
                    </ExpansionPanelSummary>
                    <Divider variant="middle" />
                    <ExpansionPanelDetails>
                        <Grid container   >
                            <Grid item xs={12} sm={6}>
                                <Typography paragraph>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                             </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ButtonBase className={classes.base} component="div">
                                    <img src={weather} className={classes.card} alt="Weather Application" />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                    <Divider variant="middle" />
                    <ExpansionPanelActions>
                        <Button size="small">Visit</Button>
                        <Button size="small" color="primary"> Source</Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

                <ExpansionPanel disabled={true} expanded={expanded === 'w'} onChange={handleChange('w')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="weather"
                    >
                        <Typography variant="h6">Note Keeper</Typography>
                    </ExpansionPanelSummary>
                    <Divider variant="middle" />
                    <ExpansionPanelDetails>
                        <Grid container   >
                            <Grid item xs={12} sm={6}>
                                <Typography paragraph>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                             </Typography>
                                <Grid item xs={12} sm={6}>
                                    <ButtonBase className={classes.base} component="div">
                                        <img src={weather} className={classes.card} alt="Weather Application" />
                                    </ButtonBase>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                    <Divider variant="middle" />
                    <ExpansionPanelActions>
                        <Button size="small">Visit</Button>
                        <Button size="small" color="primary"> Source</Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            </Container>
        </>
    );
}
export default Portfolio;
