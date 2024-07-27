<script setup lang="ts">
  import * as Icons from '@vicons/material'
  import { NIcon } from 'naive-ui'
  import { h, ref } from 'vue'

  interface NIons {
    [x: string]: any
  }
  let nIons: NIons = {}
  for (const [n, icon] of Object.entries(Icons)) {
    nIons[n] = icon
  }
  function renderIcon(name: string) {
    // 通过name拿到icons中的组件
    return () => h(NIcon, null, { default: () => h(nIons[name]) })
  }

  const menuOptions = [
    {
      label: '且听风吟',
      key: 'hear-the-wind-sing',
      icon: renderIcon('AcUnitFilled'),
    },
    {
      label: '1973年的弹珠玩具',
      key: 'pinball-1973',
      disabled: true,
      icon: renderIcon('AccessAlarmFilled'),
      children: [
        {
          label: '鼠',
          key: 'rat',
        },
      ],
    },
    {
      label: '寻羊冒险记',
      key: 'a-wild-sheep-chase',
      disabled: true,
    },
    {
      label: '舞，舞，舞',
      key: 'dance-dance-dance',
      children: [
        {
          type: 'group',
          label: '人物',
          key: 'people',
          children: [
            {
              label: '叙事者',
              key: 'narrator',
            },
            {
              label: '羊男',
              key: 'sheep-man',
            },
          ],
        },
        {
          label: '饮品',
          key: 'beverage',
          children: [
            {
              label: '威士忌',
              key: 'whisky',
            },
          ],
        },
        {
          label: '食物',
          key: 'food',
          children: [
            {
              label: '三明治',
              key: 'sandwich',
            },
          ],
        },
        {
          label: '过去增多，未来减少',
          key: 'the-past-increases-the-future-recedes',
        },
      ],
    },
  ]

  const collapsed = ref(false)
</script>

<template>
  <n-layout position="absolute">
    <n-layout has-sider position="absolute" style="top: 0px; bottom: 0px">
      <n-layout-sider
        bordered
        :collapsed="collapsed"
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
        @collapse="collapsed = true"
        @expand="collapsed = false">
        <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
      </n-layout-sider>
      <n-layout>
        <n-layout-header bordered style="height: 64px"> Header </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          <slot></slot>
        </n-layout-content>
        <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px">
          Footer Footer Footer
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>
