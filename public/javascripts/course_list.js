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
	/*start 鼠标移入移除hide类 */
	$(".all-right").on("mouseover",function(){
		$("ul.free-wrap").hasClass("hide")?$("ul.free-wrap").removeClass("hide"):'';
	})
	/*end 鼠标移入移除hide类*/
	/*start 课程类型的切换*/
	$(".all-right .free-wrap").delegate("a","click",function(){
		var curId = $(this).attr("data-role"),
			curTxt = $(this).text(),
			rplId = $("#showCur").attr("data-role"),
			rplTxt = $("#showCur").text();
		var tempId="",tempTxt="";
		tempId = curId;
		tempTxt = curTxt;
		console.log(rplId);
		$(this).attr("data-role",rplId);
		$(this).text(rplTxt);
		$("#showCur").attr("data-role",tempId);
		$("#showCur").text(tempTxt);
		$(this).parents("ul.free-wrap").addClass("hide");
	})
	/*end 课程类型的切换*/
})

