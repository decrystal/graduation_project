<template>
  <div class="productListContainer">
    <div class="myItem">
      <img src="@/assets/images/myEntradas.png"
           alt="">
      <span>我的工单</span>
      <img src="@/assets/images/costCenter.png"
           alt="">
      <span>费用中心</span>
      <img src="@/assets/images/fileCenter.png"
           alt="">
      <span>文档中心</span>
    </div>
    <div class="proAcuerdo">
      <div class="proAcuerdo_info">
        <div>
          <p>设备接入数</p>
          <p>12</p>
        </div>
        <el-divider direction='vertical'></el-divider>
        <div>
          <p>设备接入数</p>
          <p>12</p>
        </div>
        <el-divider direction='vertical'></el-divider>
        <div>
          <p>设备接入数</p>
          <p>12</p>
        </div>
      </div>
      <div class="proAcuerdo_button">
        <el-button>设备接入协议</el-button>
        <el-button>设备接入协议</el-button>
        <el-button>设备接入协议</el-button>
      </div>
    </div>
    <div class="proList">
      <div class="proSearch">
        <el-select :popper-append-to-body="false"
                   class='test'
                   v-model="value"
                   placeholder="请选择"
                   popper-class='productListSelect'>
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-input type=''
                  placeholder='请输入内容'></el-input>
        <el-button>搜索</el-button>
      </div>
      <div class="list">
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column prop="date"
                           label="日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang='ts' scoped>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductList",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  setup() {},
});
</script>

<style lang='scss' scoped>
@mixin buttonStyle {
  background-image: linear-gradient(265deg, #006ae1 0%, #16b6ff 100%),
    linear-gradient(#1aa1e6, #1aa1e6);
  background-blend-mode: normal, normal;
  border-radius: 2px;
  border: 1px solid transparent;
  min-width: 94px;
  font-size: 0.16rem;
  color: white;
}
@mixin proListBox {
  background-image: url("/src/assets/images/productList_box.png");
  background-attachment: scroll;
  background-size: 100% 100%;
}
.productListContainer {
  padding: 0px 1.5% 10px 1.5%;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.myItem {
  height: 0.34rem;
  margin-bottom: 0.1rem;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: end;
  & > img {
    height: 90%;
    vertical-align: top;
    margin-right: 0.1rem;
  }
  & > span {
    display: inline-block;
    height: 0.34rem;
    line-height: 0.34rem;
    font-family: SourceHanSansCN-Normal;
    font-size: 0.14rem;
    color: rgb(25, 141, 204);
    vertical-align: top;
    margin-right: 0.2rem;
  }
}
.proAcuerdo {
  @include proListBox;
  width: 100%;
  height: 89px;
  display: flex;
  flex-direction: row;
  padding: 10px 5%;
  box-sizing: border-box;
  justify-content: space-between;
  .proAcuerdo_info {
    flex-basis: 60%;
    display: flex;
    flex-direction: row;
    text-align: center;
    flex-wrap: nowrap;
    align-items: center;
    & > div {
      flex-basis: 33.333%;
      & > p:nth-of-type(1) {
        font-size: 14px;
        color: #ffffff;
      }
      & > p:nth-of-type(2) {
        font-size: 30px;
        color: #1aa1e6;
      }
    }
    & > .el-divider--vertical {
      flex-basis: 2px;
      height: 38px;
    }
  }
  .proAcuerdo_button {
    display: flex;
    flex-wrap: nowrap;
    flex-basis: 30%;
    align-items: center;
    justify-content: end;
    & > .el-button {
      @include buttonStyle();
      flex-basis: 33.3%;
    }
  }
}
.proList {
  flex-grow: 1;
  margin-top: 15px;
  .proSearch {
    width: 100%;
    display: flex;
    & .el-select:nth-of-type(1) {
      margin-right: 10px;
    }
    ::v-deep .el-input:nth-of-type(3) {
      flex-basis: 15%;
      margin-right: 10px;
    }
    ::v-deep .el-input__inner {
      cursor: pointer;
      display: inline-flex;
      background-color: #141f3b;
      border: solid 1px #20bcfc;
      box-shadow: none;
      border-radius: 2px;
    }
    & .el-button {
      @include buttonStyle;
    }
  }
  .list {
    margin-top: 10px;
    height: 90%;
    & .el-table {
      height: 100%;
      padding: 1.33% 3.33%;
      background-image: url("/src/assets/images/productListTable.png");
      background-attachment: scroll;
      background-size: 100% 100%;
      --el-table-border-color: #1fa6d4;
      --el-table-border: 1px solid #1fa6d4;
      --el-table-text-color: white;
      --el-table-header-text-color: #1fa6d4;
      --el-table-row-hover-bg-color: orange;
      --el-table-current-row-bg-color: white;
      --el-table-header-bg-color: transparents;
      --el-table-fixed-box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
      --el-table-bg-color: transparents;
      --el-table-tr-bg-color: transparents;
      --el-table-expanded-cell-bg-color: pink;
    }
  }
}
.test {
}
</style>