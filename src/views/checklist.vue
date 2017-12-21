<template>
  <div>
    <checklist title="a" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></checklist>
  </div>
</template>
<script>
import { Checklist } from 'vux'
export default {
  components:{
    Checklist
  },
  methods:{
    change(){
      console.log("changed");
    }
  },
  data(){
    return{
      labelPosition: '',
      commonList: [ 'China' ],
      checklist001: [],
    }
  }
  
}
</script>

