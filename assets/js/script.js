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

    /**
     * Jika screen di scrool
     */
    $(window).on("scroll", function (val) {
        let scrollAmount = window.scrollY;
        // jika nilai scrollAmount top 0
        if (scrollAmount != 0) {
            $(".navbar").css('box-shadow', '0 0 8px 0 rgba(0,0,0,0.2)')
        } else {
            $('.navbar').css('box-shadow', 'none');
        }
    });


    const renderProgram = () => {
        let html = ``
        for (let i = 0; i < programs.length; i++) {
            html += `<div class="list-item">
                    <span>${i + 1}</span>
                    <div>
                        <h5>${programs[i].title}</h5>
                        <p>${programs[i].description}</p>
                    </div>
                </div>`
        }
        $(".list").html(html)
    }
    renderProgram()

})