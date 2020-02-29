import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
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
        margin: "0 auto",
        boxShadow: "2px 8px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "5px",
        borderRadius: "5px",
        [theme.breakpoints.up("sm")]: {
            width: "80%"
        }
    }
}));

let Portfolio = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('weather');

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
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
                        <Grid item sm={6}>
                            <Typography paragraph>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                             </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <img src={weather} className={classes.card} alt="Weather Application" />
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
                <Divider variant="middle" />
                <ExpansionPanelActions>
                    <Button size="small">Visit</Button>
                    <Button size="small" color="primary"> Source</Button>
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
                        <Grid item sm={6}>
                            <img src={burger} className={classes.card} alt="Burger Application" />
                        </Grid>
                        <Grid item sm={6}>
                            <Typography paragraph>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                             </Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
                <Divider variant="middle" />
                <ExpansionPanelActions>
                    <Button size="small">Visit</Button>
                    <Button size="small" color="primary"> Source</Button>
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
                        <Grid item sm={6}>
                            <Typography paragraph>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                             </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <img src={portfolio} className={classes.card} alt="Portfolio Site" />
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
                <Divider variant="middle" />
                <ExpansionPanelActions>
                    <Button size="small">Visit</Button>
                    <Button size="small" color="primary"> Source</Button>
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
                        <Grid item sm={6}>
                            <img src={edu} className={classes.card} alt="School Website" />
                        </Grid>
                        <Grid item sm={6}>
                            <Typography paragraph>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                             </Typography>
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
                        <Grid item sm={6}>
                            <Typography paragraph>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                             </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <img src={weather} className={classes.card} alt="Weather Application" />
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
                        <Grid item sm={6}>
                            <img src={weather} className={classes.card} alt="Weather Application" />
                        </Grid>
                        <Grid item sm={6}>
                            <Typography paragraph>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                             </Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
                <Divider variant="middle" />
                <ExpansionPanelActions>
                    <Button size="small">Visit</Button>
                    <Button size="small" color="primary"> Source</Button>
                </ExpansionPanelActions>
            </ExpansionPanel>

        </div>
    );
}
export default Portfolio;
