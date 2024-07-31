import { createDiscreteApi, darkTheme, lightTheme, type ConfigProviderProps, type MessageOptions } from 'naive-ui'
import { computed, ref } from 'vue'

import { useSettingStore } from '@/stores/settings'

export const theme = ref(
  JSON.parse(sessionStorage?.getItem('settings') || JSON.stringify({ theme: 'light' }))?.theme || 'light',
)

const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  theme: theme.value === 'dark' ? darkTheme : lightTheme,
  themeOverrides: {
    LoadingBar: {
      colorLoading: '#FDFF31',
      colorError: '#EA202D',
    },
  },
}))

export const { message, notification, dialog, loadingBar, modal } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
  {
    configProviderProps: configProviderPropsRef,
  },
)

export function matchTheme() {
  const settings = useSettingStore()
  theme.value = settings.theme
}
