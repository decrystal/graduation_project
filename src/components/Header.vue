<template>
  <div class="containerHeader">
    <img class='img'
         src="@/assets/images/top.png"
         alt="">
    <div class="user">
      <img src="@/assets/images/Bell.png"
           alt="">
      <img src="@/assets/images/avatar.png"
           alt="">
      <div>
        <span>管理员</span>
        <img src="@/assets/images/arrow.png"
             alt="">
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script lang='ts' scoped>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang='scss' scoped>
.containerHeader {
  padding: 0px 30px;
  width: 100%;
  height: 0.65rem;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 0.15rem;
}

.topheader {
  height: 100%;
  padding: 0;
}
.img {
  margin: 0px;
  width: 88%;
  height: 100%;
  margin-right: 20px;
  vertical-align: top;
}
.user {
  position: absolute;
  top: 5px;
  right: 30px;
  display: flex;
  flex-direction: row;
  font-size: 0.3rem;

  height: 100%;
  & > img {
    margin: 0.08rem;
    height: 60%;
    vertical-align: center;
  }
  & > div {
    margin-top: 0.05rem;
  }
  & > div > span {
    height: 100%;
    vertical-align: middle;
    font-family: SourceHanSansCN-Regular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #23cefd;
  }
  & > div > img {
    vertical-align: middle;
    height: 20%;
  }
}
</style>