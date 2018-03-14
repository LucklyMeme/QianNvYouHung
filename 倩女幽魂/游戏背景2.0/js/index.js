
////��������
//$(function () {
//    $(".nav>ul>li").mouseenter(function () {
//        $(this).children("ol").stop().fadeIn();
//    });
//
//    $(".nav>ul>li").mouseleave(function () {
//        $(this).children("ol").stop().fadeOut();
//    });
//
//    $("#banner .nav ul a").mouseenter(function () {
//        $(this).css("color","#f2c664");
//    });
//    $("#banner .nav>ul a").mouseleave(function () {
//        $(this).css("color","#fbfbfb")
//    });
//
//})



$(document).ready(function() {
    var interval = 4000;	//�Զ��ֲ����
    var s = 500;			//��������ʱ��
    var nowimg = 0;
    var $imageslistLis = $(".imageslist li");
    var $circles = $(".num span");
    var liAmount = $imageslistLis.length;

    //�Ұ�ť
    $(".rightBtn").click(rightButFunc);
    //�Ұ�ť��ҵ������
    function rightButFunc() {
        if(!$imageslistLis.is(":animated")){
            //�ϵ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeOut(s);
            //�ź���
            nowimg++;
            if (nowimg > liAmount - 1) {
                nowimg = 0;
            }
            //�µ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeIn(s);
            //СԲ���curҵ��
            changeCircle();
        }
    }

    //��ť
    $(".leftBtn").click(function() {
        if(!$imageslistLis.is(":animated")){
            //�ϵ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeOut(s);
            //�ź���
            nowimg--;
            if (nowimg < 0) {
                nowimg = liAmount - 1;
            }
            //�µ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeIn(s);
            //СԲ���curҵ��
            changeCircle();
        }
    });

    //СԲ��
    $circles.click(function(){
        if(!$imageslistLis.is(":animated")){
            //�ϵ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeOut(s);
            //�ź���
            nowimg = $(this).index();
            //�µ��ź���Ԫ�ص���
            $imageslistLis.eq(nowimg).fadeIn(s);
            //СԲ���curҵ��
            changeCircle();
        }
    });

    function changeCircle() {
        $circles.eq(nowimg).addClass("cur").siblings().removeClass("cur");
    }

    ////��ʱ��
    var timer = setInterval(rightButFunc,interval);

    $(".carousel").mouseenter(function(){
        clearInterval(timer);
    });

    $(".carousel").mouseleave(function(){
        clearInterval(timer);
        timer = setInterval(rightButFunc,interval);
    });
});




$(function () {
    var $li = $("#banner .nav>ul>li")
    $li.mouseenter(function () {
        $(this).children("a").animate({
            top: -7,
        }, 150)
    });
    $li.mouseleave(function () {
        $(this).children("a").animate({
            top: 0,
        }, 150)
    });
})



//顶部下拉
$(function () {
    $(".nav>ul>li").mouseenter(function () {
        $(this).children("ol").stop().fadeIn();
    });

    $(".nav>ul>li").mouseleave(function () {
        $(this).children("ol").stop().fadeOut();
    });

    $("#banner .nav ul ol a").mouseenter(function () {
        $(this).css("color", "#f2c664");
    });
    $("#banner .nav>ul ol a").mouseleave(function () {
        $(this).css("color", "#fbfbfb")
    });

})