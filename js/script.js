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
arrowRight1.hover(function(){
    clearInterval(timer);
}, function(){
    slider1();
})

arrowleft1.hover(function(){
    clearInterval(timer);
}, function(){
    slider1();
})

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

let noRepeat = true;
$('.pp-btn .pause img').click(function(){
    if(noRepeat === true){
        $(this).attr('src','./img/main/main_slide_play.png');
        clearInterval(timer);
        noRepeat = false;
    }else{
        $(this).attr('src','./img/main/main_slide_stop.png');
        slider1();
        noRepeat = true;
    }
});

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

// news tab
$(".news1box li").click(function() {
    let idx = $(this).index();
    $(".news1box li").removeClass("on");
    $(".news1box li").eq(idx).addClass("on");
    $(".news-contents > ul").hide();
    $(".news-contents > ul").eq(idx).show();
});

$('.sns-inner>ul>li').click(function(){
    $(this).find('>ul').addClass('on').parent('li').siblings('li').find('ul').removeClass('on');
    $(this).addClass('on').siblings('li').removeClass('on');
});

//notice slide - slide2
let slide2=$('.notice .notice-slide li');
let current1=0;
let timer2;
let arrowLeft=$('.arrowLeft');
let arrowRight=$('.arrowRight');
let p=$('.number > p');

slider2();
function slider2(){
    timer2=setInterval(function(){
        let prev=slide2.eq(current1);
        let numP=p.eq(current1);
        move(prev, 0,'-100%')
        numP.removeClass('on');
        current1++;
        if(current1==slide2.size()){current1=0;}
        let next=slide2.eq(current1);
        let numPn=p.eq(current1);
        move(next, '100%', 0);
        numPn.addClass('on');
    },4000);
    
    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500)
    };
};

arrowLeft.click(function(){
        let prev=slide2.eq(current1);
        let numP=p.eq(current1);
        move(prev, 0,'100%')
        numP.removeClass('on');
        current1--;
        if(current1==slide2.size()){current1=0;}
        let next=slide2.eq(current1);
        let numPn=p.eq(current1);
        move(next, '-100%', 0);
        numPn.addClass('on');
})
arrowRight.click(function(){
        let prev=slide2.eq(current1);
        let numP=p.eq(current1);
        move(prev, 0,'-100%')
        numP.removeClass('on');
        current1++;
        if(current1==slide2.size()){current1=0;}
        let next=slide2.eq(current1);
        let numPn=p.eq(current1);
        move(next, '100%', 0);
        numPn.addClass('on');
})

let noRepeat2 = true;
$('.info1 .arrow .arrowPause').click(function(){
    if(noRepeat2 === true){
        $(this).attr('src','./img/main/arrow_play.jpg');
        clearInterval(timer2);
        noRepeat2 = false;
    }else{
        $(this).attr('src','./img/main/arrow_pause.jpg');
        slider2();
        noRepeat2 = true;
    }
});

$('.notice .notice-slide').hover(function(){
    clearInterval(timer2);
}, function(){
    slider2();
});