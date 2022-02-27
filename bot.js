require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
var bot

if (process.env.NODE_ENV == 'production') {
    bot = new TelegramBot(token);
    bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
    bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true })
}

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});


module.exports = bot