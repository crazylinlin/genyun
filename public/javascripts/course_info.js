import $ from "../bower_components/jquery/dist/jquery.min.js";
//require("../bower_components/bootstrap-star-rating/css/star-rating.min.css");

require("../stylesheets/course_info.css");
$(document).ready(function(){
	/*讲师的信息全部显示或缩略显示，modified by xuwl：2017/／11/12/00:25*/
	$(".user-info").hover(function(){
		var curHeight = $(this).height(),
			autoHeight = $(this).css('height','auto').height();
		$(this).height(curHeight).animate({"height":autoHeight},500);
	},function(){
		$(this).animate({"height":"120px"});
	})
})