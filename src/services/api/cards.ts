import HttpFactory from "~/services/api/factory";
import { type ICard } from '~/models/card'

type ICardResponse = ICard

class CardsModule extends HttpFactory {
  private readonly RESOURSE = '/cards'

  async getCards(extras: any) {
    return await this.call<ICardResponse[] | null>('GET',
      `${this.RESOURSE}`,
      undefined,
      extras);
  }
}

export default CardsModule;