<script setup lang="ts">
  import * as XIcons from '@vicons/material'
  import { NIcon, type MenuOption } from 'naive-ui'
  import { h, ref } from 'vue'

  import service from '@/utils/service'

  // 获取所有图标
  const nIcons: Record<string, any> = {}
  for (const [iconName, iconCompoent] of Object.entries(XIcons)) {
    nIcons[iconName] = iconCompoent
  }
  function renderIcon(name: string, options?: any) {
    return () => h(NIcon, options, { default: () => h(nIcons[name]) })
  }

  const menuOptions: Array<MenuOption> = [
    {
      label: '首页',
      key: 'home',
      icon: renderIcon('HomeFilled'),
    },
    {
      label: '用户管理',
      key: 'user',
      icon: renderIcon('PersonFilled'),
    },
    {
      label: '权限管理',
      key: 'permission',
      icon: renderIcon('LockFilled'),
    },
  ]

  const profileOptions = [
    {
      label: '个人中心',
      key: 'profile',
    },
    {
      label: '退出登录',
      key: 'logout',
    },
  ]
  const settingDrawerActive = ref(false)

  await service.get('/api/test').catch((e) => console.log(e))
</script>

<template>
  <div>
    <n-layout has-sider position="absolute" style="top: 0; bottom: 0">
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false">
        <n-menu :options="menuOptions" :collapsed-width="64" :collapsed-icon-size="22"></n-menu>
      </n-layout-sider>
      <n-layout>
        <n-layout-header bordered position="absolute" style="height: 64px; top: 0px">
          <n-flex justify="end" align="center" style="height: 100%; padding: 0 12px">
            <n-button size="large">Oops!</n-button>
            <n-dropdown :options="profileOptions" trigger="click">
              <n-avatar
                size="large"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                bordered
                style="cursor: pointer" />
            </n-dropdown>
            <n-button text style="font-size: 32px" @click="settingDrawerActive = !settingDrawerActive">
              <component :is="renderIcon('SettingsFilled')" />
            </n-button>
          </n-flex>
        </n-layout-header>
        <n-layout-content position="absolute" style="padding: 12px; top: 64px; bottom: 64px">
          <div id="index-layout-content" style="width: 100%; height: 100%"></div>
        </n-layout-content>
        <n-layout-footer position="absolute" style="height: 64px; padding: 12px; bottom: 0px"> </n-layout-footer>
      </n-layout>
    </n-layout>
    <n-drawer
      v-model:show="settingDrawerActive"
      :default-width="400"
      :max-width="600"
      :min-width="250"
      placement="right"
      resizable
      to="#index-layout-content"
      :trap-focus="false"
      :block-scroll="false">
      <n-drawer-content title="设置" closable>
        <n-button> 浅色 </n-button>
        <n-button color="#000"> 深色 </n-button>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style scoped></style>
