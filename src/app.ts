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
import { attachUser } from '@/middlewares/attachUser'
import { setupHelpHandlers } from '@/handlers/private/help'
import { setupEchoHandler } from '@/handlers/private/default'
import { setCommands } from '@/utils/set_bot_commands'

;
import { setupAdminHandlers } from '@/handlers/admins/admin'
import { session } from 'telegraf'

(async function main() {

  // Middlewares
  bot.use(ignoreOldMessageUpdates)
  bot.use(attachUser)
  bot.use(i18n.middleware(), attachI18N)
  bot.use(session())

  // Commands & actions
  await setupAdminHandlers(bot)
  await setupHelpHandlers(bot)
  await setupEchoHandler(bot)

  // Errors
  bot.catch(console.error)

  // Start
  await bot.launch().then(() => {
    bot.telegram.sendMessage(process.env.ADMIN, `Bot ${bot.botInfo.username} is up and running`).then()
    console.info(`Bot ${bot.botInfo.username} is up and running`)
  })
})()
