require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
var bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true })

// if (process.env.NODE_ENV == 'production') {
//     bot = new TelegramBot(token);
//     bot.setWebHook(process.env.HEROKU_URL + bot.token);
// } else {
//     bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true })
// }


module.exports = bot