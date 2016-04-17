var $ = window.$,
    input = $(".inputHolder").children("input"),
    mobileMenuBtn = $(".mobileMenuIcon"),
    mobileMenu = $(".mobileMenu");

$(document).ready(function () {
    'use strict';

    
    $(".inputHolder input, .inputHolder textarea").on("keyup", function () {
        $(this).prev().hide();
        
        if ($(this).val() === "") {
            window.console.log("Empty Input");
            $(this).prev().show();

        } else {
            $(this).prev().hide();
        }
    });
    
    mobileMenuBtn.on("click", function () {
        mobileMenu.slideToggle();
    });
});

