import $ from "../bower_components/jquery/dist/jquery.min.js";

require("../stylesheets/vip/toBeLecturer.css");


$(document).ready(function(){
	/*start 类型选择，是个人用户还是团队 
	0表示个人用户
	1表示团队用户
	*/
	$(".typeSelect").on("change",function(){
		 var val = this.value;
		 switch(val){
		 	case "0":
		 		$("#label-name").text("姓名");
		 		$("#pic-name").text("身份证扫描件");
		 		$(".item-team").hide().siblings(".images-item").show();
		 		break;
		 	case "1":
		 		$("#label-name").text("团体名称");
		 		$("#pic-name").text("团队营业执照");
		 		$(".item-personal").hide();
		 		$(".item-team").show();
		 		break;
		 	default:;
		 }
	})
	/*end 类型选择，是个人用户还是团队*/
})