<template>
<div>
  <!--轮播图  -->
        <swipers></swipers>
        <!--导航栏  -->
        <navigation></navigation>
        <!--推荐楼盘-->
        <div class='addCustomer' v-on:click="addNewHouse">
            <span>
                <img src='../../static/img/smallBuild.png' style="height:70%;margin-left:1rem;" />
            </span>
            <span style="font-size:0.7rem;line-height:50px;margin-left:0.5rem;">推荐楼盘</span>
        </div>
        <!-- 跳转链接 -->
        <flexbox>
            <flexbox-item>
                <div class="flex-demo">
                    <img class="navigation_img1" src='../../static/img/hotbuilding.png' />
                </div>
            </flexbox-item>
        </flexbox>
        <flexbox class="bottom-margin">
            <flexbox-item>
                <div class="flex-demo">
                    <img class="navigation_img1" src='../../static/img/qualityHouse.png' />
                </div>
            </flexbox-item>
        </flexbox>
        <!--签到图标-->
        <div class='signo'></div>
        <!--搜索部分  -->
        <!-- <div class="searchDiv">
                               <group>   
                                <selector placeholder='北京' :options="list" v-model="defaultValue" class='selectOptions'></selector>
                                <x-input  placeholder="请输入关键字搜索"></x-input>
                              </group>  
                        </div> -->
        <!--底部导航栏  -->
        </div>
</template>

<script>
import swipers from '../components/Swiper';//引入轮播图组件
import navigation from '../components/navigation'//引入导航栏
// import{ViewBox} from 'vux'
export default {
     components: {
        swipers,
        navigation,
        // ViewBox
    },
    data() {
        return {
            defaultValue: '',
         
        }
    },
    methods: {
        //推荐楼盘的点击事件
        addNewHouse() {
            window.location.href = "https://www.guoanfamily.com/agent2_1/v-v52-zh_CN-/agentchannel_review/index/index/index.w?recomer=recomer&language=zh_CN&5="
       },
    }
}
</script>

<style lang='less'>
  @import '~vux/src/styles/1px.less';
.flex-demo {
    text-align: center;
    color: #333333;
    background-color: #fff;
    border-radius: 4px;
    background-clip: padding-box;
}

.addCustomer {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid #e6e6e6;
}

.addCustomer span {
    display: block;
    float: left;
    height: 100%;
    line-height: 2.6rem;
}

.signo {
    position: fixed;
    top: 60%;
    right: 0;
    width: 5rem;
    height: 2.3rem;
    background: url('../../static/img/sign.png') no-repeat;
    background-position: right;
    background-size: 70%;
}

.searchDiv {
    position: absolute;
    top: 0.2rem;
    width: 100%;
    height: 1.5rem; // background:red;
}

.selectOptions {
    width: 25%;
    background: #fff;
    height: 100%;
    font-size: 0.7rem;
    margin-left: 1rem;
    float: left;
}

.bottom-margin {
    margin-bottom: 53px;
}
</style>
