<template>
    <Gallery />
  </template>
  
  <script setup lang="ts">
import { definePageMeta } from "#imports";

import Gallery from "~/components/gallery/Gallery.vue";

definePageMeta({
  layout: 'main'
})
  </script>