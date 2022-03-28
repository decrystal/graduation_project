<template>
    <div class="container">
        <div class="topheader">
            <img class='img' src="@/assets/images/top.png" alt="">
        </div>
        <div class="user">
            <img src="@/assets/images/Bell.png" alt="">
            <img src="@/assets/images/avatar.png" alt="">
            <div>
                <span>管理员</span>
                <img src="@/assets/images/arrow.png" alt="">
            </div>
        </div>
    </div>
</template>

<script lang='ts' >
    import { defineComponent } from 'vue';
    export default defineComponent({
        setup() {
            return {
                
            }
        }
    })
</script>

<style lang='scss' scoped>
    .container {
        padding:0px 30px;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        
    };
    .img {
        width: 88%;
        height: 65px;
        margin-right:20px;
    }
    .user {
        position: absolute;
        top: 5px;
        right: 30px;
        display: flex;
        flex-direction: row;
        & > img {
            margin: 8px;
        }
        & > div {
            padding-top: 10px;
        }
        & > div > span  {
            width: 49px;
            font-family: SourceHanSansCN-Regular;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #23cefd;
            margin-right:5px
        }
    }
</style>