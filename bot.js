require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
var bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true })

module.exports = bot