var p1 = document.getElementsByClassName("tip1")[0];
    function checkPhone1(){ 
        var mobile1 = document.getElementById('mobile1').value;
        if(!(/^1[34578]\d{9}$/.test(mobile1))){ 
            p1.style.display="block";  
                $("button").click(function(){
                        window.location.href="javascript:;";
                })
        } else{
            p1.style.display="none";
            
            $("button").click(function(){
                var mobile1 = document.getElementById('mobile1').value;
                window.location.href='zhu06.html?a=' + mobile1;
            })
        }
    }

// $(".close1").click(function() {
//     $(".modal").slideUp("fast");
// }),$(".list-2 > li").click(function() {
//     $(".modal").fadeOut("fast");
//     $(".btn-primary").html($(this).children('span').html());
// });

// $(".close1").on("click touchstart",function() {
//     $(".modal").slideUp("fast");
// }),$(".list-2 > li").on("click touchstart",function() {
//     $(".modal").fadeOut("fast");
//     $(".btn-primary").html($(this).children('span').html());
// });

$(".list-2 > li").on("click touchstart", function() {
    $(".btn-primary").html($(this).children('span').html());
})