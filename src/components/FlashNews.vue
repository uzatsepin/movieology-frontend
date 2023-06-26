<script lang="ts" setup>
import Stack from './Stack.vue'
import { flashNews } from '../mocks/news.ts'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

const currentSlide = flashNews[0]
</script>
<template>
  <stack>
    <div
      class="max-w-md w-full bg-white rounded-2xl p-6 drop-shadow-md rotate-3"
    >
      <div class="news-top">
        <img
          class="rounded-2xl"
          :src="currentSlide.image"
          alt="flash news poster"
        />
        <h2 class="text-orange mt-2 font-bold text-m">🔥 Hot News</h2>
        <p class="mt-2 font-bold">{{ currentSlide.text }}</p>
      </div>
      <div class="news__footer mt-4 flex">
        <p class="text-gray-400 w-full">{{ currentSlide.date }}</p>
        <p class="text-gray-900 flex">
          1/5 <ArrowRightIcon class="w-6 ml-2" />
        </p>
      </div>
    </div>
  </stack>
</template>
