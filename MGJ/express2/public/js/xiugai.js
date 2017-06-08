var mm = /^[\w]{6,12}$/;
var a;
$(".nmb").blur(function(){
	if($('.nmb').val() == ''){
		alert("请设置密码");
	}else if(!mm.test($('.nmb').val())){
		alert("请设置正确的密码格式：字母、数字、下划线");
	}else{
		 a = $(".nmb").val();
	}
})
$(".nmb1").blur(function(){
	if($(".nmb1").val()!==a){
		alert("您输入的密码与设置的不匹配！")
	}
})
$(".next-step .text").click(function(){
	if($(".nmb1").val()==a && mm.test($('.nmb').val())){
		location.href = "denglu.html";
	}else{
		alert("填写完整信息");
	}
})