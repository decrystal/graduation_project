<template>
    <div class='content'>
        <div class="row_first">
            <div class="row_item" v-for='(item ,index) in productInfo' :key='index'>
                <p class="row_item_title">
                    <img :src='item.src' alt="" style='margin-right: 10px;'>
                    {{item.name}}</p>
                <el-divider border-style='color: #eef5ff;height:2px'></el-divider>
                <div class="row_item_content">
                    <div>
                        <p>12</p>
                        <p>设备接入数</p>
                    </div>
                    <el-divider direction='vertical'></el-divider>
                    <div>
                        <p>10</p>
                        <p>当前在线设备</p>
                    </div>
                    <el-divider direction='vertical'></el-divider>
                    <div>
                        <p>2</p>
                        <p>今日新增设备</p>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
        <div class="row_second">
            <div class="row_second_item">
                <div>
                    <img src=@/assets/images/robot.png alt="">
                    <p>家用机器人</p>
                </div>
                
                <div>
                    <el-button>编辑</el-button>
                    <el-button>删除</el-button>
                </div>
               <span> <el-divider direction='vertical'></el-divider></span>
                <div>
                    
                    <p>3423</p>
                    <p>产品id</p>
                </div>
                <span> <el-divider direction='vertical'></el-divider></span>
                <div>
                    <p>1176</p>
                    <p>用户id</p>
                </div>
            </div>
            <div class="row_second_item_2">
                <div>
                    <p>Master-APIkey</p>
                    <el-button>查看</el-button>
                </div>
                <span>
                    <el-divider direction='vertical'></el-divider>
                </span>
                <div>
                    <p>access_key</p>
                    <el-button>查看</el-button>
                </div>
                <span>
                    <el-divider direction='vertical'></el-divider>
                </span>    
                <div>
                    <p>MATT</p>
                    <el-button>设备接入协议</el-button>
                </div>
            </div>
        </div>
        <div class="row_table" id='echartTable'>

        </div>
    </div>
</template>

<script lang='ts' >
    import { defineComponent, toRefs } from 'vue';
    import productSvg from '@/assets/images/product.png'
    import flipflopSvg from '@/assets/images/flipflop.png'
    import dataFlowSvg from '@/assets/images/dataFlow.png'
    import * as echarts from  'echarts'
    import robotSvg from '@/assets/images/robot.png'
    export default defineComponent({
        name:'Product',
        mounted() {
            this.myChart()
        },
        methods: {
            //Echarts
            myChart() {
                var alarmTime = "2020-08-14 14:56:31";
                var option = {
                    title: {
                        text: '车体振动及转向架振动',
                        // left: 'left',	// 可选为：'left' | 'center' | 'right'
                        padding: [0,0,0,20], // 上, 右, 下, 左
                        /* textStyle: {
                            fontWeight: 'normal',              
                            color: 'MidnightBlue'  // 标题颜色
                        } */
                    },
                    /* 提示框组件 */
                    tooltip: { 
                        trigger: 'axis', // 触发类型，在饼形图中为item
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: function (params, ticket, callback) { // 用formatter回调函数显示多项数据内容
                            var htmlStr = '';
                            for(var i=0;i<params.length;i++){
                                var param = params[i];
                                var xName = param.name; // x轴的名称
                                var seriesName = param.seriesName; // 图例名称
                                var value = param.value; // y轴值
                                var color = param.color; // 图例颜色
                                                    
                                if(i===0){
                                    htmlStr += xName + '<br/>';//x轴的名称
                                }
                                htmlStr +='<div>';
                                //为了保证和原来的效果一样，这里自己实现了一个点的效果
                                htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color+';"></span>';
                                                    
                                // 文本颜色设置--(需要设置,请解注释下面一行)
                                // htmlStr += '<span style="color:'+color+'">';
                                                    
                                // 圆点后面显示的文本
                                htmlStr += seriesName + '：' + value  + '&nbsp&nbsp&nbsp' + alarmTime;
                                                    
                                // 文本颜色设置--(需要设置,请解注释下面一行)
                                // htmlStr += '</span>';
                                                    
                                htmlStr += '</div>';
                            }
                            return htmlStr;
                        }
                        
                    },
                    color: ['HotPink','DeepSkyBlue','LawnGreen','Gold'], // 图例及线条的颜色
                    /* 设置图例样式 */
                    legend: {
                        left: 'right', // 位置
                        padding: [3,60,0,0],
                        icon: "circle", // 形状 类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
                        itemWidth: 10,  // 设置宽度
                        itemHeight: 10, // 设置高度
                        itemGap: 12, // 设置间距
                        data: ['车体振动I位   ', '车体振动II位', '转向架振动I位', '转向架振动II位'],
                        textStyle:{	// 设置图例字体
                            color: '#000000',
                            // fontSize: "15"
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    /*下载功能*/
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        },
                        padding: [0,15,0,0]
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        /* axisLine: { // 改变x轴颜色 默认不写为黑色
                            lineStyle: {
                                color: '#00FFFF',
                                width: 1 // 这里是为了突出显示加上的
                            }
                        }, */
                        data: [ '0s','1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s']
                    },
                    yAxis: {
                        /* axisLine: { // 改变y轴颜色 默认不写为黑色
                            lineStyle: {
                                color: '#00FFFF',
                                width: 1 // 这里是为了突出显示加上的
                            }
                        }, */
                        type: 'value'
                    },
                    series: [
                        {
                            name: '车体振动I位   ',
                            type: 'line',
                            // stack: '加速度',
                            smooth: true,
                            /*lineStyle: {//折线颜色
                            normal: {
                                color: '#00FFFF',
                                width: 2
                            }
                            },*/
                            data: ["-1.02", "-0.84", "-2.66", "-1.23", "0.94", "-0.27", "-0.65", "-3.3", "-0.56", "-1.14"]
                            // data: data.ctzd1
                        },
                    ]
                };
                
                var chart = echarts.init(document.getElementById('echartTable'));
                // 使用刚指定的配置项和数据显示图表。
                chart.setOption(option);
            }
        },
        setup() {
            const data = {
                productInfo: [
                    {name:'设备', src: productSvg},
                    {name: '数据点', src: dataFlowSvg},
                    {name: '触发器', src: flipflopSvg}
                ]
            };
            return {
                ...toRefs(data)
            }
        }
    })
</script>

<style lang='scss' scoped>
    @mixin divider {
        border-left:0.5px solid #ffffff;
        height: 50px;
        flex: 0;
    }
    @mixin fontSize {

    }
    .content {
        display: flex;
        flex-direction: column;
        padding: 10px 15px;
    }
    .row_item {
        @include boxBackground;
        flex: 1;
        margin: 15px;
        padding: 46px 25px;

        & > p {
            font-family: AdobeHeitiStd-Regular;
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 20px;
            letter-spacing: 0px;
            color: #1aa1e6;
        }
        & .el-divider--horizontal {
            border-top:1px solid #eef5ff;
            width: 85%;
        }
        & > .row_item_content {
            margin-top: 50px;
            margin-right: 30px;
            display: flex;
            flex-direction: row;
            font-family: SourceHanSansCN-Medium;
            font-size: 31px;
            text-align: center;
            font-weight: bold;
            font-stretch: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: #1aa1e6;
            & > div {
                flex:1;
            }
            & > .el-divider--vertical {
                @include divider
            }   
            & > div > p:nth-child(2) {
                font-size: 14px;
                color: #ffffff;
            }
        }

    }
    .row_first {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        width: 100%;
       
        & > .row_item_title {
            margin-bottom: 23px;
        }
    }
    .row_second {
        display: flex;
        margin-top: 4px;
        height: 303px;
        font-family: SourceHanSansCN-Medium;
        font-weight: bold;
        font-stretch: normal;
        line-height: 30px;
        letter-spacing: 0px;
        color: #1aa1e6;
        & > button {

        }

        & > .row_second_item {
            padding: 67px 56px;
            margin: 15px;
            box-sizing: border-box;
            flex-basis: 50%;
            max-width: 50%;
            @include boxBackground;
            display: flex;
            margin-right: 15px;
            & > div {
                flex-basis: 25%;
                max-width: 25%;
                
            }
            & > div:nth-of-type(1) {
                font-size: 0.2rem;
                text-align: center;
            }
            & > div:nth-of-type(3), div:nth-of-type(4) {
                text-align: center;
                & > p:nth-of-type(1) {
                   font-size: 30px;
                    margin-bottom: 10px;
                }
                & > p:nth-of-type(2) {
                   font-size: 14px;
                   color: #ffffff;
                }
            }
            & >:nth-child(2) 
            ,:nth-child(3) 
            ,:nth-child(4) 
            ,:nth-child(5) 
            ,:nth-child(6){
                margin-top:50px;
            }

        }
        
        & .el-button {
            background-color: #1aa1e6;
	        border-radius: 2px ;
            color: white;
            margin-left: 10px;
            margin-bottom: 10px;
        }
        & .el-divider--vertical {
            border-left: 1px solid #e5e5e5;
            height: 38px;
        }

        .row_second_item_2 {
            flex-basis: 50%;
            max-width: 50%;
            @include boxBackground;
            padding: 67px 56px;
            margin: 15px;
            display: flex;
            box-sizing: border-box;
            flex-direction: row;
            & > div {
                flex-basis: 33.33333%;
                flex-grow: 0;
                max-width: 33.333333%;
                margin-top: 45px;
                & > p:nth-child(1) {
                    font-size: 24px;
                    color: #ffffff;
	                opacity: 0.7;
                    margin-bottom: 20px;
                    text-align: center;
                }
                & > button  {
                    display: block;
                    margin: 0 auto;
                }
            }
            & > span {
                margin-top: 45px;
            }
        }
    }
    .row_table {
         @include boxBackground;
        margin: 15px;
        height: 369px;
        
    }
</style>