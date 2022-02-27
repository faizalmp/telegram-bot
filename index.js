require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bot = require('./bot')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.options('*', cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message')
})
bot.on('channel_post', (msg) => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, msg.from.username)
})