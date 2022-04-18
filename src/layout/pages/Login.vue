<template>
  <div class="loginContainer">
    <div class="loginBox">
      <img src="../../assets/images/logo.png"
           style="width: 64%;height: 7%;"
           alt="">
      <div>
        <p>
          <span @click="toggleAction">登录账号</span>
          <span @click="toggleAction">账号注册</span>
        </p>
        <img src="../../assets/images/shape3.png"
             alt="">
        <div>

        </div>
        <el-form class='loginForm'
                 label-position='left'
                 :model='formData'>
          <el-form-item>
            <template v-slot:label>
              <img src="../../assets/images/user.jpg"
                   style='margin-top:10px'
                   alt="">
            </template>
            <input type="text"
                   v-model="formData.user">
          </el-form-item>
          <el-divider style='width:80%;height: 2px;margin: 0px;'></el-divider>
          <el-form-item>
            <template v-slot:label>
              <img src="../../assets/images/passwords.jpg"
                   style='margin-top:10px'
                   alt="">
            </template>
            <input v-model='formData.password' />
          </el-form-item>
          <el-divider style='width:80%;height: 2px;margin: 0px;'></el-divider>
          <el-form-item>
            <input type="checkbox"
                   style="width:17px;height:17px;margin-right:3%;">
            <span style='color:#fff;font-size:0.23rem;'>记住密码</span>
          </el-form-item>
        </el-form>
        <div>
          <el-button v-if="isLogin"
                     @click="login">登录</el-button>
          <el-button v-if="!isLogin"
                     @click="register">注册</el-button>
        </div>
      </div>

    </div>
    <div class="imageBackground">
      <img src="../../assets/images/loginBackground.png"
           alt="">
    </div>
  </div>
</template>

<script lang='ts' scoped>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import useCookieState from "../../hooks/useCookieState";
import { useCookies } from "@vueuse/integrations/useCookies";
import useMessage from "@/hooks/useMessage";
import { useUserStore } from "@/store/modules/user";
import { getUserList, createUser, userLogin } from "@/api/user";
import { h } from "vue";
import { ElNotification } from "element-plus";
import router from "@/router/index";
import { isNull } from "@/utils/is";
const userStore = useUserStore();
const { notification } = useMessage();
export default defineComponent({
  setup(props, context) {
    const data = reactive({
      isLogin: true,
      formData: {
        user: "",
        password: "",
      },
    });
    useCookieState("user", data.formData.user);
    const toggleAction = (e) => {
      console.log("test-target", e.currentTarget, e.target);
      data.isLogin = !data.isLogin;
    };
    const login = async () => {
      if (isNull(data.formData.user)) {
        notification("登录失败", "用户名不能为空");
        return;
      }
      if (isNull(data.formData.password)) {
        notification("登录失败", "密码不能为空");
        return;
      }
      const res: any = await userStore.login({
        account: data.formData.user,
        password: data.formData.password,
      });
      console.log("登录成功", res);
      router.replace("/layout/productList");
    };
    const register = () => {};
    onMounted(async () => {
      const data = await getUserList();
      console.log("test-data", data);
    });
    // const cookies = useCookies(["locale"]);
    // cookies.set("locale", "test");
    // console.log("cookie", cookies.get("locale"));
    // const test = cookies.get("locale");
    return {
      ...toRefs(data),
      toggleAction,
      login,
      register,
    };
  },
});
</script>

<style lang='scss' scoped>
input {
  width: 100%;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.loginContainer {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.loginBox {
  box-sizing: content-box;
  flex-basis: 32%;
  height: 80%;
  padding-left: 10%;
  padding-top: 10%;
  position: relative;
  & > img {
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  & > div > div:last-of-type {
    .el-button {
      display: block;
      width: 80%;
      height: 100%;
      background-image: linear-gradient(265deg, #006ae1 0%, #16b6ff 100%),
        linear-gradient(#0091ff, #0091ff);
      background-blend-mode: normal, normal;
      border-radius: 5px;
      font-size: 0.3rem;
      color: #ffffff;
      margin: 0 auto;
    }
  }
  & .loginForm {
    background-image: url("../../assets/images/loginContainer.png");
    background-size: 100% 100%;

    height: 66%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .el-form-item {
      margin-top: 30px;
      width: 80%;
    }
    & > .el-form-item:nth-of-type(1) {
      margin-top: 0px;
    }
    & > .el-form-item--default {
      margin-bottom: 0px;
      margin-left: 3%;
    }
    & input,
    textarea {
      border: 0;
      background: transparent;
      font-size: 0.32rem;
      padding: 10px;
      color: white;
      text-shadow: 0px 0px 0px white;
      -webkit-text-fill-color: transparent;
    }
    & input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: white;
      text-shadow: none;
      -webkit-text-fill-color: initial;
    }
    & input:focus {
      outline: 0;
    }
  }

  & > div:nth-of-type(1) {
    height: 70%;
    background: rgba(5, 24, 71, 0.3);
    padding-top: 3%;
    & > img {
      display: block;
      margin: 10px auto;
    }
    & > p {
      font-family: SourceHanSansCN-Medium;
      font-size: 0.36rem;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;
      text-align: center;
      display: flex;
      padding-bottom: 10px;

      & > span {
        flex-basis: 50%;
        text-align: st;
      }
    }
  }
}
.imageBackground {
  padding-right: 10%;
  padding-top: 10%;
  box-sizing: content-box;
  z-index: -999;
  flex-basis: 62%;
}
</style>