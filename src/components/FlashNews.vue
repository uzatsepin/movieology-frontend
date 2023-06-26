<script lang="ts" setup>
import Stack from './Stack.vue'
import { flashNews } from '../mocks/news.ts'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { computed, ref } from 'vue'

interface FlashNews {
  id: number
  rotate: number
  image: number
  text: string
  date: string
}
const currentSlideIndex = ref<number>(0)
const currentSlide = computed(() => flashNews[currentSlideIndex.value])
const isLastSlide = computed(
  () => currentSlideIndex.value >= flashNews.length - 1
)

const isBackDirection = ref<boolean>(false)
const nextSlide = () => {
  if (isLastSlide.value) {
    return
  }
  isBackDirection.value = false;
  toogleLoading();
  currentSlideIndex.value++
}
const prevSlide = () => {
  if (currentSlideIndex.value === 0) {
    return
  }
  isBackDirection.value = true;
  toogleLoading();
  currentSlideIndex.value--
}

//Animations
const loading = ref<boolean>(false);
const toogleLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false
  }, 300)
}
</script>
<template>
  <stack>
    <transition :name='isBackDirection ? "slide-fade" : "slide-fade-reverse"'>
    <div v-show='!loading'
      class="w-full bg-white rounded-2xl p-6 drop-shadow-md rotate-3"
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
          <ArrowLeftIcon
            v-if="currentSlideIndex > 0"
            class="w-6 mr-2"
            @click="prevSlide"
          />
          {{ currentSlideIndex + 1 }}/{{ flashNews.length }}
          <ArrowRightIcon
            class="w-6 ml-2"
            v-if="!isLastSlide"
            @click="nextSlide"
          />
          <div v-else class='w-6 ml-2'></div>
        </p>
      </div>
    </div>
    </transition>
  </stack>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active,
.slide-fade-reverse-enter-active,
.slide-fade-reverse-leave-active {
  transition: all 300ms ease;
}
.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

/* Back Scrolling */
.slide-fade-reverse-enter {
  transform: translateX(-100px);
}
.slide-fade-reverse-leave-to {
  transform: translateX(100px);
}
</style>
