<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Header></Header>
  <Layout></Layout>
</template>

<script lang='ts'>
  import Header from '@/components/Header.vue'
  import Layout from '@/layout/index.vue'
  export default {
    components:{ Header,Layout }
  }
</script>
<style lang='scss' scoped>

</style>
