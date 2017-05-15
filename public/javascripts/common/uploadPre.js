import $ from "../../bower_components/jquery/dist/jquery.min.js";


$(document).ready(function(){
	$(document).delegate(".upload-file","change",function(){
		var _this = this,
			$wrap = $(this).prev(".images-wrap");
		Preview(_this,$wrap);
	})
})

/*start 图片上传预览*/
function Preview(file,$wrap){
	if(file.files && file.files[0]){
		var reader = new FileReader();
		reader.onload = function(event){
			var content = '<img alt="图片" src="'+event.target.result+'"/>';
			$wrap.html(content);
		}
		reader.readAsDataURL(file.files[0]);
	}else{
		$wrap.html('<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>');  
	}
}
/*end 图片上传预览*/