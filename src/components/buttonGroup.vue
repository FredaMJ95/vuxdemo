<template>
    <div class="buttonGroup">
        <tabbar>
            <tabbar-item @click.native="index">
                <img slot="icon" :src="getHomeImg">
                <span></span>
                <span slot="label" class="tablename">首页</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="../../static/img/onlineSroom.png">
                <span slot="label" class="tablename">在线选房</span>
            </tabbar-item>
            <tabbar-item @click.native="personalCenter">
                <img slot="icon" :src="getPersonImg" style="width:90%;">
                <span slot="label" class="tablename">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            activeTab: 0,
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
            this.$router.push('second');
            this.activeTab = 2;
        }
    },

    computed: {
        // 首页的点击事件
        getHomeImg() {
            return this.activeTab === 0 ? "../static/img/index1.png" : "../static/img/index.png"
        },
        // 个人中心的点击事件
        getPersonImg() {
            return this.activeTab === 2 ? "../static/img/personCenter1.png" : "../static/img/personCenter.png"
        }
    }
}
</script>

<style lang='less'>
@import '~vux/src/styles/reset.less';
body {
    background-color: #fbf9fe;
}

.buttonGroup {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

.tablename {
    font-size: 0.7rem;
}
</style>
