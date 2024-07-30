import { createDiscreteApi, darkTheme, lightTheme, type ConfigProviderProps } from 'naive-ui'
import { computed, reactive } from 'vue'

// import { useSettingStore } from '@/stores/settings'

export const settings = reactive(JSON.parse(sessionStorage.getItem('settings') || JSON.stringify({ theme: 'light' })))

const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  theme: settings.theme === 'dark' ? darkTheme : lightTheme,
}))

export const { message, notification, dialog, loadingBar, modal } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
  {
    configProviderProps: configProviderPropsRef,
  },
)
