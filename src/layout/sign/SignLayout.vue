<script setup lang="ts">
  import { computed } from 'vue'

  import { useSettingStore } from '@/stores/settings'

  const settings = useSettingStore()

  const bi = computed(() => {
    return settings.theme === 'light'
      ? 'linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%)'
      : 'linear-gradient(to right, #434343 0%, black 100%)'
  })
</script>

<template>
  <div class="layout-sign"></div>
</template>

<style scoped>
  .layout-sign {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background-image: v-bind(bi);
  }
</style>
