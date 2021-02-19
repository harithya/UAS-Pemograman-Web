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

    const renderService = () => {
        let html = ``;
        for (let i = 0; i < services.length; i++) {
            html += `<div class="media">
                <div class="media-icon">
                    <i class="${services[i].icon}"></i>
                </div>
                <div class="media-body">
                    <h4>${services[i].title}</h4>
                    <p>${services[i].description}</p>
                </div>
            </div>`
        }
        $('.media-grid').html(html)
    }

    renderService()

})