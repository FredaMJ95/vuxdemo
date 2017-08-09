<template>
    <div>
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
            <router-view class="router-view"></router-view>
        </transition>
         <buttonGroup></buttonGroup> 
    </div>
</template>
<script>
import buttonGroup from '../components/buttonGroup'//底部导航栏
export default {
    name: 'index',
    components: {
        buttonGroup
    },
    data() {
        return {
            direction: 'forward'
        }
    },
    methods: {

    }

}
</script>
<style lang="less">
.router-view {
    width: 100%;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%; // top: 46px;
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