window.onload=function(){
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

   
    // 头部导航
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // spaceBetween: 50
    });
    // 训练 第一屏 头部轮播
    var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        slidesPerView: 1,//屏幕显示小div的个数
        paginationClickable: true,
        spaceBetween: 0, //间隙
        autoplayDisableOnInteraction : false,//操作后,又恢复轮播
        autoplay: 3000, //轮播时间
        freeMode: false //自动贴合
    });
    // 饮食 第二屏 头部轮播
    var swiperJ = new Swiper('.swiper-container-j', {
        pagination: '.swiper-pagination-j', //轮播导航小点点
        slidesPerView: 1,//屏幕显示小div的个数
        paginationClickable: true,
        autoplayDisableOnInteraction : false,
        spaceBetween: 0,
        autoplay: 3000, //轮播时间
        freeMode: false
    });
    
    // 干货 训练头部轮播
    $.ajax({
        url:"http://www.mffive.com:8080/drysaltery/getRecommendList",
        type: "get",
        dataType: "json",
        success: function(data){
            if (data.code === 0) {
                var tplStr = template('tpl0',data);
                $('.train').html(tplStr);
            } else {
                // 其他操作，一般这边才是请求失败写的地方，如果没有要求，可省略else
            }
        },
        error: function(err) {
            // 这个传参数err，系统会自己获取
            console.log(err)
        }
    })
    // 干货 训练列表
    $.ajax({
        url:"http://www.mffive.com:8080/drysaltery/getRecommendList",
        type: "get",
        dataType: "json",
        success:function(res){
            if(res.code === 0){
                var tplStr = template('tpl1',res);
                $('.showplay-3').html(tplStr);
            }else{
                // 其他操作，一般这边才是请求失败写的地方，如果没有要求，可省略else
            }
        },
        error:function(err){
            // 这个传参数err，系统会自己获取
            console.log(err);
        }
    })



}
