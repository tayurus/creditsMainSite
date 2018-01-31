$(document).ready(function(){
    function showPopup(){
        $(".popup").animate({"top" : "60%",}, 250);
        $("body").css({"backgroundColor" : "#ccc", "overflow" : "hidden"});
    }

    function hidePopup(){
        $(".popup").animate({"top" : "-50%",}, 250);
        $("body").css({"backgroundColor" : "", "overflow" : ""});
    }

    showPopup();

    setTimeout(hidePopup, 2000);

})
