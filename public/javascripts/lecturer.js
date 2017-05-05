import $ from "../bower_components/jquery/dist/jquery.min.js";
import info from "../htm/common/info.html";
require("../stylesheets/vip/lecturer.css");

$(document).ready(function(){
	/*start 加入会员信息*/
	$("#info-container").html(info);
	/*end   加入会员信息*/

	$(".tabs-wrap").delegate("li","click",function(){
		var role = $(this).data("target");
		if(!$(this).hasClass("actived")){
			$(this).addClass("actived").siblings().removeClass("actived");
			$(".flag-level").filter("[data-role="+role+"]").fadeIn().siblings(".flag-level").fadeOut();
		}
	})
})