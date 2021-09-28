import { Context } from 'telegraf'

export function sendEcho(ctx: Context) {
  console.log(ctx)
  return ctx.reply(ctx.message.text)
}

