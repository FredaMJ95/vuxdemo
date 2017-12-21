<template>
  <div>
    <swiper loop auto :list="demo06_list" :index="demo06_index" dots-position="center" height="8rem" @on-index-change="demo06_onIndexChange" @on-click-list-item="show"></swiper>
    <img class="previewer-demo-img" v-bind:key="index" v-for="(item, index) in baseList" :src="item.src" width="0">
    <div v-transfer-dom>
      <previewer :list="baseList" ref="previewer" :options="options"></previewer>
    </div>
    <div class='bottom' >
      <button @click="goto(1)">click me</button>
    </div>
  </div>
</template>
<script>
import {Previewer, Swiper, SwiperItem, TransferDom } from 'vux'
//import previewer from './previewer'
export default {
  directives: {
    TransferDom
  },
  components: {
    Swiper,
    SwiperItem,
    Previewer
  },
  data() {
    return {     
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      },
      baseList: [{
        url: 'javascript:',
        src: 'https://static.vux.li/demo/1.jpg',
        // title: '送你一朵fua'
      }, {
        url: 'javascript:',
        src: 'https://static.vux.li/demo/2.jpg',
        title: '送你一辆车'
      }, {
        url: 'javascript:',
        src: 'https://static.vux.li/demo/3.jpg',
        // title: '送你一次旅行'
      }],
      urlList: [],
      demo06_list: [],
      demo06_index: 0,
    }
  },
  methods: {
    demo06_onIndexChange(index) {
      this.demo06_index = index
    },
    show (index) {
      this.$refs.previewer.show(2)
    },
    goto(index){
      //this.$refs.previewer.goto(1);
      this.$refs.previewer.photoswipe.goTo(1);
    }
  },
  mounted() {
    this.urlList = this.baseList.map((item, index) => ({
      //url: 'http://m.baidu.com',
      img: item.src,
      // title: `(可点击)${item.title}`
    }))
    this.demo06_list = this.urlList;
  }
}
</script>
<style lang='less'>
.copyright {
  font-size: .75rem;
  color: #ccc;
  text-align: center;
}

.text-scroll {
  border: .0625rem solid #ddd;
  border-left: none;
  border-right: none;
}

.text-scroll p {
  font-size: .75rem;
  text-align: center;
  line-height: 1.875rem;
}

.black {
  background-color: #000;
}

.title {
  line-height: 6.25rem;
  width:5rem;
  text-align: center;
  color: #fff;
}
.bottom{
  position: fixed;
  z-index:2000;
  left: 0;
  bottom: 0;
}
</style>
