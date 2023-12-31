if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
 }
 if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
 }

const $sitemapIco = document.querySelectorAll(".menu_left li a")[0]
const $searchIco = document.querySelectorAll(".menu_left li a")[1]
const $mymegaIco = document.querySelectorAll(".menu_right li a")[1]

const $sitemap = document.querySelector(".sitemap")
const $headerSearch = document.querySelector(".header_search")
const $mymega = document.querySelector(".mymega")

let layer = [$sitemapIco, $searchIco, $mymegaIco]
let layerContent = [$sitemap, $headerSearch, $mymega]

const $tabRank = document.querySelectorAll(".tab_rank ul li")[0]
const $tabRank2 = document.querySelectorAll(".tab_rank ul li")[1]

const $list = document.querySelectorAll(".rank_content .list ul")[0]
const $list2 = document.querySelectorAll(".rank_content .list ul")[1]

const $mainMenu = document.querySelectorAll(".main_menu > li")
const $subMenu = document.querySelectorAll(".sub_menu > ul li")

const $rate = document.querySelectorAll(".rate li a")
const $rank = document.querySelectorAll(".rank li a")
const $ratePoster = document.querySelectorAll(".rate_poster ul li")
const $rankPoster = document.querySelectorAll(".rank_poster ul li")

let rankPage = [$tabRank, $tabRank2]
let rankList = [$list, $list2]

rankPage[0].classList.add("on")
rankList[0].classList.add("on")

layer.forEach((e,i)=>{
    e.addEventListener("click", function(){
        if(layer[i].classList.contains("on")){
            layer.forEach((item)=>{
                item.classList.remove("on")
            })
            layerContent.forEach((item)=>{
                item.classList.remove("on")
            })
        }else{
            layer.forEach((item)=>{
                item.classList.remove("on")
            })
            layer[i].classList.add("on")
            layerContent.forEach((item)=>{
                item.classList.remove("on")
            })
            layerContent[i].classList.add("on")
            rankPage.forEach((item)=>{
                item.classList.remove("on")
            })
            rankPage[0].classList.add("on")
        }
    })
})

rankPage.forEach((e,i)=>{
    e.addEventListener("click", function(){
        rankPage.forEach((item)=>{
            item.classList.remove("on")
        })
        rankPage[i].classList.add("on")
        rankList.forEach((item)=>{
            item.classList.remove("on")
        })
        rankList[i].classList.add("on")
        if(i == 0){
            $ratePoster.forEach((item)=>{
                item.style.display = "none"
            })
            $rankPoster.forEach((item)=>{
                item.style.display = "none"
            })
            $ratePoster[0].style.display = "block"
        }else{
            $rankPoster.forEach((item)=>{
                item.style.display = "none"
            })
            $ratePoster.forEach((item)=>{
                item.style.display = "none"
            })
            $rankPoster[0].style.display = "block"
        }
    })
})


$ratePoster[0].style.display = "block"

$rate.forEach((e,i)=>{
    e.addEventListener("mouseover", function(){
        $ratePoster.forEach((item)=>{
            item.style.display = "none"
        })
        $ratePoster[i].style.display = "block"
        $rankPoster.forEach((item)=>{
            item.style.display = "none"
        })
    })
})
$rank.forEach((e,i)=>{
    e.addEventListener("mouseover", function(){
        $rankPoster.forEach((item)=>{
            item.style.display = "none"
        })
        $rankPoster[i].style.display = "block"
        $ratePoster.forEach((item)=>{
            item.style.display = "none"
        })
    })
})

$mainMenu.forEach((e,i)=>{
    e.addEventListener("mouseover", function(){
        $mainMenu.forEach((item,index)=>{
            item.classList.remove("on")
            $subMenu[i].classList.remove("on")
        })
        e.classList.add("on")
        $subMenu[i].classList.add("on")
    })
})

const $btnPlay = document.querySelector(".swiper-button-play")
const $btnPause = document.querySelector(".swiper-button-pause")

const thumbs_swiper = new Swiper(".thumbs-slide",{
    // thumbs: {
    //     swiper: thumbs_swiper
    // },
    // autoplay: {
    //     delay: 3000,
    // },
    // slidesPerView: 1,
    // direction: "vertical",
    
     
})

const swiper = new Swiper(".swiper",{
    // thumbs: {
    //     swiper: thumbs_swiper
    // },
    autoplay: {
        delay: 3000,
        // reverseDirection: true
    },
    // slidesPerView: 1,
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
    navigation : {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    // changeLanguageDirection(ltr)
    // slideNextTransitionEnd: {
    //     swipeDirection: next
    // }
    allowTouchMove : false,
    // on: {
    //     slideNextTransitionEnd: function(){
    //         this.slides.forEach(element => {
    //         element.childNodes[1].dataset.swiperParallaxY = '0';
    //         });
    //         this.slides[active].childNodes[1].dataset.swiperParallaxY = '100%';
    //     },
    //     slidePrevTransitionEnd: function(){
    //         this.slides.forEach(element => {
    //         element.childNodes[1].dataset.swiperParallaxY = '0';
    //         });
    //         this.slides[active].childNodes[1].dataset.swiperParallaxY = '100%';
    //     },
    // }
    // on: {
    //     slideChange : function(){
            
    //     },
    // },

})

$btnPlay.addEventListener("click", function(){
    swiper.autoplay.start();
    thumbs_swiper.autoplay.start();
    $btnPlay.style.display = "none"
    $btnPause.style.display = "block"
})
$btnPause.addEventListener("click", function(){
    swiper.autoplay.stop();
    thumbs_swiper.autoplay.stop();
    $btnPlay.style.display = "block"
    $btnPause.style.display = "none"
})

thumbs_swiper.controller.control = swiper
swiper.controller.control = thumbs_swiper

