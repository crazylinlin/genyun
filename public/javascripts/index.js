/*导入jquery*/
import $ from "../bower_components/jquery/dist/jquery.min.js";
/*加载轮播控制脚本*/
import carousel from  '../bower_components/bootstrap/js/carousel.js';
/*导入课程项目模版*/
import item from "../htm/common/item.html";
/*加载首页样式*/
require("../stylesheets/index.css");
/*结束*/

$(document).ready(function(){
	/* start 添加推荐以及分类课程 */
	/*var recommendOfCur = document.getElementById("recommendOfCur");
	var classifyOfCur = document.getElementById("classifyOfCur");*/
	var str = " ";
	for(var i=0; i<4; i++){
		str += item;
	}
	$("#recommendOfCur").html(str);
	$(".classifyOfCur").html(str);
	/*end 添加推荐以及分类课程*/
})