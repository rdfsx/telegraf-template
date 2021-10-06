import { Scenes, Telegraf } from 'telegraf'


export interface MongoSessionContext extends Scenes.SceneContext {
  session: any
}

export const bot = new Telegraf<MongoSessionContext>(process.env.TOKEN)
