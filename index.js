require('dotenv').config()
const express = require('express')
const TelegramBot = require('node-telegram-bot-api')

const app = express()
const port = process.env.PORT || 3000
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true })

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
    bot.sendMessage(chatId, 'Received your message');
});
