import Vue from 'vue' //引入vue对象，类似于<script src="vue.js"></script>
import App from "./App.vue"
// import App from './01-v-bind.vue' //app.js文件里对象引入过来（vue项目页面入口）
// import App from './02-v-on.vue'

Vue.config.productionTip = false //在控制台有一句提示消息

let a = 10

new Vue({ //开始实例化vue
        render: h => h(App), //准备渲染App页面
    }).$mount('#app') //渲染到index.html文件里id叫app的标签