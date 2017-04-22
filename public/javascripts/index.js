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
	var index = ""; //弹出框的索引；
	$(document).delegate("#login,#register","click",function(){
		/*通过role判断用户点击的是注册还是登录按钮*/
		var role = $(this).data("role");
		index = layer.open({
			type:1,
			title:false,
			closeBtn:0,
			shadeClose:true,
			content:$('#login-a-reg'),
			skin:"",
			area:['604px','380px'],
			success:function(layero,index){
				$("#btn-"+role).trigger("click");
			},
			end:function(){
				$("div#login-a-reg").css("display","none");
			}
		});
	})
	/*end 点击登录，注册按钮打开模态框*/
	/*start 模态框登录和注册的切换*/
	$(".dialog-tabs").delegate("#btn-login,#btn-register","click",function(){
		var $this = $(this);
		var id = $this.data("id").toUpperCase();
		if(!$this.hasClass("active")){
			$this.addClass("active").parent().siblings().children("a").removeClass("active");
			var $reg = $(".register-content"),
				$log = $(".login-content");
			switch(id){
				case "LOGIN":
					/*防止用户点击过快切换动画执行异常,作调整*/
					if($reg.is(":animated") || $log.is(":animated")){
						$reg.stop(true,true).fadeOut("normal",function(){
							$log.css({"left":"0px"});
						});
						$log.stop(true,true);
					}else{
						$reg.fadeOut("normal",function(){
							$log.animate({"left":0},500);
						})
					}	
					break;
				default:
					/*防止用户点击过快切换动画执行异常,作调整*/
					if($reg.is(":animated") || $log.is(":animated")){
						$log.stop(true,true).animate({"left":"-604px"},500,function(){
							$reg.fadeIn();
						});
						$reg.stop(true,true);
					}else{
						$log.animate({"left":"-604px"},500,function(){
							$reg.fadeIn();
						})
					}
						
				;
			}
		}
	})
	/*end 模态框登录和注册的切换*/
	/*start 验证码输入框焦点样式事件*/
	$(".register-content").delegate("#check-num","focus",function(){
		var $this = $(this);
		if(!$this.parent().hasClass("warning") && !$this.parent().hasClass("hover-wrap")){
			$this.parent().addClass("hover-wrap");
		}
	})
	/*end 验证码输入框焦点样式事件*/
	/*start 验证码输入框失去焦点样式事件*/
	$(".register-content").delegate("#check-num","blur",function(){
		var $this = $(this);
		if(!$this.parent().hasClass("warning") && $this.parent().hasClass("hover-wrap")){
			$this.parent().removeClass("hover-wrap");
		}
	})
	/*end 验证码输入框失去焦点样式事件*/
	/*start 点击下一步切换到密码和确认注册页面*/
	$(".register-content").delegate(".btn-next","click",function(){
		var $this = $(this);
		if($this.hasClass("btn-next")){
			$(".level-wrap").animate({"margin-top":"-118px"},500,function(){
				$this.removeClass("btn-next").addClass("btn-register").html("登录");
			})
		}

	})
	/*end 点击下一步切换到密码和确认注册页面*/
	/*start 右上角关闭按钮事件，点击关闭模态框*/
	$("#login-a-reg").delegate("#close-btn","click",function(){
		layer.close(index);
	})
	/*end 右上角关闭按钮事件，点击关闭模态框*/
})