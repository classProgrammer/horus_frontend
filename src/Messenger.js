import React from 'react'
import Divider from '@material-ui/core/Divider'
import axios from 'axios'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import MessengerToolbar from './MessengerToolbar.js'
import MessageArea from './MessageArea.js'
import MessengerSubmitArea from './MessengerSubmitArea.js'
import uuid from 'react-uuid'

class Messenger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            message: "",
            UUID: null
        }
    }

    componentDidMount() {
        this.setState({UUID: uuid()})
    }

    handleMessage(event) {
        event.preventDefault()
        this.setState({ message: event.target.value })
    }

    getTimestamp() {
        const time = new Date()
        return ("0" + time.getHours()).slice(-2) + ":" +
        ("0" + time.getMinutes()).slice(-2) + ":" +
        ("0" + time.getSeconds()).slice(-2)
    }

    handleSubmit(event) {
        event.preventDefault()
        
        if (this.state.message === "") return

        var messages = this.state.messages
        const message = {
            sender: "YOU",
            message: this.state.message,
            timestamp: this.getTimestamp()
        }
        messages.push(message)
        const data = {
            sender: this.state.UUID,
            message: this.state.message
        }
        this.setState({
            messages: messages,
            message: ""
        })


        axios({
            method: 'post',
            url: 'https://3bitrasa.azurewebsites.net//webhooks/rest/webhook',
            data: data,
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                
                var messages = this.state.messages
                response.data.forEach(element => {
                    const message = {
                        sender: "BOT",
                        message: element.text,
                        timestamp: this.getTimestamp()
                    }
                    messages.push(message)
                });
                this.setState(messages)
            }).catch(exception => {
                var messages = this.state.messages
                
                messages.push({
                    sender: "SYSTEM",
                    message: "Rasa Server nicht erreichbar",
                    timestamp: this.getTimestamp()
                })

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
                        <MessengerSubmitArea 
                            message={this.state.message} 
                            textHandler={this.handleMessage.bind(this)} 
                            submitMessage={this.handleSubmit.bind(this)} 
                        />
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default Messenger