
<template>
    <div class="appMain">
       <Product></Product>
       <router-view></router-view>
    </div>
</template>
<script lang='ts'>
import VaIconMenuCollapsed from '@/components/icons/VaIconMenuCollapsed.vue'
import Product from '@/layout/pages/Product.vue'
import {ref,computed,defineComponent } from 'vue'

export default defineComponent({
    name:'AppMain',
    components: {Product}
   
})

</script>
<style lang="scss" scoped>
    .appMain {
        height: calc(100% - 40px);
    }
</style>