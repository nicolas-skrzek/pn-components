<script setup lang="ts">
  import MainMenu from '@/view/part/mainMenu.vue'
</script>

<template>
  <main class="main flex">
    <main-menu />
    <router-view />
  </main>
</template>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  background-color: #fafaf9;
}
</style>
