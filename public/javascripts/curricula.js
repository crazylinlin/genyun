import $ from "../bower_components/jquery/dist/jquery.min.js";
import all from "../htm/common/item_study.html";
import sponsor from "../htm/common/item_sponsor.html";
import favorite from "../htm/common/item_favorite.html";

require("../stylesheets/vip/curricula.css");

$(document).ready(function(){

	/*start 加入初始化测试数据*/
	var str_all="",str_sp="",str_fvr="";
	for(var i=0; i<12; i++){
		str_all += all;
		str_sp += sponsor;
		str_fvr += favorite;
	}
	$("#all-course").html(str_all);
	$("#sponsor-course").html(str_sp);
	$("#favorite-course").html(str_fvr);
	/*end 加入初始化测试数据*/

	$(".control-tabs").delegate("li","click",function(){
		if(!$(this).hasClass("actived")){
			$(this).addClass("actived").siblings().removeClass("actived");
			$(".course-container").find("div[data-role="+$(this).data("target")+"]").fadeIn().siblings(".flag-course").fadeOut();
		}
	})
})