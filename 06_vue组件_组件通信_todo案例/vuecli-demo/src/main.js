import Vue from 'vue' //引入vue对象，类似于<script src="vue.js"></script>
import App from "./App.vue"


Vue.config.productionTip = false //在控制台有一句提示消息

// 目标：组件基本使用-全局注册
// 1.创建组件-文件名.Vue
// 2.引入组件
import Panner from './components/Pannel_1'
// 3.全局-注册组件
// 语法：Vue.component("Pannel",Panner);
Vue.component('PannelG', Panner);

new Vue({ //开始实例化vue
        render: h => h(App), //准备渲染App页面
    }).$mount('#app') //渲染到index.html文件里id叫app的标签