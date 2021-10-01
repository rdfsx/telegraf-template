import { Context, Telegraf } from 'telegraf'

export function setCommands(bot: Telegraf<Context>) {
  bot.telegram.setMyCommands(
    [
      {command: "start", description: "Start bot"},
      {command: "help", description: "Start bot"},
    ]
  )
}
