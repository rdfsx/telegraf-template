import { Context } from 'telegraf'

export function sendStart(ctx: Context) {

  return ctx.replyWithHTML(ctx.i18n.t('start'))
}
