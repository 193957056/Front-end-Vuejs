<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:obj.isDone}" v-for="obj in arr" :key="obj.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="obj.isDone"/>
        <label>{{obj.name}}</label>
        <button class="destroy"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
export default {
    // 2.1 定义props
    props:['arr']
}
</script>