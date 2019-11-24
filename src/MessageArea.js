import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
    card: {
        minHeight: "30em",
        maxHeight: "30em",
        height: "100%",
        width: "100%",
        overflow: "auto"
    },
    titleBot: {
        fontSize: 14,
        color:"green"
    },
    titleUser: {
        fontSize: 14,
        color:"blue"
    },
})

function MessageArea(props) {
    const classes = useStyles()

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
    )
}

export default MessageArea