<script lang="ts" setup>
import { Tab } from '../types/index';
defineProps<{
  tabs: Tab[];
  activeTab: string;
}>();

const emits = defineEmits<{
  (e: 'on-tab-change', tab: string): void
}>();
</script>

<template>
  <div>
    <nav class="flex space-x-4">
      <a class="rounded-lg px-5 py-2 text-white drop-shadow-sm hover:bg-orange  cursor-pointer transition-all"
        :class='id === activeTab ? "bg-orange" : "bg-movie-black-200"' v-for="{ id, emodji, title } in tabs" :key="id"
        @click="emits('on-tab-change', id)">
        {{ emodji }}
        {{ title }}
      </a>
    </nav>
  </div>
</template>