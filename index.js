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
    bot.sendMessage(chatId, `${JSON.stringify(msg)}`)
})
bot.on('channel_post', (msg) => {
    const chatId = msg.chat.id
    bot.kickChatMember(chatId, )
    bot.sendMessage(chatId, `New Chat \n\n${JSON.stringify(msg)}`).catch((err) => { bot.sendMessage(chatId, err) })
})

bot.on('chat_member_updated', (msg, meta) => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, `New Member \n\n${JSON.stringify(msg)}`).catch((err) => { bot.sendMessage(chatId, err) })
})