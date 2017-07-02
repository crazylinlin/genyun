import $ from "../bower_components/jquery/dist/jquery.min.js";
import header from "../htm/common/header.html";
import dialog from "../htm/common/loginAndReg.html";
//导入二维码支付模版
import qrcode from "../htm/common/qrCode.html";
//导入订单支付模版
import order from "../htm/common/order.html";
/*加载bootstrap样式*/
require("../bower_components/bootstrap/dist/css/bootstrap.min.css");
require("../bower_components/bootstrap/dist/css/bootstrap-theme.min.css");
/*结束*/

$(document).ready(function(){
	/*start 添加头部*/
	//var head = document.getElementById("header");
	//var cur_dialog = document.getElementById("dialog-container");
	$("#header").html(header);
	/*end 添加尾部*/
	/*start 添加登录以及注册对话框*/
	$("#dialog-container").html(dialog);
	/*end 添加登陆一集注册对话框*/
	/*start 点击登录，注册按钮打开模态框*/
	//window.index = ""; //弹出框的索引；
	$(document).delegate("#login,#register","click",function(){
		/*通过role判断用户点击的是注册还是登录按钮*/
		var role = $(this).data("role");
		window.index = layer.open({
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
	$(document).delegate(".close-btn","click",function(){
		layer.close(window.index);
	})
	/*end 右上角关闭按钮事件，点击关闭模态框*/
	/*start 当页面需要二维码支付时导入二维码组件*/
	//codePay-container 为容器id
	$("#codePay-container").html(qrcode);
	/*end 当页面需要二维码支付时导入二维码组件*／
	/*start 当页面需要生成订单页面时导入订单组件*/
	$("#order-container").html(order);
	$("#topup-container").html(order);
	/*end 当页面需要生成订单页面时导入订单组件*/

	/*start 支付方式选择*/
	$(document).delegate(".pay-type","change",function(){
		var $this = $(this),
			$tpWrap = $(this).parent();
		if(this.checked && !$tpWrap.hasClass("type-selected")){
			$tpWrap.addClass("type-selected").siblings().removeClass("type-selected");
			var $qrWrap = $(".qr-wrap"),
				$orderType = $(".order-type");
				/*当选择微信支付时弹出二维码并且调整相关样式，否则隐藏二维码*/
			if(this.value == 1){
				$qrWrap.animate({"height":"160px"},function(){
					$orderType.animate({"margin-bottom":"0px"},500);
				});
			}else{
				$qrWrap.animate({"height":"0px"},700,function(){
					$orderType.animate({"margin-bottom":"60px"},1000);
				});
			}
		}
	})
	/*end 支付方式选择*/
	/*start 忘记密码*/
	$(document).delegate("#forget-password","click",function(){
		layer.close(window.index);
		window.index = layer.open({
			type:1,
			title:false,
			closeBtn:0,
			shadeClose:true,
			content:$('#find-password'),
			skin:"",
			area:['604px','380px'],
			success:function(layero,index){
				//$("#btn-"+role).trigger("click");
			},
			end:function(){
				$("div#find-password").css("display","none");
			}
		})
	})
	/*end   忘记密码*/
})