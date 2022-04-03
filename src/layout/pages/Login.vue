<template>
    <div class="loginContainer">
        <div class="loginBox">
            <img src="../../assets/images/logo.png" style="width: 64%;height:10%;" alt="">
            <div >
                <p >
                    <span @click="toggleAction">登录账号</span>
                    <span @click="toggleAction">账号注册</span>
                </p>
                <img src="../../assets/images/shape3.png" alt="">
                <div>

                </div>
                <el-form
                    class='loginForm'
                    label-position='left'
                    :model = 'formData'
                >
                    <el-form-item>
                        <template v-slot:label>
                            <img src="../../assets/images/user.jpg" style='margin-top:10px' alt="">
                        </template>
                        <input type="text" v-model="test">
                    </el-form-item>
                    <el-divider style='width:80%;height: 2px;margin: 0px;'></el-divider>
                    <el-form-item >
                        <template v-slot:label>
                            <img src="../../assets/images/passwords.jpg"  style='margin-top:10px' alt="">
                        </template>
                        <input v-model='formData.password'/>
                    </el-form-item>
                    <el-divider style='width:80%;height: 2px;margin: 0px;'></el-divider>
                    <el-form-item>
                        <input type="checkbox" style="width:17px;height:17px;margin-right:20px;">
                        <span style='color:#fff;font-size:23px;'>记住密码</span>
                    </el-form-item>
                </el-form>
                <div>
                    <el-button v-if="isLogin" @click="login">登录</el-button>
                    <el-button v-if="!isLogin" @click="register">注册</el-button>
                </div>
            </div>
            
        </div>
        <div>
            <img class="imageBackground" src="../../assets/images/loginBackground.png" alt="">
        </div>
    </div>
</template>

<script lang='ts' scoped>
    import { defineComponent, reactive, toRefs } from 'vue';
    import useCookieState from '../../hooks/useCookieState'
    import { useCookies } from '@vueuse/integrations/useCookies'
    export default defineComponent({
        setup(props, context) {
            const data = reactive({
                isLogin: true,
                formData: {
                    user: 'xxx',
                    password: 'xxx'
                }
            })
            useCookieState('user', data.formData.user)
            const toggleAction = (e) => {
                console.log('test-target', e.currentTarget, e.target)
                data.isLogin = !data.isLogin
                
            }
            const login = () => {
                console.log('test-login')
                cookies.set('locale','testtest')
            }
            const register = () => {

            }
            const cookies = useCookies(['locale'])
            cookies.set('locale','test')
            console.log('cookie',cookies.get('locale'))
            const test = cookies.get('locale')
            return {
                ...toRefs(data),
                toggleAction,
                login,
                register,
                cookies,
                test
            }
        }
    })
</script>

<style lang='scss' scoped>
    .loginContainer {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
    }
    .loginBox {
        height: 678px;
        margin-left: 173px;
        margin-top: 153px;
        position: relative;
        & > img {
            display: block;
            margin: 0 auto;
            margin-bottom: 30px;
        }
        & > div > div:last-of-type {
            .el-button {
                display: block;
                width: 460px;
                height: 72px;
                background-image: linear-gradient(265deg, 
                    #006ae1 0%, 
                    #16b6ff 100%), 
                linear-gradient(
                    #0091ff, 
                    #0091ff);
                background-blend-mode: normal, 
                    normal;
                border-radius: 5px;
                font-size: 36px;
                color: #ffffff;
                margin:0 auto
            }
        }
        & .loginForm {
            background-image: url('../../assets/images/loginContainer.png');
            background-size: 100% 100%;
            height: 420px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .el-form-item {
                margin-top: 30px;
                width: 500px;
            }
            & > .el-form-item:nth-of-type(1) {

                margin-top: 0px;
            }
            & > .el-form-item--default {
                margin-bottom: 0px;
                margin-left: 50px;
            }
            & input,
            textarea {
                border: 0;
                background: transparent;
                font-size: 32px;
                padding: 10px;
                color: white;
                text-shadow: 0px 0px 0px white;
                -webkit-text-fill-color: transparent;
            }
            & input::-webkit-input-placeholder,
            textarea::-webkit-input-placeholder{
                color: white;
                text-shadow: none;
                -webkit-text-fill-color: initial;
            }
            & input:focus {
                outline: 0;
            }
           
                        
        }

        & > div:nth-of-type(1) {
            height: 668px;
            background: rgba(5, 24, 71,0.3);
            padding-top: 30px;
            & > img {
                display: block;
                margin: 10px auto;
            }
            & > p {
                font-family: SourceHanSansCN-Medium;
                font-size: 36px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
                text-align: center;
                display: flex;
                padding: 10px 80px;
                justify-content: space-between;
            }
        }
        
    }
    .imageBackground {
            margin-left: -20%;
            margin-top: 10%;
            z-index: -999;

        }
</style>