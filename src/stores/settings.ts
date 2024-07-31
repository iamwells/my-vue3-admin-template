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
    const theme: Ref<'light' | 'dark' | 'os'> = ref('os')

    function swtichTheme(name: 'light' | 'dark' | 'os') {
      theme.value = name
    }

    return { theme, swtichTheme }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)
