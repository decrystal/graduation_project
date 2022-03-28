<template>
    <div class="siderBar" :style="getComputedStyle">
        <el-radio-group v-model="direction">
        <el-radio label="ltr">从左往右开</el-radio>
        <el-radio label="rtl">从右往左开</el-radio>
        <el-radio label="ttb">从上往下开</el-radio>
        <el-radio label="btt">从下往上开</el-radio>
        </el-radio-group>

        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        点我打开
        </el-button>

        <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
        <span>我来啦!</span>
        </el-drawer>
    </div>
</template>

<script lang='ts' scoped>
    import {computed, defineComponent,ref} from 'vue'
    export default defineComponent({
        name:'SiderBar',
        props: {
            width: { type: String, default: '300px' },
        },
        data() {
            console.log('data')
            return {
                siderStyle:{
                    width:this.getComputedWidth,
                    backgroundColor:'red'
                }
            }
        },
        watch: {
            'width' (val) {
                console.log('widthChange',this,this.width,val)
                console.log(typeof this.getComputedStyle.width)
                //set get

            }
        },
        setup(props , context){
            console.log('test-setup',props , context,this)
            
            const width = ref(props.width)
            const getComputedWidth = computed(()=>{
                console.log('widthComputed')
                return props.width
            })
            const style = {
                width:props.width,
            }
            const getComputedStyle = computed(()=>{
                return {
                    width:getComputedWidth.value,
                    backgroundColr:'red'
                }
            })
            return {
                getComputedWidth,
                getComputedStyle,
                style,
                msg:`test${props.width}`
            }
        }
    })
</script>

<style lang="scss" scoped>
    .siderBar {
        width: 550px;
        height: 800px;
        background: yellow;
        transition: all 0.3s ease
    }
</style>