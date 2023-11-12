import { defineNuxtPlugin } from "#app";
import { type FetchOptions, $fetch } from "ofetch";
import UserModule from "~/services/api/user";
import ProjectModule from "~/services/api/project";
import CardsModule from "~/services/api/cards";

interface IApiInstance {
  user: UserModule,
  project: ProjectModule,
  cards: CardsModule,
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: 'http://localhost:3100/api',
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const models: IApiInstance = {
    user: new UserModule(apiFetcher),
    project: new ProjectModule(apiFetcher),
    cards: new CardsModule(apiFetcher),
  };

  return {
    provide:{
      api: models,
    },
  };
});