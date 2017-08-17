<template>
  <div id="app">
       <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">  
        <router-view class="router-view"></router-view>
       </transition> 
  </div>
</template>

<script>
export default {
  name: 'app',
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
      return this.activeTab === 0 ? "../static/img/index1.png" : "../static/img/index.png"
    },
    getPersonImg() {
      return this.activeTab === 2 ? "../static/img/personCenter1.png" : "../static/img/personCenter.png"
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
.router-view {
  width: 100%;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  // top: 46px;
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
