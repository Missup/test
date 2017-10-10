// 这里使用最原始的js语法实现，可对应换成jquery语法进行逻辑控制  
var demoImg = document.getElementById("demo_img");  
var demoInput1 = document.getElementById("demo_input1");  
var demoInput2 = document.getElementById("demo_input2");  
//隐藏text block，显示password block  
function hideShowPsw(){  
  if (demoInput1.type == "password") {  
      demoInput1.type = "text";  
      demoImg.src = "images/block.png";  
  }else {  
      demoInput1.type = "password";  
      demoImg.src = "images/none.png";  
  } 
  if (demoInput2.type == "password") {  
      demoInput2.type = "text";  
      demoImg.src = "images/block.png";  
  }else {  
      demoInput2.type = "password";  
      demoImg.src = "images/none.png";  
  }   
}  

// tab栏切换
var tab=document.getElementById("tab-menu");
var tabMenus=tab.getElementsByTagName("li");
var tabMains=document.getElementById("tab-main").children;
for(var i=0;i<tabMenus.length;i++){
    tabMenus[i].index=i;
    tabMenus[i].onclick=function(){
        for(var j=0;j<tabMenus.length;j++){
            tabMenus[j].className="tab-item";
            tabMains[j].className="main";
        }
        this.className+=" active";
        var index=this.index;
        tabMains[index].className+=" selected";
    }
}

//校验input的value属性值,是否符合标准;
    var inp1 = document.getElementById("demo_input1");
    var inp2 = document.getElementById("demo_input2");
    var p1 = document.getElementsByClassName("tip1")[0];
    var p2 = document.getElementsByClassName("tip2")[0];
    var p3 = document.getElementsByClassName("tip3")[0];
    var p4 = document.getElementsByClassName("tip4")[0];
    inp1.onblur = function () {
        //判断:input的value值长度不能小于4大于20;
        if(this.value.length < 6 || this.value.length > 20){
            //小于6不对,大于20也不对;
            p2.style.display="block";
        }else{
            p2.style.display="none";
        }
    }
    inp2.onblur = function () {
        //判断:input的value值长度不能小于4大于20;
        if(this.value.length < 4 || this.value.length > 20){
            //小于6不对,大于20也不对;
            p4.style.display="block";
        }else{
            p4.style.display="none";
        }
    }
    function checkPhone1(){ 
        var mobile1 = document.getElementById('mobile1').value;
        if(!(/^1[34578]\d{9}$/.test(mobile1))){ 
            p1.style.display="block";  
        } else{
            p1.style.display="none";
        }
    }
    function checkPhone2(){ 
        var mobile2 = document.getElementById('mobile2').value;
        if(!(/^1[34578]\d{9}$/.test(mobile2))){ 
            p3.style.display="block";  
            return false; 
        } else{
            p3.style.display="none";
        }
    }
    $(".close1").click(function() {
    $(".modal").slideUp("fast");
}),$(".list-2 > li").click(function() {
    $(".modal").fadeOut("fast");
    $(".btn-primary").html($(this).children('span').html());
});