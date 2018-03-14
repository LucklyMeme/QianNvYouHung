//------------------------------------------------------------------banner轮播图
var box = document.getElementById("lunbotu");
var screenBox = box.children[0];//可视区域
var imgWid = screenBox.offsetWidth;//图片宽度
var ul = screenBox.children[0];//要运动的ul
var lisUl = ul.children;//所有的图片li
var ol = screenBox.children[1];//放置小方块的位置
var lisOl = ol.children;//要操作的小方块（默认没有内容，添加后会自动增加）
var arrBox = box.children[1];//左右箭头的父盒子
var arrLeft = arrBox.children[0];
var arrRight = arrBox.children[1];
console.log(imgWid);
console.log(box);
//2 动态创建元素部分(小方块创建)
var li;
for (var i = 0; i < lisUl.length; i++) {
    li = document.createElement("li");
    ol.appendChild(li);
}
//2.1 给第一个小方块设置默认颜色
lisOl[0].className = "current";
//3 简单轮播图效果
for (i = 0; i < lisOl.length; i++) {
    lisOl[i].index = i;
    lisOl[i].onmouseover = function () {
        //----添加步骤：点击按钮1时，判断，如果当前显示的为假的第一张，直接抽回到0
        if (count == lisUl.length - 1) {
            ul.style.left = 0 + "px";
//        count = 0;
        }
        //点击按钮变色效果
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className = "";
        }
        this.className = "current";
        //根据当前按钮的索引值设置ul的运动位置
        animate(ul, -this.index * imgWid);
        //由于需要让左右箭头操作与小方块操作联动，需要在点击小方块时同步count的值，跟当前按钮索引值相同
        count = this.index;
    }
}


//4 左右焦点图效果

var count = 0;//用于记录滚出可视区域的图片张数
//对ul中的第一个li进行克隆操作，为了制作无缝滚动效果
ul.appendChild(lisUl[0].cloneNode(true));

arrRight.onclick = function () {
    //点击右按钮时检测，如果当前显示的为假的第一张，再次点击右按钮时需要先进行抽回操作，然后再进行滚动即可
    if (count == lisOl.length) {//lisOl.length与lisUl.length-1的值相同，使用哪个都可以
        ul.style.left = 0 + "px";
        //ul的位置需要和count的值同步，设置left为0后，再将count设置为0
        count = 0;
    }
    count++;
    animate(ul, -count * imgWid);

    //点击左右按钮时，设置小方块变色效果
    //根据count的值，设置对应的小方块变色即可
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }
    //如果count为5,lisOl.length,设置lisOl[0]类名操作
    if (count == lisOl.length) {
        lisOl[0].className = "current";
    } else {
        lisOl[count].className = "current";
    }
};
arrLeft.onclick = function () {
    //当显示的图片为第一张时，如果点击左按钮，需要抽回到假的第一张显示的位置，count也需要对应设置
    if (count == 0) {
        ul.style.left = -(lisUl.length - 1) * imgWid + "px";
        count = lisOl.length;
    }
    count--;
    animate(ul, -count * imgWid);
    //根据count的值，设置对应的小方块变色即可
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }
    lisOl[count].className = "current";
}
//5 自动播放
//间隔一段时间，执行一下右按钮的所有功能即可
var timer = null;
//timer = setInterval(fun,2000);
//元素.click(); 用于直接触发标签的点击事件,不能采用函数体的书写形式
timer = setInterval(function () {
    arrRight.click();
}, 4000);

//鼠标移入移出，对自动播放进行取消和重新设置
//鼠标移入移出显示隐藏箭头
box.onmouseover = function () {
    //arrBox.style.display = "block";
    clearInterval(timer);
};
box.onmouseout = function () {
    arrBox.style.display = "none";
    timer = setInterval(function () {
        arrRight.click();
    }, 4000);
};
function animate(element, target) {
    clearInterval(element.timer);//清除旧的定时器，保证匀速运动，防止加速效果
    element.timer = setInterval(function () {
        //1 获取元素当前位置 使用offsetLeft属性
        var current = element.offsetLeft;
        //2 设置步长
        var step = (target - current) / 10;
        //根据正负确定取值
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        current = current + step;
        element.style.left = current + "px";
        if (current == target) {
            clearInterval(element.timer)
        }
    }, 20);
}

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


//新闻列表
$(function () {
    $("#banner .news .tab li").mouseenter(function () {
        var index = $(this).index();
        //根据当前li的索引值获取底部对应的div进行操作
        $("#banner .news .neirong").eq(index).addClass("selected").siblings().removeClass("selected");
    })
});


//顶部导航栏
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



$(function () {
    $("#footer .videos .bottom .right p").mouseenter(function () {
        $(this).children("span").stop().animate(
            {bottom:0}
        )
    });
    $("#footer .videos .bottom .right p").mouseleave(function () {
        $(this).children("span").stop().animate(
            {bottom:-35}
        )
    })
})