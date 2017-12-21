<template>
    <div style="background:#fff;">
        
        <!--轮播图下面的导航栏  -->
        <flexbox>
            <flexbox-item @click.native="newHouse">
                <div class="flex-demo">
                    <img class="navigation_img" src='../../static/img/newHouse.png' />
                </div>
                <div class="navigation_names">新房</div>
            </flexbox-item>
            <flexbox-item @click.native="secondHouse">
                <div class="flex-demo">
                    <img class="navigation_img" src='../../static/img/secondHouse.png' />
                </div>
                <div class="navigation_names">二手房</div>
            </flexbox-item>
            <flexbox-item @click.native="rentHouse">
                <div class="flex-demo">
                    <img class="navigation_img" src='../../static/img/rentHouse.png' />
                </div>
                <div class="navigation_names">租房</div>
            </flexbox-item>
            <flexbox-item @click.native="showCcenter">
                <div class="flex-demo">
                    <img class="navigation_img" src='../../static/img/ExCnter.png' />
                </div>
                <div class="navigation_names">展示中心</div>
            </flexbox-item>
        </flexbox>
        <flexbox style='padding-bottom:8px;'>
            <flexbox-item @click.native="helpYouFindHouse">
                <div class="flex-demo">
                    <img class="navigation_img" src='../../static/img/helpYouHouse.png' />
                </div>
                <div class="navigation_names">帮你找房</div>
            </flexbox-item>
            <flexbox-item @click.native="mapFindHouse">
                <div class="flex-demo">
                    <img class="navigation_img" src='../../static/img/mapHouse.png' />
                </div>
                <div class="navigation_names">地图找房</div>
            </flexbox-item>
            <flexbox-item @click.native="financeClick">
                <div class="flex-demo">
                    <img class="navigation_img" src='../../static/img/finance.png' />
                </div>
                <div class="navigation_names">金融</div>
            </flexbox-item>
            <flexbox-item @click.native="housePrice">
                <div class="flex-demo">
                    <img class="navigation_img" src='../../static/img/finance.png' />
                </div>
                <div class="navigation_names">房价</div>
            </flexbox-item>
        </flexbox>
        <div style="width:100%;height:0.5rem;background:#f0f0f0;"></div>
        <!--导航栏下面的四个选框  -->
        <flexbox>
            <flexbox-item>
                <div class="flex-demo" style="text-align:right;margin-right:4px;">
                    <img class="navigation_img1" src='../../static/img/bookingRoom.png' />
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo" style="text-align:left;margin-left:4px;">
                    <img class="navigation_img1" src='../../static/img/guoanRoom.png' />
                </div>
            </flexbox-item>
        </flexbox>
        <flexbox>
            <flexbox-item>
                <div class="flex-demo" style="text-align:right;margin-right:4px;">
                    <img class="navigation_img1" src='../../static/img/entursedOwer.png' />
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo" style="text-align:left;margin-left:4px;">
                    <img class="navigation_img1" src='../../static/img/bookingImmediate.png' />
                </div>
            </flexbox-item>
        </flexbox>
        <div style="width:100%;height:0.5rem;background:#f0f0f0;"></div>
    </div>
</template>
<script>
export default {
    name: 'navigation',
    data() {
        return {

        }
    },
    methods: {
        //  新房的点击事件
        newHouse() {
            // let userPhone = 'userPhone';
            let token = 'token'
            if (!(this.getLocalStorage(token))) {
                // window.location.href="https://www.guoanfamily.com/agent2_1";
                this.$router.push('buildList');
            } else {
                this.$router.push('login');
            }
        },
        // 二手房的点击事件
        secondHouse() {
            this.showalert('敬请期待！');
        },
        //租房的点击事件
        rentHouse() {
            this.showalert('敬请期待！');
        },
        // 展示中心的点击事件
        showCcenter() {
            this.showalert('敬请期待！');
        },
        // 帮你找房的点击事件
        helpYouFindHouse() {
            this.showalert('敬请期待！');
        },
        // 地图找房的点击事件
        mapFindHouse() {
            this.showalert('敬请期待！');
        },
        // 金融的点击事件
        financeClick() {
            this.showalert('敬请期待！');
        },
        // 房价的点击事件
        housePrice() {
            this.showalert('敬请期待！');
        },
        // 公共方法
        getLocalStorage(item) {
            let sign = localStorage.getItem(item);
            // console.log(sign);
            if (sign === null || sign === undefined || sign === "null" || sign === "undefined" || sign === "") {
                return true;
            }
        },
        showalert(msg) {
            // 显示
            this.$vux.alert.show({
                title: '提示信息',
                content: msg
            })
        }

    }
}

</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
.flex-demo {
    text-align: center;
    // color: #fff;
    background-color: #fff;
    border-radius: 4px;
    background-clip: padding-box;
}

.navigation_img {
    width: 50%;
    margin-top: 0.5rem;
}

.navigation_names {
    text-align: center;
    width: 100%;
    font-size: 14px;
    background: #fff;
    
}

.navigation_img1 {
    width: 90%;
    margin-top: 0.3rem;
}
</style>