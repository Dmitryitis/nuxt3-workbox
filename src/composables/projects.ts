import { useNuxtApp } from "nuxt/app";
import { type IProjects } from "~/models/projects";

export async function useGetProjects(): Promise<Array<IProjects> | []> {
    const {$api} = useNuxtApp();
  
    try {
        const response = await $api.project.getProjects({});
        console.log(response)
  
        return response
    } catch (e) {
        return []
    }
  }