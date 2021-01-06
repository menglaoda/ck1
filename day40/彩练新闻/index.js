$(function(){
	$(".start").click(function(){
		$(".page1").hide();
		$(".page2").show();
	})
	//点击活动规则
	$(".hdgz").click(function(){
		$(".zz").show();
		$(".hdgz-con").show();
	})
	//点击活动规则确定
	$(".gz-qd").click(function(){
		$(".zz").hide();
		$(".hdgz-con").hide();
	})
	//中奖弹窗内容
	var arr2 = [
		{
			"src":"黄封村人参酒两瓶.jpg",
			"name":"黄封村人参酒",
			"jz":"120元",
			"addres":"兑奖地址：吉林省酒文化博物馆（亚泰大街9699号）",
			"tel":"联系电话：0431-88508899",
		},
		{
			"src":"莱沃口腔储值卡.jpg",
			"name":"莱沃口腔储值卡",
			"jz":"200元",
			"addres":"兑奖地址：工农大路1780号（省中医院东侧）",
			"tel":"联系电话：0431—89545888",
		},
		{
			"src":"联通.jpg",
			"name":"中国联通流量卡",
			"jz":"50元",
			"addres":"兑奖地址：长春市内联通营业厅登记统一存入",
			"tel":"注：2G/3G用户500M流量；4G用户1G流量;异地号码，非正常在用号码、已有相同流量包、融合套餐等不能使用",
		},
		{
			"src":"圣雅瑜伽SPA会所储值卡.jpg",
			"name":"圣雅瑜伽SPA会所储值卡",
			"jz":"2000元",
			"addres":"兑奖地址：飞跃东路林田创客公园D栋2楼彩练新闻",
			"tel":"13943017772",
		},
		{
			
		},
		{
			"src":"蛋壳科技VR体验卡.png",
			"name":"蛋壳科技VR体验卡",
			"jz":"50元",
			"addres":"兑奖地址：同志街与同光路交会处联通营业厅；",
			"tel":"注意：VR互动实战体验一次",
		},
		{
			"src":"sudoku_07.jpg",
			"name":"陶进二胡工作室",
			"jz":"300元",
			"addres":"兑奖地址：飞跃东路林田创客公园D栋2楼彩练新闻",
			"tel":"联系电话：13943017772",
		},
		{
			"src":"S5健身俱乐部贵宾卡.png",
			"name":"S5健身俱乐部贵宾卡",
			"jz":"100元",
			"addres":"兑奖地址：南关区幸福街与蔚山路交会处绿地中央广场盘古家宴旁",
			"tel":"联系电话：0431—81887555；",
		}
	];
	//中奖内容
	var arr3 = [];
	//开始抽奖
	var num = 3;
	$(".cj").on("click",choujiang);
	function choujiang(){
		$(".cj").off("click",choujiang);
		if(num==0){
			$(".zz").show();
			$(".csyw").show();
		}else{
			var zjwz=Math.floor(Math.random()*8);
			console.log(zjwz)
			fn(zjwz);
		}
	}
	var zqwz = 0;
	var arr = [0,1,2,5,8,7,6,3];
	var i = 0;
	function fn(n){
		$(".wdjp").off("click",wdjp2);
		num--;
		$(".cs").html(num);
		var zbs = 0;
		var timer = setInterval(fn1,300);
		var speed = 500;
		function fn1(){
			i++;
			zbs++;
			if(i==arr.length){
				i=0;
			}
			$(".list li").removeClass("active");
			$(".list li").eq(arr[i]).addClass("active");
			var n2 = 8-zqwz+32+n;
			if(zbs==n2){
				zqwz = i;
				clearInterval(timer);
				$(".zz").show();
				setTimeout(function(){
					if(n==4){
						$(".zj-txt").html("很遗憾，没有中奖，请下次再来！");
						$(".imgbox").hide();
						$(".zj-txt").siblings("p").hide();
						$(".zj-txt").siblings("b").hide();
						$(".ft").html("").show();
					}else{
						$(".imgbox img").attr("src","彩练新闻/"+arr2[n].src);
						$(".zj-txt").html("恭喜你，中奖了");
						$(".name1").html(arr2[n].name);
						$(".jz").html(arr2[n].jz);
						$(".address").html(arr2[n].addres);
						$(".ft").html(arr2[n].tel);	
						$(".imgbox").show();
						$(".zj-txt").siblings("p").show();
						$(".zj-txt").siblings("b").show();
						var d = new Date();
						var obj={
							src:"彩练新闻/"+arr2[n].src,
							jp:"奖品："+arr2[n].name,
							zjsj:"中奖时间："+d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"+d.getHours()+"时"+d.getMinutes()+"分",
							djsj:"兑奖时间：截止到2021年1月26日",
							address:arr2[n].addres,
							tel:arr2[n].tel,
							btn:0
						}
						arr3.push(obj);
					}
					$(".cj").on("click",choujiang);
					$(".zj-con").show();
					$(".wdjp").on("click",wdjp2);
				},300)
			}
			else if(zbs>=4 && zbs<32){
				clearInterval(timer);
				timer = setInterval(fn1,150);
			}
			else if(zbs>=n2-8 &&zbs<n2-4){
				clearInterval(timer);
				timer = setInterval(fn1,300);
			}else if(zbs>=n2-3){
				clearInterval(timer);
				speed+=100;
				timer = setInterval(fn1,speed);
			}
		}
	}
	$(".csqd").click(function(){
		$('.zz').hide();
		$(this).parent().hide();
	})
	//点击我的奖品
	$(".wdjp").on("click",wdjp2);
	function wdjp2(){
		if($(this).hasClass("off")){
			$(".zz").show();
			$(".srxx").show();
		}else{
			$(".page2").hide();
			$(".page3").show();
			zsjp();
		}
	}
	//输入信息框取消按钮
	$(".no1").click(function(){
		$(".srxx").hide();
		$(".zz").hide();
	});
	//输入信息框确定按钮
	$(".ok1").click(function(){
		//验证名字
		if($("#username").val().length==0){
			$(".nameerr").show();
		}else{
			$(".nameerr").hide();
		}
		//验证手机号
		var re = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
		if(re.test($("#mytel").val())){
			$(".telerr").hide();
		}else{
			$(".telerr").show();
		}
		if($("#username").val().length!=0&&re.test($("#mytel").val())){
			$(".srxx").hide();
			$(".zz").hide();
			$(".wdjp").removeClass("off");
			$(".page2").hide();
			$(".page3").show();
			//展示奖品
			zsjp();
		}
	});
	var obj2 ={};
	function zsjp(){
		$(".jp-box").html("");
		if(arr3.length==0){
			var h2 = $("<h2>无</h2>");
			h2.addClass("oh2").appendTo($(".jp-box"));
		}else{
			var jplist = $("<ul class='jp-list'></ul>");
			$.each(arr3, function(idx,item) {
				var li = $("<li></li>");
				var div1 = $("<div class='imgbox'></div>");
				var img1 = $("<img />");
				img1.attr("src",item.src).appendTo(div1);
				div1.appendTo(li);
				var p1 = $("<p></p>");
				p1.html(item.jp).appendTo(li);
				var p2 = $("<p></p>");
				p2.html(item.zjsj).appendTo(li);
				var p3 = $("<p></p>");
				p3.html(item.djsj).appendTo(li);
				var p4 = $("<p></p>");
				p4.html(item.address).appendTo(li);
				var p5 = $("<p></p>");
				p5.html(item.tel).appendTo(li);
				var div2 = $("<div class='ljdj'>立即兑奖</div>");
				div2.appendTo(li);
				li.appendTo(jplist);
				if(item.btn==1){
					div2.html("已兑奖");
				}else{
					div2.html("立即兑奖");
					div2.on("click",fn3);
					function fn3(){
						$(".zz").show();
						$(".djmm").show();
						obj2 = div2;
						obj2.index = div2.parent().index();
					}
				}
			});
			jplist.appendTo($(".jp-box"));
		}
		
	}
	//继续抽奖
	$(".jxcj").click(function(){
		$(".page3").hide();
		$(".page2").show();
	})
	//兑奖密码取消按钮
	$(".no2").click(function(){
		$(".zz").hide();
		$(".djmm").hide();
		$(".psw").val("");
	})
	//兑奖密码确定按钮
	$(".ok2").click(function(){
		if($(".psw").val()=="1234"){
			$(".zz").hide();
			$(".djmm").hide();
			$(".psw").val("");
			obj2.html("已兑奖");
			obj2.off();
			console.log(obj2.index);
			arr3[obj2.index].btn=1;
		}else{
			$(".djmm p").show();
		}
	})
})
