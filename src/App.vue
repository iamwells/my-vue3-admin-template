<script setup lang="ts">
  import { darkTheme, dateZhCN, lightTheme, zhCN } from 'naive-ui'
  import { computed, reactive } from 'vue'
  import { RouterView } from 'vue-router'

  import { useSettingStore } from './stores/settings'
  import type { Themes } from './stores/settings'

  const settings = useSettingStore()

  const themes: Themes = reactive({
    light: lightTheme,
    dark: darkTheme,
  })

  const curTheme = computed(() => {
    return themes[settings.theme]
  })

  const barColor = computed(() => {
    return curTheme.value.LoadingBar.common?.primaryColor || '#29d'
  })
  console.log(barColor.value)

  // await service.get('/api/test').catch((e) => console.log(e))
</script>

<template>
  <n-config-provider :theme="curTheme" :locale="zhCN" :date-locale="dateZhCN">
    <!-- RoterView添加过渡动画和保活机制 -->
    <router-view #default="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <n-global-style />
  </n-config-provider>
</template>

<style></style>
