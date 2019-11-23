import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import axios from 'axios'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const cardStyles = makeStyles({
    card: {
        minHeight: "30em",
        maxHeight: "30em",
        height: "100%",
        width: "100%",
        overflow: "auto"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    titleBot: {
        fontSize: 14,
        color:"green"
    },
    titleUser: {
        fontSize: 14,
        color:"blue"
    },
    pos: {
        marginBottom: 12,
    },
});

function MessageArea(props) {
    const classes = cardStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                {props.entries.map((msg, idx) => {
                    return <div key={"div_" + idx}>
                        {(msg.sender === "BOT") ?(
                        <Typography align="left" className={classes.titleBot} color="textPrimary" gutterBottom>
                            {msg.message}
                        </Typography>) : (
                            <Typography align="center" className={classes.titleUser} color="textPrimary" gutterBottom>
                            {msg.message}
                            </Typography>   
                        )}
                        <Divider />
                    </div>
                })}
            </CardContent>
        </Card>
    );
}

function ChatbotToolbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" >
                    3 BIT Chatbot
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

function SubmitField(props) {
    const classes = useStyles();

    return (
        <Paper width="100%" component="form" className={classes.root}>
            <InputBase
                onChange={props.textHandler}
                className={classes.input}
                placeholder="Deine Nachricht"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider className={classes.divider} orientation="vertical" />

            <IconButton onClick={props.submitMessage} className={classes.iconButton} aria-label="Versenden">
                <SearchIcon />
            </IconButton>

        </Paper>
    );
}


class Messenger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                
            ]
        };
    }

    handleMessage(event) {
        console.log(event.target.value)
        this.setState({ message: event.target.value })
    }

    handleSubmit() {
        var messages = this.state.messages
        let message = {
            "sender": "YOU",
            "message": this.state.message
        }
        messages.push(message)
        this.setState(messages)
        console.log("send message")

        axios({
            method: 'post',
            url: 'http://localhost:5005/webhooks/rest/webhook',
            data: message,
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {

                console.log(response)

                var messages = this.state.messages
                let message = {
                    "sender": "BOT",
                    "message": response.data[0].text
                }
                messages.push(message)
                this.setState(messages)
            })
    }

    render() {
        return (
            <Box maxWidth="30em" maxHeight="80em">
                <ChatbotToolbar />



                <MessageArea entries={this.state.messages} />
                <Divider light />

                <SubmitField textHandler={this.handleMessage.bind(this)} submitMessage={this.handleSubmit.bind(this)} />
            </Box>
        );
    }
}

export default Messenger;