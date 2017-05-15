import $ from "../bower_components/jquery/dist/jquery.min.js";
import appendInfo from "./common/appendInfo.js";

require("../stylesheets/vip/lecturer.css");

$(document).ready(function(){
	$(".tabs-wrap").delegate("li","click",function(){
		var role = $(this).data("target");
		if(!$(this).hasClass("actived")){
			$(this).addClass("actived").siblings().removeClass("actived");
			$(".flag-level").filter("[data-role="+role+"]").fadeIn().siblings(".flag-level").fadeOut();
		}
	})
})