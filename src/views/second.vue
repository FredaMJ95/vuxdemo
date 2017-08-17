<template>
    <div>
        <group>
            <x-input title="name" v-model="name"></x-input>
            <x-input title="age" v-model="age"></x-input>
            <x-input title="address" v-model="address"></x-input>
        </group>
        <divider>我是分割线</divider>
        <checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
            <checker-item :value="1">白</checker-item>
            <checker-item :value="2">富</checker-item>
            <checker-item :value="3">美</checker-item>
        </checker>
        <input type="text" value="abc"/>
    </div>
</template>
<script>
import { Checker, CheckerItem, Divider } from 'vux';
export default {
    components: {
        Checker, CheckerItem, Divider
    },
    data() {
        return {
            demo1Checkbox: [2, 1],
            name: "啥",
            age: 30,
            address: "北京"
        }
    }
}
</script>

<style scoped>
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  /* font-size:0.5rem; */
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
</style>