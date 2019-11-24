import React from 'react'
import Divider from '@material-ui/core/Divider'
import axios from 'axios'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import MessengerToolbar from './MessengerToolbar.js'
import MessageArea from './MessageArea.js'
import MessengerSubmitArea from './MessengerSubmitArea.js'


class Messenger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [
                {
                    sender: "YOU",
                    message: "Hi",
                    timestamp: "12:30"
                },
                {
                    sender: "BOT",
                    message: "Hall ich bin der 3BIT Chatbot, wie kann ich helfen",
                    timestamp: "12:30"
                },

            ],
            message: ""
        }
    }

    handleMessage(event) {
        console.log(event.target.value)
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const time = new Date();

        if (this.state.message === "") return

        var messages = this.state.messages
        const message = {
            sender: "YOU",
            message: this.state.message,
            timestamp: ("0" + time.getHours()).slice(-2) + ":" +
                ("0" + time.getMinutes()).slice(-2) + ":" +
                ("0" + time.getSeconds()).slice(-2)
        }
        messages.push(message)
        this.setState({
            messages: messages,
            message: ""
        })

        console.log("send message")

        axios({
            method: 'post',
            url: 'http://localhost:5005/webhooks/rest/webhook',
            data: message,
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                const time = new Date();

                var messages = this.state.messages
                const message = {
                    sender: "BOT",
                    message: response.data[0].text,
                    timestamp: ("0" + time.getHours()).slice(-2) + ":" +
                        ("0" + time.getMinutes()).slice(-2) + ":" +
                        ("0" + time.getSeconds()).slice(-2)
                }
                messages.push(message)
                this.setState(messages)
            })
    }

    render() {
        return (

            <Grid
                container
                direction="column"
                alignItems="center"
            >
                <Grid item >
                    <Box width={"25em"}>
                        <MessengerToolbar title="3BIT Dev Chatbot" />
                        <MessageArea entries={this.state.messages} />
                        <Divider light />
                        <MessengerSubmitArea message={this.state.message} textHandler={this.handleMessage.bind(this)} submitMessage={this.handleSubmit.bind(this)} />
                    </Box>
                </Grid>

            </Grid>

        )
    }
}

export default Messenger