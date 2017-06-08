$(".icon").click(function(){
	location.href = 'zhuce1.html';
})
var mm = /^[\w]{6,12}$/;
$(".nmb").blur(function(){
	if($('.nmb').val() == ''){
		alert("请设置密码");
		$(".next-step .text").css({'background' : '#d2d2d2'});
	}else if(!mm.test($('.nmb').val())){
		alert("请设置正确的密码格式：字母、数字、下划线");
		$(".next-step .text").css({'background' : '#d2d2d2'});
	}else{
		$(".next-step .text").css({'background' : '#ff205c'});
	}
})
$(".next-step .text").click(function(){
	if(mm.test($('.nmb').val())){
		location.href = 'denglu.html';
	}else{	
		alert("请设置正确的密码");
	}
})