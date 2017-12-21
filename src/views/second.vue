<template>
    <div>
        <inline-x-number width="50px" @add='add' myprop='abcdefg'></inline-x-number>
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
         <popup-picker :title="title1" :data="list1" v-model="value1"></popup-picker>
    </div>
</template>
<script>
import {PopupPicker, Checker, CheckerItem, Divider,InlineXNumber  } from 'vux';
export default {
    components: {
        PopupPicker,Checker, CheckerItem, Divider,InlineXNumber 
    },
    methods:{
        add(res,name){
            console.log(res,name)
            window.location.href="http://www.baidu.com"
        }
    },
    data() {
        return {
            list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
            value1,
            demo1Checkbox: [2, 1],
            name: "啥",
            age: 30,
            address: "北京"
        }
    },
    created(){
        console.log("created");
        this.name ="校长"
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