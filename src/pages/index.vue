<template>
    <Tutorial />
</template>
  
<script setup lang="ts">
import Tutorial from "~/components/Tutorial.vue";
import { definePageMeta } from "#imports";

definePageMeta({
  layout: 'main'
})
</script>