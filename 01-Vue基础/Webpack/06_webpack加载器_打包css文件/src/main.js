// 1.yarn add jquery
// 2.public/indexedDB,html -10个li
// 3. 入口处引入jQuery
import $ from 'jquery'
// 4.编写隔行变色的代码
$('#myUL>li:odd').css('color', 'red');
$('#myUL>li:even').css('color', 'purple');

// 5.引入css文件
import "./css/index.css"