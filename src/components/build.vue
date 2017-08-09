<template>
  <div>
    <!--:on-refresh="refresh" :on-infinite="loadMore"接口优化以后绑定到scroll上面  -->
    <scroller>
      <div class="listDiv" style="padding-top:4rem;">
        <ul style="padding-left:0.5rem;">
          <li class="listoLi" :key="index" v-for="(item,index) in list" v-on:click="buildDetial(item.id)">
            <div class='listLeftImg'>
              <img :src='item.thumbnailfilename' />
            </div>
            <div class="listRightDiv">
              <div class='listRightName'>
                <span>[</span>
                <span>{{item.city}}</span>
                <span>]</span>
                <span>{{item.buildname}}</span>
              </div>
              <div class="listRightTagName">
                <ul style="padding:0;">
                  <li :key="index" v-for="(tag,index) in item.tagname">{{tag}}</li>
                </ul>
              </div>
              <div class="addressLocation">
                <div class="listaddress">
                  {{item.houseslocation}}
                </div>
                <div class="addLocation" v-on:click='buildLocation(item.houseslocation,item.city)'></div>
                <div></div>
              </div>
              <div class="listarearegion">
                <span>{{item.arearegion}}</span>
                <span>㎡</span>
              </div>
              <div class="listaverage">
                <span>{{item.averageprice}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </scroller>
    <!-- <template >
          <addLocation v-show="showMap" ></addLocation>
        </template> -->
  </div>
</template>

<script>
export default {
  props: ["child"],
  // components: {addLocation},
  data() {
    return {
      list: [],//楼盘数据
      listArr: [],//楼盘筛选数据
      obj: {},//要传的参数
      //showmin:true,//控制标签的显示隐藏
      showMap: false,
    }
  },
  methods: {
    // 页面数据加载
    onLoade() {
      let onlinestate = '2';
      let post_data = {
        'uid': localStorage.getItem('userID'),
        'onlinestate': onlinestate
      };
      let url = 'https://www.guoanfamily.com/guoanjia2_1/bBuildbaseinfoController.do?aGetBuildListForCust'
      this.axios.post(url, post_data).then(response => {
        if (response.status == 200) {
          debugger;
          // 进行图片路径的拼接
          for (let i = 0; i < response.data.obj.length; i++) {
            response.data.obj[i].thumbnailfilename = this.ImgSrc + response.data.obj[i].thumbnailfilename;
            if (response.data.obj[i].averageprice == '售价待定') {
              response.data.obj[i].averageprice = '售价待定'
            } else if (response.data.obj[i].averageprice.substr(response.data.obj[i].averageprice.length - 2) == '/㎡') {
              response.data.obj[i].averageprice = "¥" + response.data.obj[i].averageprice;
            } else {
              response.data.obj[i].averageprice = "¥" + response.data.obj[i].averageprice + "㎡";
            }
          }
          this.list = response.data.obj;
          this.listArr = response.data.obj;
          this.obj = {
            list: this.list,
            listArr: this.listArr
          }
        }
      }, response => {
        this.showalert(response.data.msg);
      });
    },
    // 楼盘列表的点击事件
    buildDetial(id) {
      
      this.$router.push({ path: 'buildInfor', query: { buildID: id } })
    },
    buildLocation(address, city) {
      this.address.address = address;
      this.address.city = city;
      console.log(this.address);
    }
    // 用于处理下拉刷新和一直加载的事件
    // refresh() {},
    // loadMore() {}
  },
  created() {
    this.onLoade();
  },
  // 监听
  watch: {
    list() {
      this.$emit('receive', this.obj);
    },
    child() {
      this.list = this.child;
    },


  }
}
</script>
<style lang='less'>
ul li {
  list-style-type: none;
}

.listoLi {
  width: 100%;
  height: 100px;
}

.listoLi .listLeftImg {
  float: left;
  width: 35%;
}

.listoLi .listLeftImg img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.listoLi .listRightDiv {
  width: 62%;
  float: right;
  text-align: left;
  position: relative;
}

.listRightName {
  font-size: 0.65rem;
}

.listRightTagName {
  font-size: 0.6rem;
  width: 100%;
  height: 0.7rem;
  line-height: 0.8rem;
  color: #de0319;
  text-align: left;
  margin-top: 0.1rem;
  li {
    float: left;
    border: 1px solid #de0319;
    border-radius: 3px;
    height: 0.6rem;
    font-size: 0.4rem;
    line-height: 0.7rem;
    margin-right: 0.5rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
}

.addressLocation {
  .listaddress {
    font-size: 0.6rem;
    float: left;
    width: 70%;
    height: 1rem;
    line-height: 1rem;
    text-align: left;
    font-size: 0.5rem;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .addLocation {
    width: 30%;
    float: right;
    background: url('../../static/img/dingwei.png') no-repeat;
    background-size: 23%;
    background-position: center;
    height: 1rem;
  }
}


.listarearegion {
  font-size: 0.6rem;
  width: 70%; // height: 1rem;
  // line-height: 1rem;
  text-align: left;
  font-size: 0.5rem;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.listaverage {
  // background: red;
  position: absolute;
  right: 1rem;
  bottom: 0;
  color: #eec068;
  font-size: 0.6rem;
  font-weight: bold;
}
</style>
