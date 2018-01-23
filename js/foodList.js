// 页面传值
// function subStr(url) {
//     var obj = {};
//     var str = url.split('?')[1];
//     var str2 = str.split('&');
//     console.log(str2);
//     for (var k in str2) {
//         var str3 = str2[k].split('=');
//         obj[str3[0]] = str3[1];
//     }
//     return obj;
// }
// var href = subStr(window.location.href);

// $.ajax({
//     type:"post",
//     url:"http://www.mffive.com:8080/drysaltery/getGroup",
//     success:function(data){
//         var tplStr1 = template("tplProducts",data);
//         console.log(tplStr1);
//         $(".products").html(tplStr1);   
//     },
//     error:function(){
//         console.log("请求失败!");
//     }
// })
 
// $.ajax({
//     type:"post",
//     url:"http://www.mffive.com:8080/drysaltery/getAppList",
//     success:function(data){
//          console.log(data);   
//         var tplStr1 = template("tplProducts",data);
//         $(".products").html(tplStr1);         
//     },
//     error:function(){
//         console.log("请求失败!");
//     }
// })
// footer点击变色
	var aArr =$(".footer>a");
	var imgArr=$(".footer").find("img");
	aArr[0].onclick=function(){
	    imgArr[0].src="images/干货切图/ico_selected@2x.png";
	    imgArr[1].src="images/干货切图/ico_ganhuo@2x.png";
	    imgArr[2].src="images/干货切图/ico_wode@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#E3E3E3");
	}
	aArr[1].onclick=function(){
	    imgArr[0].src="images/干货切图/ico_yujian@2x.png";
	    imgArr[1].src="images/干货切图/ico_ganhuo_selected@2x.png";
	    imgArr[2].src="images/干货切图/ico_wode@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#E3E3E3");
	}
	aArr[2].onclick=function(){
	    imgArr[0].src="images/干货切图/ico_yujian@2x.png";
	    imgArr[1].src="images/干货切图/ico_ganhuo@2x.png";
	    imgArr[2].src="images/干货切图/ico_wode_selected@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#E3E3E3");
	}
