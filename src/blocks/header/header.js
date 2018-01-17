$(document).ready(function() {
    $(".header__menuIcon").click(function() {
        $(".header__item, .header__lang").css({
            "display": "block",
            "textAlign": "center",
            "margin-top": "15px"
        });
        $(".header__menu").slideToggle(500);
    });

    $(".header__item-hasSubmenu").click(function(event) {
        $(event.currentTarget).next().slideToggle(500);
    })

})
