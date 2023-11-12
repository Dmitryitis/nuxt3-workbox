import HttpFactory from "~/services/api/factory";
import { type IProjects } from '~/models/projects'

export type IProjectsResponse = IProjects;

class ProjectModule extends HttpFactory {
  private readonly RESOURSE = '/projects'

  async getProjects (extras: any) {
    return await this.call<IProjectsResponse>('GET', `${this.RESOURSE}`, undefined, extras);
  }
}

export default ProjectModule;