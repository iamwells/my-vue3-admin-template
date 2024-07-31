<script setup lang="ts">
  import { darkTheme, dateZhCN, lightTheme, zhCN, type GlobalThemeOverrides } from 'naive-ui'
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

  const themeOverrides: GlobalThemeOverrides = {
    Menu: {
      itemColorActive: 'rgba(234, 32, 45, 0.2)',
      itemColorActiveHover: 'rgba(234, 32, 45, 0.2)',
      itemIconColorActive: '#EA202D',
      itemIconColorActiveHover: '#EA202D',
      itemTextColorActive: '#EA202D',
      itemTextColorActiveHover: '#EA202D',
    },
  }
</script>

<template>
  <n-config-provider :theme="curTheme" :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN">
    <!-- RoterView添加过渡动画和保活机制,组件内可能存在await操作-->
    <suspense>
      <template #default>
        <router-view #default="{ Component }">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </template>
      <template #fallback> Error </template>
    </suspense>

    <n-global-style />
  </n-config-provider>
</template>

<style></style>
