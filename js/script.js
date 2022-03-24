//header style
$('#nav>ul').hover(function(){
    $('#header').css('background','#fff');
    $('#header .logo img').attr('src','./img/main/logo_sub.png');
    $('#header .gnb>li>a').css('color','#000');
    $('#header .gnb>.more-btn>a').css('background','url(./img/main/bg_global_on.png) right 30% no-repeat');
    $('#header .etc_btn .search_btn img').attr('src','./img/main/icon_search.jpg');
    $('#header .etc_btn .menu_btn img').attr('src','./img/main/icon_menu_b.png');
    $('#header .etc_btn .search_btn').addClass('on');
},function(){
    $('#header').css('background','none');
    $('#header .logo img').attr('src','./img/main/logo_main.png');
    $('#header .gnb>li>a').css('color','#fff');
    $('#header .etc_btn .search_btn img').attr('src','./img/main/icon_search.png');
    $('#header .etc_btn .menu_btn img').attr('src','./img/main/icon_menu.png');
    $('#header .gnb>.more-btn>a').css('background','url(./img/main/bg_global.png) right 30% no-repeat');
    $('#header .etc_btn .search_btn').removeClass('on');
});

//Main slide - slide1
let current=0;
let slide1=$('#banner .slider-container li');
let arrowRight1=$('.rightBtn');
let arrowleft1=$('.leftBtn');
let pager=$('.pager span');
let timer;

slider1();
function slider1(){
    timer=setInterval(function(){
        let prev=slide1.eq(current);
        move(prev, 0,'-100%')
        current++;
        if(current==slide1.size()){current=0;}
        let next=slide1.eq(current);
        move(next, '100%', 0);
        $('.pager').find('span').removeClass('active').eq(current).addClass('active');
        if(current==pager.size()){current=0; pager.eq(0).addClass('active')};
    },4000); 
    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500)
    };
};

function move(tg, start, end){
    tg.css('left', start).stop().animate({left:end},500)

};

arrowRight1.click(function(){
    let prev=slide1.eq(current);
    move(prev, 0,'-100%')
    current++;
    if(current==slide1.size()){current=0;}
    let next=slide1.eq(current);
    move(next, '100%', 0);
    $('.pager').find('span').removeClass('active').eq(current).addClass('active');
    if(current==pager.size()){current=0; pager.eq(0).addClass('active')};
});

arrowleft1.click(function(){

    let prev=slide1.eq(current);
    move(prev, 0,'100%')
    current--;
    if(current==slide1.size()){current=0;}
    let next=slide1.eq(current);
    move(next, '-100%', 0);
    $('.pager').find('span').removeClass('active').eq(current).addClass('active');
    if(current==-pager.size()){current=0; pager.eq(0).addClass('active')};
});


$('.slider-container').hover(function(){
    clearInterval(timer);
}, function(){
    slider1();
});

$('.pp-btn .pause img').click(function(){
    $(this).attr('src','./img/main/main_slide_play.png');
    clearInterval(timer);
    $(this).click(function(){
        $(this).attr('src','./img/main/main_slide_stop.png');
        slider1();
    })
});

// news tab
$('.news1box li').click(function(){
    $(this).addClass('on').siblings('li').removeClass('on');
    $(this).parent('.news-menu').next('.news2').addClass('active');
});


$('.sns-inner>ul>li').click(function(){
    $(this).find('>ul').addClass('on').parent('li').siblings('li').find('ul').removeClass('on');
    $(this).addClass('on').siblings('li').removeClass('on');
});

//notice slide - slide2


//slide2
/* let slide2=$('.notice .notice-slide li');

slider2();
function slider2(){
    timer=setInterval(function(){
        let prev=slide2.eq(current);
        move(prev, 0,'-100%')
        current++;
        if(current==slide2.size()){current=0;}
        let next=slide2.eq(current);
        move(next, '100%', 0);
    },4000);
    
    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500)
    };
};

$('.notice .notice-slide').hover(function(){
    clearInterval(timer);
}, function(){
    slider2();
});
 */


// $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();


// let move=$('#banner .slider-container li');
// let arrowRight=$('.rightBtn')
// let arrowleft=$('.leftBtn')
// let timer;
// let current=0;
// let pager=$('.pager a');
// // console.log(liWidth);

// slide();
// function slide(){
//     timer=setInterval(function(){
//         move.animate({left: '-100%'},500,function(){
//             $('.slider-container li:first').insertAfter($('.slider-container li:last'));
//             $(this).css({left: 0});

//             /*  current++; */
//             /*$(this).next('.pager').find('span').removeClass('on').eq(current).addClass('on');
//             if(current==pager.size()){current=0; pager.eq(0).addClass('on')} */
//         });
//     },2000);
// }
