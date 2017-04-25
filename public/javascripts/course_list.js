import $ from "../bower_components/jquery/dist/jquery.min.js";
import item from "../htm/common/item.html";
/*加载课程列表样式*/
require("../stylesheets/course_list.css");

$(document).ready(function(){

	/*start 向容器中添加课程*/
	var course = document.getElementById("course-wrap");
	var str = ""
	for(var i=0; i<8; i++){
		str += item;
	}
	course.innerHTML = str;
	/*end 向容器中添加课程*/
})

