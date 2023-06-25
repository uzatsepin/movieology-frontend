<script lang="ts" setup>
import Page from '../components/layout/Page.vue';
import Tabs from '../components/Tabs.vue';
import { tabsMock } from "../mocks/tabs";
import { ref } from "vue";

const activeTab = ref<string>(tabsMock[0].id);

const onTabChange = (tabId: string) => {
  activeTab.value = tabId;
}
</script>
<template>
  <Page>
    <template #title>Movies</template>
    <div>
      <tabs :tabs="tabsMock" :active-tab="activeTab" @on-tab-change="onTabChange" />
    </div>
  </Page>
</template>