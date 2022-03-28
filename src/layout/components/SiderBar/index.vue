<template>
    <div class="siderBar">
        <div v-for="(item, key) in siderList" :key='key' class="siderItem" @click="jumpPage(item)">
            <img class="img" :src="item.src" alt="">
            <span>{{item.text}}</span>
        </div>
        <img class='logo' src="@/assets/images/logo.png" alt="">
    </div>
</template>

<script lang='ts' scoped>
    import {computed, defineComponent,ref, toRefs} from 'vue'
    import png from '@/assets/images/dataFlow.png'
    import { useRouter } from 'vue-router'
    interface sidetListProps {
        src:string;
        text:string;
        router?: string;
    }
    export default defineComponent({
        name:'SiderBar',
        props: {
            width: { type: String, default: '300px' },
        },
        setup(props,context) {
            const router = useRouter()
            const data:{siderList:Array<sidetListProps>} = {
                siderList:[
                    {src: png,text:'产品概况',router:'/AppMain/product'},
                    {src: png,text:'设备列表'},
                    {src: png,text:'群组管理'},
                    {src: png,text:'数据流模版'},
                    {src: png,text:'权限管理'},
                    {src: png,text:'触发器管理'},
                    {src: png,text:'规则引擎'},
                    {src: png,text:'数据推送'},
                    {src: png,text:'应用管理'},
                    {src: png,text:'API测试'},
                ]
            }
            const refData = toRefs(data)
            const jumpPage = ( item: sidetListProps) => {
                router.push({ path:item.router})
            }
            return {
                ...refData,
                jumpPage
            };
        }
    })
</script>

<style lang="scss" scoped>
    .siderBar {
        width: 238px;
        height: calc(100vh - 75px);
        background-image: url('@/assets/images/sider.png');
        background-repeat:no-repeat;
        background-attachment:scroll;
        background-size: 100% 100%;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .siderItem{
        width: 150px;
        height: 3.6%;
        font-family: SourceHanSansCN-Normal;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 42px;
        letter-spacing: 0px;
        color: rgba(81, 175, 249,1);
        margin-top: 10%;
        margin-left: 56px
    }
    .img {
        width: 20px;
        height: 20px;
        margin-right:10px;
    }
    .logo {
        position: absolute;
        bottom: 135px;
        margin-left: 20px;
    }
</style>