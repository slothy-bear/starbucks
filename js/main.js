const searchEl = document.querySelector('.search');
const serachInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    serachInputEl.focus();
});

serachInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    serachInputEl.setAttribute('placeholder', '통합검색');
});
serachInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    serachInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY>500){
        //to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        }),
        gsap.to('toTopEl', .2, {
            x: 0
        });
    } else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        }),
        gsap.to('toTopEl', .2, {
            x: 100
        })
    };
}, 300));
// _.throttle(함수,시간)


toTopEl.addEventListener('click',function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1,{
        delay: (index +1)* .7,
        opacity: 1
    });
});


/*선택자, 옵션*/
new Swiper('.notice-line .swiper-container', {
    direction:'vertical',
    autoplay: true,
    loop:true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView:3,
    spaceBetween:10,
    centeredSlides:true,
    autoplay: {
        delay:5000
    },
    loop:true,
    pagination:{
        el:'.promotion .swiper-pagination',//페이지 번호 요소 선택자
        clickable: true
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container',{
    autoplay : true,
    loop : true,
    spaceBetween : 30,
    slidesPerView : 5,
    navigation: {
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    } else {
        //보임처리
        promotionEl.classList.remove('hide');
    }
});


// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}



function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEls){
    new ScrollMagic
        .Scene({
            triggerElement:spyEls,
            triggerHook: .8
        })
        .setClassToggle(spyEls,'show')
        .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();