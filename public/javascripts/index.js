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
	var recommendOfCur = document.getElementById("recommendOfCur");
	var classifyOfCur = document.getElementById("classifyOfCur");
	var str = "";
	for(var i=0; i<4; i++){
		str += item;
	}
	recommendOfCur.innerHTML = str;
	classifyOfCur.innerHTML = str;
	/*end 添加推荐以及分类课程*/
	/*start 点击登录，注册按钮打开模态框*/
	$(document).delegate("#login,#register","click",function(){
		layer.open({
			type:1,
			title:false,
			closeBtn:0,
			shadeClose:true,
			content:$('#login-a-reg'),
			skin:"",
			area:['604px','380px'],

		});
	})
	/*end 点击登录，注册按钮打开模态框*/
	/*start 模态框登录和注册的切换*/
	$(".dialog-tabs").delegate("#btn-login,#btn-register","click",function(){
		var $this = $(this);
		var id = $this.data("id").toUpperCase();
		if(!$this.hasClass("active")){
			$this.addClass("active").parent().siblings().children("a").removeClass("active");
			switch(id){
				case "LOGIN":
						$(".register-content").animate({"left":"604px"},500,function(){
							$(".login-content").animate({"left":"0px"},500);
						})
					break;
				default:
						$(".login-content").animate({"left":"-604px"},500,function(){
							$(".register-content").animate({"left":"0px"},500);
						})
				;
			}
		}
	})
	/*end 模态框登录和注册的切换*/
})