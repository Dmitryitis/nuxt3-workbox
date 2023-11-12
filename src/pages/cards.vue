<template>
    <Cards :items="cards" />
</template>
  
<script setup lang="ts">
import { definePageMeta, onMounted } from "#imports";
import Cards from "~/components/cards/Cards.vue";
import { type ICard } from "~/models/card";

import {useGetCards} from '~/composables/cards'

definePageMeta({
  layout: 'main'
})

const cards = ref<ICard[] | []>([])

onMounted(async() => {
  cards.value = await useGetCards()
})
</script>