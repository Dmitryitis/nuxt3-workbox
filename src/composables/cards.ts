import { useNuxtApp } from "nuxt/app";
import { type ICard } from "~/models/card";

export async function useGetCards(): Promise<ICard[] | []> {
    const {$api} = useNuxtApp();
  
    try {
        const response = await $api.cards.getCards({});
        console.log(response)

        console.log(34)
  
        return response
    } catch (e) {
        return []
    }
  }