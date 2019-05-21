// bannerSlider.js

var pIndex; //이전 인덱스
var cIndex; //현재 인덱스
var imgWidth;
var imgLength;
var nStep;

$(function() {
    //요소 초기화
    init();

    //이벤트 요소 초기화
    initEventListener();

    //타이머 초기화
    auto();
});

function init() {
    this.pIndex = 0;
    this.cIndex = 0;
    this.imgWidth = $("#img_wrap > ul > li").width();
    this.imgLength = $("#img_wrap > ul > li").length;

    this.nStep = 0;
}

function initEventListener() {
    //초기위치
    $("#img_wrap > ul > li").eq(cIndex).css({left: 0});

    //이벤트
    $("#banner > .btn_next").click(function() {
        cIndex++;
        nStep = imgWidth;

        if (cIndex > imgLength - 1) {
            cIndex = 0;
        }

        pIndex = moveBanner(cIndex, pIndex, nStep);
    });

    $("#banner > .btn_prev").click(function() {
        cIndex--;
        nStep = -imgWidth;

        if (cIndex < 0) {
            cIndex = imgLength - 1;
        }

        pIndex = moveBanner(cIndex, pIndex, nStep);
    });
}

function moveBanner(current, prev, step) {
    $("#img_wrap > ul > li").eq(current).css({
        left: step
    });
    $("#img_wrap > ul > li").eq(current).stop().animate({
        left: 0
    }, 500);
    $("#img_wrap > ul > li").eq(prev).stop().animate({
        left: -step
    }, 500);

    prev = current;

    return prev;
}

function auto() {
    setInterval(function() {
        cIndex++;

        if (cIndex > imgLength - 1) {
            cIndex = 0;
        }

       pIndex = moveBanner(cIndex, pIndex, imgWidth);
    }, 5000);
}