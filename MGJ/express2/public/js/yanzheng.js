$(".icon").eq(0).click(function(){
	location.href = "zhaohuimima.html";
})
var status=true;
var i=60;
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
			}
		})
	})

$(".next-step .text").click(function(){
	if($(".yan").val()==a){
		location.href = "xiugai.html";
	}else{
		alert("填写完整信息")
	}
})