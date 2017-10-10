// 这里使用最原始的js语法实现，可对应换成jquery语法进行逻辑控制  
var demoImg = document.getElementById("demo_img");  
var demoInput1 = document.getElementById("demo_input1");  
//隐藏text block，显示password block  
function hideShowPsw(){  
  if (demoInput1.type == "password") {  
      demoInput1.type = "text";  
      demoImg.src = "images/block.png";  
  }else {  
      demoInput1.type = "password";  
      demoImg.src = "images/none.png";  
  }  
}  


//校验input的value属性值,是否符合标准;
    var inp1 = document.getElementById("demo_input1");
    var inp2 = document.getElementById("demo_input2");
    var p1 = document.getElementsByClassName("tip1")[0];
    var p2 = document.getElementsByClassName("tip2")[0];
    inp1.onblur = function () {
        //判断:input的value值长度不能小于4大于20;
        if(this.value.length < 6 || this.value.length > 20){
            //小于6不对,大于20也不对;
            p2.style.display="block";
            $("button").click(function(){
                window.location.href="javascript:;";
            })
        }else{
            p2.style.display="none";
            $("button").click(function(){
                window.location.href="https://www.baidu.com/";
            })
        }
    }

    inp2.onblur = function () {
        //判断:input的value值长度是否是4;
        if(this.value.length !=4){
            //不等于4就不对;
            p1.style.display="block";
            $("button").click(function(){
                window.location.href="javascript:;";
            })
        }else{
            p1.style.display="none";
            $("button").click(function(){
                window.location.href="https://www.baidu.com/";
            })
        }
    }
  