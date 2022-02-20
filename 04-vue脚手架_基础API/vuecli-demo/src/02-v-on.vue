<template>
<div>
  <!-- 1.绑定事件 -->
  <p>你要购买商品的数量:{{count}}</p>
  <button v-on:click="count = count +1">+1</button><br>
  <button v-on:click="addFn">+1</button><br>
  <button v-on:click="addCountFn(5)">+5</button><br>
  <button @click="subFn">-1</button>

</div>
  
</template>

<script>
export default {
  // 1.变量在data函数return的对象上
data(){
  return{
    count:1
  }
},
// 2.定义函数
methods:{
  addFn(){
    this.count ++;
  },
  addCountFn(num){
   this.count = this.count + num;
  },
  subFn(){
  this.count--
}
},

}
</script>

<style>

</style>