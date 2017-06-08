var zz = /^1[34578]\d{9}$/;

$('.nmb').blur(function(){
	if($('.nmb').val() == ''){
		alert('请输入手机号！')
	}else if(!zz.test($('.nmb').val())){
		alert('请输入正确手机号！')
	}else{
		alert('号码正确！')
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
				alert("请输入验证码！")
			}else if($(".yan").val()!== a){

				alert('请输入正确的验证码！');
			}else{
				alert("验证码正确！")
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
$(".next-step .text").click(function(){
	if($(".yan").val()==a && zz.test($('.nmb').val())){
		location.href = "zhuce2.html";
	}else{
		alert("填写完整信息")
	}
})