var $ = window.$,
    headerTop = $(".mainHeader"),
    headerTopWidh = 0,
    headerLogo = $(".mainHeader h1"),
    headerNav = $(".mainHeader nav"),
    headerMenuIcon = $(".mobileMenuIcon"),
    mobileMenu = $(".mobileMenu"),
    activeMenu = true;

function responsiveNav() {
    'use strict';
    
    headerTopWidh = headerTop.width();
    if (headerLogo.outerWidth(true) + headerNav.outerWidth(true) > headerTopWidh) {
        headerNav.hide();
        headerMenuIcon.show();
    } else {
        headerNav.show();
        headerMenuIcon.hide();
    }
}

function showMobileMenu() {
    'use strict';

        
    headerMenuIcon.on("click", function () {
        if (activeMenu === true) {
            activeMenu = false;
            headerMenuIcon.toggleClass("active");
            mobileMenu.slideToggle(500, function () {
                activeMenu = true;
            });
        }
    });

    
}

$(document).ready(function () {
    'use strict';
    
    showMobileMenu();
    responsiveNav();
    
    $(window).resize(function () {
        responsiveNav();
    });
    
});

