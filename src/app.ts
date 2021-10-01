import { localeActions } from './handlers/language'
// Setup @/ aliases for modules
import 'module-alias/register'
// Config dotenv
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
// Dependencies
import { bot } from '@/helpers/bot'
import { ignoreOldMessageUpdates } from '@/middlewares/ignoreOldMessageUpdates'
import { i18n, attachI18N } from '@/helpers/i18n'
import { setLanguage, sendLanguage } from '@/handlers/language'
import { attachUser } from '@/middlewares/attachUser'
import { sendHelp } from '@/handlers/private/help'
import { sendEcho } from '@/handlers/private/default'
import { setCommands } from '@/utils/set_bot_commands'

// Middlewares
bot.use(ignoreOldMessageUpdates)
bot.use(attachUser)
bot.use(i18n.middleware(), attachI18N)
// Commands
bot.start((ctx) => ctx.reply(`Bot ${bot.botInfo.username} is up and running`))
bot.command(['help', 'start'], sendHelp)
bot.command('language', sendLanguage)
bot.on("text", sendEcho)
// Actions
bot.action(localeActions, setLanguage)
// Errors
bot.catch(console.error)
// Start bot
setCommands(bot).then()
bot.launch().then(() => {
  bot.telegram.sendMessage(process.env.ADMIN, `Bot ${bot.botInfo.username} is up and running`).then()
  console.info(`Bot ${bot.botInfo.username} is up and running`)
})

