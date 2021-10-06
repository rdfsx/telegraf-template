import { Telegraf, Markup as m, Scenes } from 'telegraf'
import { cancelKb } from '@/keyboards/inline'

const broadcastScene = new Scenes.BaseScene<Scenes.SceneContext>('broadcasting')
const { enter, leave } = Scenes.Stage


export async function setupAdminHandlers(bot: Telegraf) {
  bot.command('broadcast', async (ctx) => {
    broadcastScene.enter()
    ctx.reply('Введите сообщение, которое хотели бы отправить всем, кто есть в базе:',
      m.inlineKeyboard(cancelKb)
    )
    }
  )

  bot.action('cancel', async (ctx) => {
    ctx.deleteMessage()
    ctx.reply("Отменено.")
    broadcastScene.leave()
    }
  )

  broadcastScene.on("message", async (ctx) => {
    ctx.copyMessage(ctx.chat.id)
  })

}
