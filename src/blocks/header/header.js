$(document).ready(function() {
    $(".header__menuIcon").click(function() {

        if ($(window).width() < 590){
            $(".header__menu").slideToggle(200);
            $(".header").toggleClass("header_scrollable");
        }

        // $(".header__menuIcon div:nth-child(1)").hide();
        // $(".header__menuIcon div:nth-child(2)").css({
        //     "transform": "rotate(45deg)"
        // });
        // $(".header__menuIcon div:nth-child(3)").css({
        //     "transform": "rotate(-45deg) translateX(6px) translateY(-5px)"
        // });
    });

    $(window).resize(function(){
        if ($(window).width() > 590){
            $(".header__menu").css({"display" : "flex"});
            $(".header").removeClass("header_scrollable");
        }
        else {
            $(".header").addClass("header_scrollable");
        }

    })


    $(".header__item-hasSubmenu").click(function(event) {
        $(event.currentTarget).next().slideToggle(200);
    });

})
