const TelegramBot = require('node-telegram-bot-api');

const token = '5865200994:AAE0Mku1UEcT7tI_-Q7uvPmGHwFc1d-buJQ'
const inspectorUrl = 'https://63c088d245aeb504615c544c--fantastic-pegasus-31850b.netlify.app/'

const bot = new TelegramBot(token, {polling: true});


  bot.on('message', async(msg) => {
    const chatId = msg.chat.id;
    const text = msg.text

    if(text === '/start') {
        await bot.sendMessage(chatId,'Hello', {
            reply_markup: {
                keyboard: [
                    [{text: 'Переглянути фотофіксацію', web_app: {url: inspectorUrl}}, {text: 'Оплатити'}]
                ]
            }
        })
    }
  
  });