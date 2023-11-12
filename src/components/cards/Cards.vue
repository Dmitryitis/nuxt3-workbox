<script setup lang="ts">
import CardItem from '~/components/cards/CardItem.vue';
import {type ICard} from '~/models/card'

interface Props {
  items: Array<ICard> | []
}

const props = defineProps<Props>()
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 mt-8 mb-8 sm:px-6 lg:px-8">
    <div class="grid grid-flow-row grid-cols-1 grid-rows-2 lg:grid-cols-2 gap-4">
      <CardItem v-for="item in props.items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
