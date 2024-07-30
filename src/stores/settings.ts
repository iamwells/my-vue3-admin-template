import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export interface Themes {
  light: BuiltInGlobalTheme
  dark: BuiltInGlobalTheme
}

export const useSettingStore = defineStore(
  'settings',
  () => {
    const theme: Ref<'light' | 'dark'> = ref('light')

    function swtichTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    return { theme, swtichTheme }
  },
  {
    persist: {
      storage: sessionStorage,
    },
  },
)
