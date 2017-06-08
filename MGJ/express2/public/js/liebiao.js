$(".top .menu .menu1 .text").eq(0).addClass("h");
$(".top .menu .menu1 .text").click(function(){
	$(this).addClass("h").parent(".top .menu .menu1").siblings(".top .menu .menu1").children(".top .menu .menu1 .text").removeClass("h");
})	
var content = [
	{
		src:"2.png",
		nat1:"良品",
		nat2:"蜜妃儿",
		nat3:"雪纺衬衫",
		nat4:"韩范",
		nat5:"五分袖",
		nat6:"条纹",
		nat7:"系带",
		yuanjia:"￥65.66",
		discount:"2276",
		star:"&#xe71f",
	},
	{
		src:"2.png",
		nat1:"良品",
		nat2:"蜜妃儿",
		nat3:"雪纺衬衫",
		nat4:"韩范",
		nat5:"五分袖",
		nat6:"条纹",
		nat7:"系带",
		yuanjia:"￥65.66",
		discount:"2276",
		star:"&#xe71f",
	},
	{
		src:"3.png",
		nat1:"良品",
		nat2:"蜜妃儿",
		nat3:"雪纺衬衫",
		nat4:"韩范",
		nat5:"五分袖",
		nat6:"条纹",
		nat7:"系带",
		yuanjia:"￥65.66",
		discount:"2276",
		star:"&#xe71f",
	},
	{
		src:"4.png",
		nat1:"良品",
		nat2:"蜜妃儿",
		nat3:"雪纺衬衫",
		nat4:"韩范",
		nat5:"五分袖",
		nat6:"条纹",
		nat7:"系带",
		yuanjia:"￥65.66",
		discount:"2276",
		star:"&#xe71f",
	},
	{
		src:"5.png",
		nat1:"良品",
		nat2:"蜜妃儿",
		nat3:"雪纺衬衫",
		nat4:"韩范",
		nat5:"五分袖",
		nat6:"条纹",
		nat7:"系带",
		yuanjia:"￥65.66",
		discount:"2276",
		star:"&#xe71f",
	},

]


function fun(all){
	var cc = '<div class="shop">'
	+'<div class="pic">'+'<img src='+all.src+' alt="" width="100%" >'+'</div>'
		+'<div class="nature">'
			+'<span class="nat1">'+all.nat1+'</span>'
			+'<span class="nat2">'+all.nat2+'</span>'
			+'<span class="nat3">'+all.nat3+'</span>'
			+'<span class="nat4">'+all.nat4+'</span>'
			+'<span class="nat5">'+all.nat5+'</span>'
			+'<span class="nat6">'+all.nat6+'</span>'
			+'<span class="nat7">'+all.nat7+'</span>'
			+'</div>'
			+'<div class="price">'
			+'<b class="yuanjia">'+all.yuanjia+'</b>'
			+'<span class="discount">'+all.discount+'</span>'
			+'<span class="star">'+all.star+'</span>'
			+'</div>'
		+'</div>'
	return cc;
}

function initPage(content){
		$.each(content,function(key,val){
		$(".con").append(fun(val));
	})
}

initPage(content);

