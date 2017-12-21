<template>
  <div id="app" style="height:100%">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      ></x-header>
       <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">  
        <router-view class="router-view"></router-view>
       </transition> 
    </view-box>
  </div>
</template>

<script>
import {ViewBox, XHeader} from 'vux'
export default {
  name: 'app',
  components:{
    ViewBox,XHeader
  },
  data() {
    return {
      activeTab: 0,
      direction: 'forward'
    }
  },
  methods: {
    // 路由到首页
    index() {
      this.$router.push('first');
      this.activeTab = 0;
    },
    // 路由到个人中心
    personalCenter() {
      this.$router.push('personalCenter');
      this.activeTab = 2;
    }
  },

  computed: {
    getHomeImg() {
      return this.activeTab === 0 ? "./static/img/index1.png" : "./static/img/index.png"
    },
    getPersonImg() {
      return this.activeTab === 2 ? "./static/img/personCenter1.png" : "./static/img/personCenter.png"
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  transform: translate3d(0px, 0px, 0px);
  -webkit-overflow-scrolling: touch;
}
.router-view {
  width: 100%;
  top: 46px;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
