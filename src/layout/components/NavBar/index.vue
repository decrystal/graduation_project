<script lang='ts' setup>
    import {Ship} from '@element-plus/icons-vue'
    import { reactive, toRefs } from 'vue'
    const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        sizeList: ['large', 'default', 'small'],
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>
<template>
    <div class="navBar">
        <el-icon :size="25"><ship /></el-icon>
        <span class="textNav">
            OneNet
        </span>
        <div class='selectItem'>
            <span>我的工单</span>
            <span>我的中心</span>
            <span>文档中心</span>
        </div>
        <el-avatar :size="25" :src="circleUrl" class="avatar"></el-avatar>
    </div>
</template>

<style lang='scss' scoped>
.navBar {
    width:100%;
    height:40px;
    background:rgb(165, 203, 255);
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;

    .el-icon {
        margin-left:10px;
    }
    .selectItem {
        margin-left: auto;
        &>span {
          margin-right: 15px;  
        }
    }

    .textNav {
        border: 1px solid #333;
        border-radius: 10px;
        padding:5px 5px;
        margin-left: 10px;
    }
    .avatar {
        margin-right: 10px;
    }
    // & >span:nth-child()
}

</style>