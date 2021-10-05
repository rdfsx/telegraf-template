import { Context, Telegraf } from 'telegraf'
import { getAllUsers, User } from '@/models'

export async function setupHelpHandlers(bot: Telegraf) {
  bot.on("text", async (ctx) =>{
    let users = await getAllUsers()
    for (const user of users) {
      console.log(user.language)
    }
  })
  bot.command('help', async (ctx) => ctx.reply("Это бот."))
}
