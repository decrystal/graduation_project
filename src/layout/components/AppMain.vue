
<template>
  <div class="appMain">
    <router-view />
  </div>
</template>
<script lang='ts'>
import Product from "@/layout/pages/Product.vue";

import ProductList from "../pages/ProductList.vue";
import { ref, computed, defineComponent } from "vue";

export default defineComponent({
  name: "AppMain",
  components: { Product, ProductList },
});
</script>
<style lang="scss" scoped>
.appMain {
  height: calc(100% - 0.15rem);
}
</style>