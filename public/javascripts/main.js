import $ from "../bower_components/jquery/dist/jquery.min.js";
import header from "../htm/common/header.html";
/*加载bootstrap样式*/
require("../bower_components/bootstrap/dist/css/bootstrap.min.css");
require("../bower_components/bootstrap/dist/css/bootstrap-theme.min.css");
/*结束*/

$(document).ready(function(){
	/*添加头部*/
	var head = document.getElementById("header");
	head.innerHTML = header;
})