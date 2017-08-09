<template>
  <div>
    <swiper loop auto
    :list="demo06_list"
    :index="demo06_index"
    dots-position="center"
    height="8rem"
    @on-index-change="demo06_onIndexChange"></swiper>
  </div>
</template>
<script>
  import { Swiper, SwiperItem } from 'vux'
  export default{
    components: {
        Swiper,
        SwiperItem
      },
    data(){
      return{
        baseList: [{
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          // title: '送你一朵fua'
          }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
          }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          // title: '送你一次旅行'
          }],
          urlList:[],
          demo06_list: [],
          demo06_index: 0,
      }
    },
    methods:{
      demo06_onIndexChange (index) {
        this.demo06_index = index
      }
    },
    mounted(){
       this.urlList = this.baseList.map((item, index) => ({
          url: 'http://m.baidu.com',
          img: item.img,
          // title: `(可点击)${item.title}`
      }))
      this.demo06_list = this.urlList;
    }
  }
</script>
<style lang='less'>
  .copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}


</style>
