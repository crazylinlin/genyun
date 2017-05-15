import $ from "../bower_components/jquery/dist/jquery.min.js";
import appendInfo from "./common/appendInfo.js";
import uploadPre from "./common/uploadPre.js";


require("../stylesheets/vip/lecturer_ae.css");

$(document).ready(function(){
	/*start 添加讲师*/
	var i = 1;
	$(".add-lecturer").on("click",function(){

		layer.confirm("确定添加讲师!")
			i++;
			var $lecturer = $("#lecturer").clone();
			$lecturer.find("input[type='text']").attr("name","nameOf-"+i);
			$lecturer.find("input[type='file']").attr('name','imageOf-'+i);
			$lecturer.find("textarea").attr("name","detailOf-"+i);
		$(this).parent().before($lecturer);
	})
	/*end 添加讲师*/
	/*start 添加课程以及新增课时切换*/
	$(".link-tabs").delegate(".tab-li","click",function(){
		if(!$(this).hasClass("actived")){
			var target = $(this).data("target");
			$(this).addClass("actived").siblings().removeClass("actived");
			$(".ae-content").find("[data-role="+target+"]").fadeIn().siblings().fadeOut();
		}
	})
	/*end 添加课程以及新增课时切换*/
})