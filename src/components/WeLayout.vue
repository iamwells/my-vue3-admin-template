<script setup lang="ts"></script>

<template>
  <div class="we-layout">
    <slot name="header" class="we-layout-header"></slot>
  </div>
</template>

<style scoped>
  .we-layout {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
