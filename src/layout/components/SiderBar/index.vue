<template>
  <div class="siderBar">
    <div v-for="(item, key) in siderList"
         :key='key'
         :class="isActive==key ? 'isActive' : null"
         class="siderItem"
         @click="jumpPage(item,key)">r
      <img class="img"
           :src="item.src"
           alt="">
      <span>{{item.text}}</span>
    </div>
    <img class='logo'
         src="@/assets/images/logo.png"
         alt="">
  </div>
</template>

<script lang='ts' scoped>
import { computed, defineComponent, ref, toRefs, reactive } from "vue";
import png from "@/assets/images/dataFlow.png";
import { useRouter } from "vue-router";
interface sidetListProps {
  src: string;
  text: string;
  router?: string;
}
export default defineComponent({
  name: "SiderBar",
  props: {
    width: { type: String, default: "300px" },
  },
  setup(props, context) {
    const router = useRouter();
    const data: { isActive: Number; siderList: Array<sidetListProps> } =
      reactive({
        isActive: 0,
        siderList: [
          { src: png, text: "产品概况", router: "/layout/product" },
          { src: png, text: "设备列表", router: "/layout/productList" },
          { src: png, text: "群组管理" },
          { src: png, text: "数据流模版" },
          { src: png, text: "权限管理" },
          { src: png, text: "触发器管理" },
          { src: png, text: "规则引擎" },
          { src: png, text: "数据推送" },
          { src: png, text: "应用管理" },
          { src: png, text: "API测试" },
        ],
      });
    const refData = toRefs(data);
    const jumpPage = (item: sidetListProps, key: number) => {
      console.log(item, key);
      refData.isActive.value = key;
      router.push({ path: item.router });
    };
    return {
      ...refData,
      jumpPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.siderBar {
  width: 238px;
  height: calc(100vh - 85px);
  background-image: url("@/assets/images/sider.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
  justify-content: flex-start;
}
.siderItem {
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 2.6%;
  font-family: SourceHanSansCN-Normal;
  font-size: 0.11rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 42px;
  letter-spacing: 0px;
  color: rgba(81, 175, 249, 1);
  position: relative;
  padding: 3%;
  margin-top: 8%;
  box-sizing: content-box;
  & > img {
    margin-left: -10%;
  }
  &::before {
    content: "";
    @include selectedRound;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: background-image 0.3s;
    transition: opacity 0.3s;
    z-index: -1;
  }
  &:hover::before {
    opacity: 1;
  }
}
.isActive {
  @include selectedRound;
  // z-index: -999;
  color: white;
}
.img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.logo {
  position: absolute;
  bottom: 135px;
  margin-left: 20px;
}
</style>