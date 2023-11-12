<template>
  <Project :items="projects" />
</template>

<script setup lang="ts">
import { definePageMeta, onMounted } from "#imports";
import Project from '~/components/projects/Project.vue'
import {useGetProjects} from '@/composables/projects';
import { type IProjects } from "~/models/projects";

definePageMeta({
  layout: 'main'
})

const projects = ref<IProjects[] | []>([])

onMounted(async () => {
  projects.value = await useGetProjects()

  console.log(projects)
})
</script>
