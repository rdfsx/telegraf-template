import { Telegraf, Markup as m, Scenes } from 'telegraf'

const broadcastScene = new Scenes.BaseScene<Scenes.SceneContext>('broadcasting')


export async function setupAdminHandlers(bot: Telegraf) {
  broadcastScene.command('broadcast', async (ctx) =>
    ctx.reply('Введите сообщение, которое хотели бы отправить всем, кто есть в базе:',
      m.inlineKeyboard([{text: "cancel", callback_data: "cancel"}])
    ))

  broadcastScene.action('cancel', async (ctx) => {
    ctx.reply("Отменено.")
    broadcastScene.leave()
    }
  )

  broadcastScene.on("message", async (ctx) => {

  })

}
