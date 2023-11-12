import HttpFactory from "~/services/api/factory";
import { type IUser } from '~/models/user'

type IUserResponse = IUser 

class UserModule extends HttpFactory {
  private readonly RESOURSE = '/users'

  async getUserInfo (extras: any): Promise<IUserResponse> {
    return await this.call<IUserResponse>('GET', `${this.RESOURSE}`,undefined, extras);
  }
}

export default UserModule;