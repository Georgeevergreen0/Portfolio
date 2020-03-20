import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import Refresh from '@material-ui/icons/Refresh';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Chat from '@material-ui/icons/Chat';
import LocalPostOffice from '@material-ui/icons/LocalPostOffice';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';







const useStyles = makeStyles((theme) => ({
    heading: {
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
        borderRadius: 5,
        padding: theme.spacing(5),
        textAlign: "center",
    },
    spacing: theme.mixins.toolbar,
    snackbar: {
        backgroundColor: theme.palette.primary.main
    }
}))



const Contact = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("Message Sent!!!");
    const [snackbarState, setSnackbar] = useState(false);



    let submitHandler = async (e) => {
        e.preventDefault()
        let form = e.target;
        let data = new FormData(form);
        setLoading(true);
        try {
            let response = await fetch(form.action, {
                method: form.method,
                headers: {
                    "Accept": "application/json"
                },
                body: data,
            })

            if (response.ok) {
                setLoading(false);
                setSnackbar(true);
                setMessage("Message Sent");
                form.reset();
            } else {
                setLoading(false);
                setSnackbar(true);
                setMessage("Not Sent, Check your Network!!!");
            }
        } catch (error) {
            setLoading(false);
            setSnackbar(true);
            setMessage("Not Sent, Check your Network!!!");
        }
    }

    return (
        <>
            <Typography className={classes.heading}>
                I'm avalible for freelance work, I want to hear about your projects.
        </Typography>
            <div className={classes.spacing}></div>
            <Container disableGutters maxWidth="md">
                <form action="https://formspree.io/xgevdqwv" method="POST" onSubmit={submitHandler}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField InputProps={{ endAdornment: (<InputAdornment position="end"><AccountCircle color="primary" /></InputAdornment>) }}
                                required autoComplete="on" id="firstName" fullWidth name="firstName" variant="outlined" placeholder="First Name" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField InputProps={{ endAdornment: (<InputAdornment position="end"><AccountCircle color="primary" /></InputAdornment>) }}
                                required autoComplete="on" id="lastName" fullWidth name="lastName" variant="outlined" placeholder="Last Name" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField InputProps={{ endAdornment: (<InputAdornment position="end"><LocalPostOffice color="primary" /></InputAdornment>) }}
                                required autoComplete="on" type="email" id="email" fullWidth name="email" variant="outlined" placeholder="Email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField InputProps={{ endAdornment: (<InputAdornment position="end"><Chat color="primary" /></InputAdornment>) }}
                                required autoComplete="on" id="subject" fullWidth name="subject" variant="outlined" placeholder="Subject" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required autoComplete="on" id="message" rows={8} rowsMax={10} multiline fullWidth name="message" variant="outlined" placeholder="Hello George..." />
                        </Grid>
                        <Grid item xs={12}>
                            <Button disabled={loading} type="submit" color="primary" size="large" fullWidth variant="contained" >
                                {loading ? <CircularProgress /> : <Send fontSize="large" />}
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button disabled={loading} type="reset" color="primary" size="large" fullWidth variant="outlined" >
                                <Refresh fontSize="large" />
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Snackbar ContentProps={{ className: classes.snackbar }} open={snackbarState} message={message} autoHideDuration={3000} onClose={setSnackbar.bind(this, false)}
                    action={<IconButton size="small" aria-label="close" color="inherit" onClick={setSnackbar.bind(this, false)}>
                        <CloseIcon fontSize="small" />
                    </IconButton>} />
            </Container>
        </>
    )
}

export default Contact;