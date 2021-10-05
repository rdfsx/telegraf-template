import { Telegraf } from 'telegraf'

export async function setupEchoHandler(bot: Telegraf) {
  bot.on("text", async (ctx) => ctx.reply(ctx.message.text))
}
