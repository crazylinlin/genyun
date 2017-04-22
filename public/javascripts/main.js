import $ from "../bower_components/jquery/dist/jquery.min.js";
import header from "../htm/common/header.html";
import dialog from "../htm/common/loginAndReg.html";
/*加载bootstrap样式*/
require("../bower_components/bootstrap/dist/css/bootstrap.min.css");
require("../bower_components/bootstrap/dist/css/bootstrap-theme.min.css");
/*结束*/

$(document).ready(function(){
	/*start 添加头部*/
	var head = document.getElementById("header");
	var cur_dialog = document.getElementById("dialog-container");
	head.innerHTML = header;
	/*end 添加尾部*/
	/*start 添加登录以及注册对话框*/
	cur_dialog.innerHTML = dialog;
	/*end 添加登陆一集注册对话框*/
})