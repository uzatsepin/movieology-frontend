<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { movies } from '../mocks/movies.ts'
import MovieCard from './MovieCard.vue'
</script>

<template>
  <div class="mt-6">
    <Carousel :items-to-show="3.5">
      <Slide v-for="{ id, poster, title, rate, year } in movies" :key="id">
        <MovieCard
          :id="id"
          :poster="poster"
          :title="title"
          :rate="rate"
          :year="year"
        />
      </Slide>
    </Carousel>
  </div>
</template>
