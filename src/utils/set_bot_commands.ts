import { Telegraf } from 'telegraf'

export async function setCommands(bot: Telegraf) {
  await bot.telegram.setMyCommands(
    [
      {command: "start", description: "Start bot"},
      {command: "help", description: "Start bot"},
    ],
  )
}
