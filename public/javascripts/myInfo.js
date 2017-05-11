import $ from "../bower_components/jquery/dist/jquery.min.js";
import uploadPre from "./common/uploadPre.js";

require("../stylesheets/vip/myInfo.css");

$(document).ready(function(){
	$(".num-input").on("focus",function(){
		var $preWrap = $(this).parent();
		if(!$preWrap.hasClass("warning") && !$preWrap.hasClass("show-shadow")){
			$preWrap.addClass("show-shadow").siblings(".content-item").removeClass("show-shadow");
		}
	})

	$(".num-input").on("blur",function(){
		var $preWrap = $(this).parent();
		if($preWrap.hasClass("show-shadow")){
			$preWrap.removeClass("show-shadow");
		}
	})
})