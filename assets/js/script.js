$(document).ready(function () {

    const url = new URL(window.location.href);
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


    const renderStaff = () => {
        let html = ''
        for (let i = 0; i < staffs.length; i++) {
            html += `<div class="staff-item">
                <div class="staff-image">
                    <img src="${staffs[i].photo}">
                </div>
                <div class="staff-description">
                    <h5>${staffs[i].name}</h5>
                    <label class="text-muted">${staffs[i].role}</label>
                </div>
            </div>`
        }
        $(".staff-list").html(html)
    }
    renderStaff();


    const renderNews = () => {
        let html = ``
        for (let i = 0; i < news.length; i++) {
            html += `<a href="detail.html?id=${news[i].id}" class="news-item">
                <img src="${news[i].thumbnail}">
                <div class="news-content">
                    <h5>${news[i].title}</h5>
                    <p>${i + 1} jam yang lalu</p>
                </div>
            </a>`
        }
        $(".news-list").html(html)
    }
    renderNews();


    /**
     * Mendapatkan data detail berita
     */
    const getDetailNews = () => {
        const id = url.searchParams.get('id');
        let results = [];
        for (let i = 0; i < news.length; i++) {
            //jika news id dan paramter sama maka di masukan ke results
            if (news[i].id == id) {
                results = news[i];
            }
        }
        return results;
    }

    const renderNewsDetail = () => {
        const news = getDetailNews();
        console.log(news)
        $(".title").text(news.title)
        $(".thumbnail").attr('src', news.thumbnail)
        $(".content").html(news.content)
    }
    renderNewsDetail();
})

