<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="bg-movie-black flex h-full min-w-0 flex-1 flex-col overflow-y-auto">
    <div class="m-4 my-9 flex justify-between">
      <h1 v-if="title" class="text-4xl font-weigth-900 font-bold text-white">
        {{ title }}
      </h1>
      <h1 v-else class="text-4xl font-weigth-900 font-bold text-white">
        <slot name="title" />
      </h1>
      <div>
        <slot name="header" />
      </div>
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>