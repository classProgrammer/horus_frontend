import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    toolbar: {
         align: "center"
    },
    appbar: {
        minHeight: "3.5em",
        alignContent: "center",
        justifyContent: "center",
        background: "#365a9e"
    },
    title: {
        color: "white",
        align: "center",
        fontSize: "1.3em"
    },
}))

function MessengerToolbar(props) {
    const classes = useStyles()

    return (
        <AppBar position="static" className={classes.appbar}>
                <Typography align="center" className={classes.title} color="textPrimary" gutterBottom >
                    {props && props.title ? props.title : "TITLE NOT SPECIFIED"}
                </Typography>
        </AppBar>
    )
}

export default MessengerToolbar