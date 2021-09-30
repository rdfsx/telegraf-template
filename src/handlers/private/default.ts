import { Context } from 'telegraf'

export async function sendEcho(ctx: Context<any>) {
  await ctx.reply(ctx.message.text)
}
