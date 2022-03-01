<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader></TodoHeader>
    <TodoMain :arr="list"></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import "./styles/base.css"
import "./styles/index.css"
    
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";


export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
//   2. 目标：铺设代办任务

  data(){
      return{
          list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 201, name: "睡觉", isDone: false },
        { id: 103, name: "打豆豆", isDone: true },
      ],
      }
  }
};
</script>