import { Context, Markup, Scenes } from 'telegraf'


const broadcastScene = new Scenes.BaseScene('BROADCAST_ADMIN')


broadcastScene.enter((ctx) => {
  ctx.session.myData = {};
  ctx.reply('What is your drug?', Markup.inlineKeyboard([
    Markup.callbackButton('Movie', MOVIE_ACTION),
    Markup.callbackButton('Theater', THEATER_ACTION),
  ]).extra());
});


export function broadcast(ctx: Context<any>) {
  return ctx.reply("Введите сообщение:", Markup.inlineKeyboard([
    Markup.button.callback("Отмена", "cancel")
  ]))
}

export function cancelBroadcast(ctx: Context<any>) {


}

broadcastScene.use((ctx) => ctx.replyWithMarkdown('Please choose either Movie or Theater'));
