import $ from  "../bower_components/jquery/dist/jquery.min.js";
import item from "../htm/common/item.html";

require("../stylesheets/special_detail.css");

$(document).ready(function(){
	var str = "";
	for(var i=0; i<4; i++){
		str += item;
	}
	$("#items-one").html(str);
	$("#items-two").html(str);
})

