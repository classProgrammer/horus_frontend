import React from 'react'
import Divider from '@material-ui/core/Divider'
import axios from 'axios'
import Box from '@material-ui/core/Box'
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

            ]
        }
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
                <MessengerToolbar title="3BIT Dev Chatbot" />
                <MessageArea entries={this.state.messages} />
                <Divider light />
                <MessengerSubmitArea textHandler={this.handleMessage.bind(this)} submitMessage={this.handleSubmit.bind(this)} />
            </Box>
        )
    }
}

export default Messenger