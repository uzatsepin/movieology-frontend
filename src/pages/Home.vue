<script lang="ts" setup>
import Page from '../components/layout/Page.vue'
import Tabs from '../components/Tabs.vue'
import { tabsMock } from '../mocks/tabs'
import { ref } from 'vue'
import MainBanner from '../components/MainBanner.vue'
import FlashNews from '../components/FlashNews.vue'
import ContentRow from '../components/ContentRow.vue'
import MovieFeed from '../components/MovieFeed.vue'

const activeTab = ref<string>(tabsMock[0].id)

const onTabChange = (tabId: string) => {
  activeTab.value = tabId
}
</script>
<template>
  <Page class="px-12" paddingless>
    <template #title>Movies</template>
    <div>
      <tabs
        :tabs="tabsMock"
        :active-tab="activeTab"
        @on-tab-change="onTabChange"
      />
    </div>
    <div class="flex">
      <ContentRow>
        <MainBanner />
        <div class="ml-10 max-w-md w-full">
          <FlashNews />
        </div>
      </ContentRow>
    </div>
    <ContentRow class="flex-col">
      <h1 class="text-2xl text-white font-bold">Special for you</h1>
      <MovieFeed />
    </ContentRow>
  </Page>
</template>
