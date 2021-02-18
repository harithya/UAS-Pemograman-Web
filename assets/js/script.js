$(document).ready(function () {

    let navbarActive = false
    $(".navbar-toggler").on('click', function () {
        if (navbarActive) {
            navbarActive = false
            $(".navbar-navigation").removeClass('menu-active');
        } else {
            navbarActive = true;
            $(".navbar-navigation").addClass('menu-active');
        }
    })
})