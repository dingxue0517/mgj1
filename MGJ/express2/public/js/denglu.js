var s1 = 0;
var s2 = 0;
var s3 = 0;
var zz = /^1[34578]\d{9}$/;

$('.nmb').blur(function(){
	if($('.nmb').val() == ''){
		alert('请输入手机号！');
		s1=0;
	}else if(!zz.test($('.nmb').val())){
		alert('请输入正确手机号！');
		s1=0;
	}else{
		s1=1;
	}
})

var mm = /^[\w]{6,12}$/;
$(".nmb1").blur(function(){
	if($('.nmb1').val() == ''){
		alert("请设置密码");
		$(".next-step .text").css({'background' : '#d2d2d2'});
		s2 = 0;
	}else if(!mm.test($('.nmb1').val())){
		alert("请设置正确的密码格式：字母、数字、下划线");
		$(".next-step .text").css({'background' : '#d2d2d2'});
		s2 = 0;
	}else{
		s2 = 1;
	}
})


var a= Math.floor(Math.random()*10)+''+
		Math.floor(Math.random()*10)+''+
		Math.floor(Math.random()*10)+''+
		Math.floor(Math.random()*10);
$(".yzm").click(function(){		
		$(".yanzm").text(a);
		$(".yan").blur(function(){
			if($(".yan").val()==''){
				alert("请输入验证码！");
				s3 = 0;
			}else if($(".yan").val()!== a){

				alert('请输入正确的验证码！');
				s3 = 0;
			}else{
				s3 = 1;
			}
		})
	})
var status=true;
var i=10;
var set;
$(".yzm").click(function(){
	if(status){
		time();
		status=false;
	}
})
function time(){
            set=setInterval(function(){
            if(i>0){
                i--;
                $(".yzm").text(i+''+'s');
            }else{
                i=10;
                clearInterval(set);
                $(".yzm").text("点击重新发送");

                status=true;
            }
        },1000);
        }
$(".yan").blur(function(){
	if(s1==1 && s2==1 && s3==1){
	$(".next-step .text").css({'background' : '#ff205c'});
}else{
	$(".next-step .text").css({'background' : '#d2d2d2'});
}
})


$(".style,.style1,.style2,.style3").click(function(){
	location.href = "zhuce1.html";
})
$(".next-step .text").click(function(){
	if(s1==1 && s2==1 && s3==1){
	$(".next-step .text").css({'background' : '#ff205c'});
	location.href = "index.html";	
	}else{
		alert('请填写完整信息');
	}
	
})
var status=0;
$(".icon1").click(function(){
	if(status==0){
		$('.menu').show();
		status=1;
	}else{
		$('.menu').hide();
		status=0;
	}	
})
$(".menu .mima .text").click(function(){
	location.href = "zhaohuimima.html";
})
