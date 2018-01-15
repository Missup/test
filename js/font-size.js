!function(){
    var windowWidth= $(window).width();
    if(windowWidth > 750) {
        windowWidth = 750;
    }
    var fontSize = windowWidth / 750 * 50;

    $("html").attr("style", "font-size:" + fontSize + "px");
    $(window).resize(function() {
        windowWidth = $(window).width();
        if(windowWidth > 750) {
            windowWidth = 750;
        }
        fontSize = windowWidth / 750 * 50;
        $("html").attr("style", "font-size:" + fontSize + "px");
    });
}();