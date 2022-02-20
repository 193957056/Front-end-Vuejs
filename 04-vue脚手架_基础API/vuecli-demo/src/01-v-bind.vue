<template>
  <div>
<!-- v-bind -->
<a v-bind:href="url">我是a标签</a>
<img :src="imgUrl">
  </div>
</template>

<script>
export default {
  // 1.变量在data函数return的对象上
data(){
  return{
    url:"www.baidu.com",
    imgUrl:"https://img95.699pic.com/photo/50136/1351.jpg_wh300.jpg"
  }
}
}
</script>

<style>

</style>