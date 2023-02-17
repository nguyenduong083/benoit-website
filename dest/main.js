//HOME
function home(){
//MENU
function menuHover(){
    let hoverMENU = document.querySelectorAll('.header .container-fluid .header__menu li')
    let ulMENU = document.querySelectorAll('.header .container-fluid .header__menu li .select')

    hoverMENU.forEach(function(menu){
        menu.addEventListener('mousemove',function(){
            menu.classList.add('active')
        })
        menu.addEventListener('mouseout',function(){
            menu.classList.remove('active')
        })
    })

    /* hoverMENU.addEventListener('mousemove',function(){
        ulMENU.classList.add('active')
    })
    hoverMENU.addEventListener('mouseout',function(){
        ulMENU.classList.remove('active')
    }) */

}
const hoverMenu = document.querySelector('.header .container-fluid .header__menu li');
if(hoverMenu){
    menuHover()
}
//SLIDER
function hanhleSLIDER(){
    var hanhleSlider = document.querySelector('.slider__list');
    var flktySlider = new Flickity( hanhleSlider, {
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    pageDots : false,
    /* freeScroll : true, */
    });

    //CONTROL
    let btnPrev = document.querySelector('.slider__btn-left');
    let btnNext = document.querySelector('.slider__btn-right');

    btnPrev.addEventListener('click',function(){
        flktySlider.previous(true)
    })
    btnNext.addEventListener('click',function(){
        flktySlider.next(true)
    })
}
const sliderlist = document.querySelector('.slider__list');
if(sliderlist){
    hanhleSLIDER()
}
//Client
function hannhleClient(){
    var imageEnd = document.querySelector('.client .container-fluid');
    var flktyImageEnd = new Flickity( imageEnd, {
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    pageDots : false,
    /* freeScroll : true, */
    });
}
const clientlist = document.querySelector('.client .container-fluid');
if(clientlist){
    hannhleClient()
}

//////////Số Tăng HOME
function upNUMBER(){
function numberUP(){
//animateNumber TẠO GIÁ TRỊ CHO BIẾN "animateNumber"
    function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let positionScroll = this.window.pageYOffset;
    let currentNumber = startNumber
    //"setInterval" chạy một hàm lặp đi lặp lại, với một khoảng thời gian delay do chúng ta lựa chọn.
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
    if (currentNumber >= finalNumber) {
        clearInterval(interval)
    }else{
        currentNumber++
        callback(currentNumber)
    }
    }
    }
    //finalNumber = 200, delay = 10ms, startNumber = 0
    /* LEFT */
    document.addEventListener('DOMContentLoaded', function () {
        animateNumber(200, 10, 0, function (number) {
        const formattedNumber = number.toLocaleString()+'+'
        document.querySelector('.somefacts__right .numbertext .left .number').innerText = formattedNumber
        })
    })
    /* RIGHT */
    document.addEventListener('DOMContentLoaded', function () {
        animateNumber(180, 10, 0, function (number) {
            const formattedNumber = number.toLocaleString()+'+'
        document.querySelector('.somefacts__right .numbertext .right .number').innerText = formattedNumber
            })
    })      
}
    const number = document.querySelector('.somefacts__right .numbertext .right .number')
    if(number !== null){
        numberUP()
    } 
}upNUMBER()


/*******VIDEOS*******/

function videos(){
let imgVideos = document.querySelectorAll('.banner .btnvideo'),
    modalVideo = document.querySelector('.popupvideo'),
    iframe = document.querySelector('.popupvideo__inner-iframe iframe'),
    btnClose = document.querySelector('.popupvideo .container-fluid .close');

   imgVideos.forEach(function(video){
    video.addEventListener('click',function(){
        //hiện modal video
        modalVideo.classList.add('active')
        console.log(imgVideos)
        //lấy ID video
        let dataID = video.getAttribute('data-video-src')
        // set ID iframe 
        iframe.setAttribute('src', 'http://www.youtube.com/embed/'+dataID+'?autoplay=1')
    })
   })

    function closeModal(){
        //hide Modal
        modalVideo.classList.remove('active')
        // Gỡ iframe
        iframe.setAttribute('src', '')
   }
   btnClose.addEventListener('click',function(){
    closeModal()
   })
   modalVideo.addEventListener('click',function(){
    closeModal()
   })
}   
const video = document.querySelectorAll('.banner .btnvideo');
    if(video){
        videos()
}

//LOCATION
function hannhleLocation(){
    var imageLocation = document.querySelector('.location__list');
    var flktyImageEnd = new Flickity( imageLocation, {
    // options

    imagesLoaded: true,
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    pageDots : false,
    /* freeScroll : true, */
    });
}
const locationlist = document.querySelector('.location__list');
if(locationlist){
    hannhleLocation()
}
//MENU NAV
function menuMobile(){
    const btnMenu = document.querySelector('header .container-fluid .btnmenu'),
         nav = document.querySelector('.nav__menu'),
         bgnav = document.querySelector('.nav'),
         logomenu = document.querySelector('header .container-fluid .header__logo');

    btnMenu.addEventListener('click',function(){
        this.classList.toggle('active')
        nav.classList.toggle('active')
        bgnav.classList.toggle('active')
        logomenu.classList.toggle('active')
    })
    //hide NAV
    function hideNav(){
        btnMenu.classList.remove('active')
        nav.classList.remove('active')
        bgnav.classList.remove('active')
        logomenu.classList.remove('active')
    }
    //resize window
    window.addEventListener('resize',function(){
        let wWindow = window.innerWidth;
        if(wWindow > 992){
            hideNav()
        }
    })
    //click window
    bgnav.addEventListener('click',function(){
        hideNav()
    })
}
menuMobile()

//EVENT
function hannhleEven(){
    var imageEnd = document.querySelector('.events .container .sliderlist');
    var flktyImageEnd = new Flickity( imageEnd, {
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    pageDots : false,
    /* freeScroll : true, */
    });
}
const evenlist = document.querySelector('.events .container .sliderlist');
if(evenlist){
    hannhleEven()
}

//BLOG

function hanhleBlog(){
    var imageEnd = document.querySelector('.blog .container .sliderlist');
    var flktyImageEnd = new Flickity( imageEnd, {
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    pageDots : false,
    /* freeScroll : true, */
    });
}
    const bLOG = document.querySelector('.blog .container .sliderlist');
if(bLOG){
    hanhleBlog()
}

//BACK TO TOP
function backTOTOP(){
function totop(){
    let backTop = document.querySelector('.backtotop')
    let getHeightWindow = window.innerHeight;
    window.addEventListener('scroll',function(){
        let scrollY = this.window.pageYOffset;
        if(scrollY > getHeightWindow){
            backTop.classList.add('active')
        }else{
            backTop.classList.remove('active')
        }
    })

    backTop.addEventListener('click',function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    })
}
const backToTop = document.querySelector('.backtotop')
if(backToTop !== undefined){
    totop()
}else
    callback(backToTop)
}backTOTOP()
//LANG SELECT
function langSELECT(){
function langSelect(){
    let langSL = document.querySelector('header .container-fluid .header__right-lang');
    langSL.addEventListener('click',function(e){
        this.classList.toggle('active')
        e.stopPropagation();
    });

    let langText = document.querySelector('header .container-fluid .header__right-lang .text');
    let langItem = document.querySelectorAll('header .container-fluid .header__right-lang .select .item');

    langItem.forEach(function(item){
        item.addEventListener('click',function(){
            ///text content nội dung TEXT trong thẻ
            //Chọn biến chứa nội dung trong text
            let text = this.textContent;
            //Chọn biến chứa nội dung trong item
            let langTextSpan = langText.textContent;
            langText.innerHTML = text;
            this.innerHTML = langTextSpan;
        })
    })

    document.addEventListener('click',function(){
        langSL.classList.remove('active');
    })
}   
    const header = document.querySelector('header .container-fluid .header__right-lang');
    if(header){    
        langSelect()
    }else{
        callback(header)
    }
}langSELECT()
//MESS
function hannhleMESS(){
function hannhleMess(){
    var textMess = document.querySelector('.message .container .message__list');
    var flktyMess = new Flickity( textMess, {
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: true,
    wrapAround: true,
    pageDots : false,
    /* freeScroll : true, */
    });
}
const mess = document.querySelector('.message .container .message__list');
    if(mess){    
        hannhleMess()
    }
}hannhleMESS()
}home()
//SERVICES
function services(){
    function hanhleSer(){
            function hanhleSER(){
    var imageSER = document.querySelector('.servicesv .container .servicesv__list .imgslider');
    var flktyImageEnd = new Flickity( imageSER, {
    // options
    imagesLoaded: true,
    cellAlign: 'center',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    pageDots : true,
    /* freeScroll : true, */
    });
    }
    const hanhleSE = document.querySelector('.servicesv .container .servicesv__list .imgslider');
    if(hanhleSE){    
        hanhleSER()
    }
    }hanhleSer()
    //////////Số Tăng HOME
    function upnumberSER(){
    function numberUPSER(){
    //animateNumber TẠO GIÁ TRỊ CHO BIẾN "animateNumber"
        function animateNumber(finalNumber, delay, startNumber = 0, callback) {
        let positionScroll = this.window.pageYOffset;
        let currentNumber = startNumber
        //"setInterval" chạy một hàm lặp đi lặp lại, với một khoảng thời gian delay do chúng ta lựa chọn.
        const interval = window.setInterval(updateNumber, delay)
        function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        }else{
            currentNumber++
            callback(currentNumber)
        }
        }
        }
        //finalNumber = 200, delay = 10ms, startNumber = 0
        /* 1 */
        document.addEventListener('DOMContentLoaded', function () {
            animateNumber(200, 10, 0, function (number) {
            const formattedNumber = number.toLocaleString()+'+'
            document.querySelector('.numbertext__list-item:nth-child(1) .number').innerText = formattedNumber
            })
        })
        /* 2 */
        document.addEventListener('DOMContentLoaded', function () {
            animateNumber(180, 10, 0, function (number) {
            const formattedNumber = number.toLocaleString()+'+'
            document.querySelector('.numbertext__list-item:nth-child(2) .number').innerText = formattedNumber
            })
        })
        /* 3 */
        document.addEventListener('DOMContentLoaded', function () {
            animateNumber(350, 10, 0, function (number) {
            const formattedNumber = number.toLocaleString()+'+'
            document.querySelector('.numbertext__list-item:nth-child(3) .number').innerText = formattedNumber
            })
        })
        /* 4 */
        document.addEventListener('DOMContentLoaded', function () {
            animateNumber(250, 10, 0, function (number) {
            const formattedNumber = number.toLocaleString()+'+'
            document.querySelector('.numbertext__list-item:nth-child(4) .number').innerText = formattedNumber
            })
        })
    }

        const number = document.querySelector('.numbertext__list-item:nth-child(1) .number')
        if(number !== null){
            numberUPSER()
        }
    }upnumberSER()
}services()

//OTHER
function other(){
    function hannhleOther(){
    var imageEnd = document.querySelector('.other .sliderlistser');
    var flktyImageEnd = new Flickity( imageEnd, {
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    /* wrapAround: true, */
    pageDots : false,
    /* freeScroll : true, */
    });
    }
    const hanhleSE = document.querySelector('.other .sliderlistser');
    if(hanhleSE){    
        hannhleOther()
    }
}other()

//EVENT
function detaievent(){
    function hannhledetailevent(){
    var imageEnd = document.querySelector('.other.ev .sliderlist');
    var flktyImageEnd = new Flickity( imageEnd, {
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true,
    draggable: '>1',
    prevNextButtons: false,
    wrapAround: true,
    pageDots : false,
    /* freeScroll : true, */
    });
    }
    const hanhleSE = document.querySelector('.other.ev .sliderlist');
    if(hanhleSE){    
        hannhledetailevent()
    }
}detaievent()

/*******VIDEOS*******/
function videos(){
let imgVideoBlog = document.querySelectorAll('.other.ev .sliderlist__item .imgcenter .btnvideo'),
    modalVideo = document.querySelector('.popupvideo'),
    iframe = document.querySelector('.popupvideo__inner-iframe iframe'),
    btnClose = document.querySelector('.popupvideo .container-fluid .close');

   imgVideoBlog.forEach(function(video){
    video.addEventListener('click',function(){
        //hiện modal video
        modalVideo.classList.add('active')
        console.log(imgVideoBlog)
        //lấy ID video
        let dataID = video.getAttribute('data-video-src')
        // set ID iframe 
        iframe.setAttribute('src', 'http://www.youtube.com/embed/'+dataID+'?autoplay=1')
    })
   })

   function closeModal(){
        //hide Modal
        modalVideo.classList.remove('active')
        // Gỡ iframe
        iframe.setAttribute('src', '')
   }
   btnClose.addEventListener('click',function(){
    closeModal()
   })
   modalVideo.addEventListener('click',function(){
    closeModal()
   })
}videos()

/* LIBRARY */
/* function library (){
    let libraryNewTag = document.querySelector('.lib__tag-item');
    let libraryNewTagACTIVE = document.querySelector('.lib__tag-item active');
    libraryNewTag.addEventListener('click',function(){
        console.log(libraryNewTag);
        libraryNewTag.classList.toggle('active');
        libraryNewTagACTIVE.classList.remove('active');
    })     
}
    const librarys = document.querySelector('.lib__tag-item');
    if(librarys){    
        library()
    } */

function lib(){
    let tabs = document.querySelectorAll('.lib__tag-item');
    let listNews = document.querySelectorAll('.lib__list');

    tabs.forEach(function(tab){
        tab.addEventListener('click',function(){
            tabs.forEach(function(tab){
                tab.classList.remove('active')
            })
            tab.classList.add('active')

            //HIDE ALL NEWS LIST
            listNews.forEach(function(lists){
                lists.classList.remove('active')
            })
            let id = this.dataset.tab
            console.log(id)
            //ADD LIST
            document.querySelector('.lib__list-'+id).classList.add('active')
        })
    })
}
    const librarys = document.querySelector('.lib__list');
    if(librarys){    
        lib()
    }