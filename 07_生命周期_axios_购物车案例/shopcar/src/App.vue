<template>
  <div>
    <MyHeader background="red" title="购物车案例"></MyHeader>
    <MyGoods></MyGoods>
    <MyFooter></MyFooter>
  </div>
</template>
<script>

import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyGoods from './components/MyGoods.vue'
export default {
components:{
  MyHeader,
  MyFooter,
  MyGoods
}
  
}
</script>
<style lang="">
  
</style>