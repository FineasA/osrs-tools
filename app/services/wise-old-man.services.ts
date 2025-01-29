import { WOMClient } from '@wise-old-man/utils'

export class WiseOldManServices {
  public client

  constructor() {
    this.client = new WOMClient()
  }

  async getPlayer(username: string) {
    return this.client.players.getPlayerDetails(username)
  }
}
