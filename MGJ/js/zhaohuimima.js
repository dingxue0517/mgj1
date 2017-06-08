$(".icon").eq(0).click(function(){
	location.href = "denglu.html";
})
var zz = /^1[34578]\d{9}$/;

$('.nmb').blur(function(){
	if($('.nmb').val() == ''){
		alert('请输入手机号！')
	}else if(!zz.test($('.nmb').val())){
		alert('请输入正确手机号！')
	}
})
$(".next-step .text").click(function(){
	if(zz.test($('.nmb').val())){
		location.href = "yanzheng.html";
	}else{
		alert("填写正确号码")
	}
})