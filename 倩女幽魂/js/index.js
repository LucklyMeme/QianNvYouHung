//------------------------------------------------------------------banner�ֲ�ͼ
var box = document.getElementById("lunbotu");
var screenBox = box.children[0];//��������
var imgWid = screenBox.offsetWidth;//ͼƬ���
var ul = screenBox.children[0];//Ҫ�˶���ul
var lisUl = ul.children;//���е�ͼƬli
var ol = screenBox.children[1];//����С�����λ��
var lisOl = ol.children;//Ҫ������С���飨Ĭ��û�����ݣ���Ӻ���Զ����ӣ�
var arrBox = box.children[1];//���Ҽ�ͷ�ĸ�����
var arrLeft = arrBox.children[0];
var arrRight = arrBox.children[1];
console.log(imgWid);
console.log(box);
//2 ��̬����Ԫ�ز���(С���鴴��)
var li;
for (var i = 0; i < lisUl.length; i++) {
    li = document.createElement("li");
    ol.appendChild(li);
}
//2.1 ����һ��С��������Ĭ����ɫ
lisOl[0].className = "current";
//3 ���ֲ�ͼЧ��
for (i = 0; i < lisOl.length; i++) {
    lisOl[i].index = i;
    lisOl[i].onmouseover = function () {
        //----��Ӳ��裺�����ť1ʱ���жϣ������ǰ��ʾ��Ϊ�ٵĵ�һ�ţ�ֱ�ӳ�ص�0
        if (count == lisUl.length - 1) {
            ul.style.left = 0 + "px";
//        count = 0;
        }
        //�����ť��ɫЧ��
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className = "";
        }
        this.className = "current";
        //���ݵ�ǰ��ť������ֵ����ul���˶�λ��
        animate(ul, -this.index * imgWid);
        //������Ҫ�����Ҽ�ͷ������С���������������Ҫ�ڵ��С����ʱͬ��count��ֵ������ǰ��ť����ֵ��ͬ
        count = this.index;
    }
}


//4 ���ҽ���ͼЧ��

var count = 0;//���ڼ�¼�������������ͼƬ����
//��ul�еĵ�һ��li���п�¡������Ϊ�������޷����Ч��
ul.appendChild(lisUl[0].cloneNode(true));

arrRight.onclick = function () {
    //����Ұ�ťʱ��⣬�����ǰ��ʾ��Ϊ�ٵĵ�һ�ţ��ٴε���Ұ�ťʱ��Ҫ�Ƚ��г�ز�����Ȼ���ٽ��й�������
    if (count == lisOl.length) {//lisOl.length��lisUl.length-1��ֵ��ͬ��ʹ���ĸ�������
        ul.style.left = 0 + "px";
        //ul��λ����Ҫ��count��ֵͬ��������leftΪ0���ٽ�count����Ϊ0
        count = 0;
    }
    count++;
    animate(ul, -count * imgWid);

    //������Ұ�ťʱ������С�����ɫЧ��
    //����count��ֵ�����ö�Ӧ��С�����ɫ����
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }
    //���countΪ5,lisOl.length,����lisOl[0]��������
    if (count == lisOl.length) {
        lisOl[0].className = "current";
    } else {
        lisOl[count].className = "current";
    }
};
arrLeft.onclick = function () {
    //����ʾ��ͼƬΪ��һ��ʱ����������ť����Ҫ��ص��ٵĵ�һ����ʾ��λ�ã�countҲ��Ҫ��Ӧ����
    if (count == 0) {
        ul.style.left = -(lisUl.length - 1) * imgWid + "px";
        count = lisOl.length;
    }
    count--;
    animate(ul, -count * imgWid);
    //����count��ֵ�����ö�Ӧ��С�����ɫ����
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className = "";
    }
    lisOl[count].className = "current";
}
//5 �Զ�����
//���һ��ʱ�䣬ִ��һ���Ұ�ť�����й��ܼ���
var timer = null;
//timer = setInterval(fun,2000);
//Ԫ��.click(); ����ֱ�Ӵ�����ǩ�ĵ���¼�,���ܲ��ú��������д��ʽ
timer = setInterval(function () {
    arrRight.click();
}, 4000);

//��������Ƴ������Զ����Ž���ȡ������������
//��������Ƴ���ʾ���ؼ�ͷ
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
    clearInterval(element.timer);//����ɵĶ�ʱ������֤�����˶�����ֹ����Ч��
    element.timer = setInterval(function () {
        //1 ��ȡԪ�ص�ǰλ�� ʹ��offsetLeft����
        var current = element.offsetLeft;
        //2 ���ò���
        var step = (target - current) / 10;
        //��������ȷ��ȡֵ
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        current = current + step;
        element.style.left = current + "px";
        if (current == target) {
            clearInterval(element.timer)
        }
    }, 20);
}

//��������
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


//�����б�
$(function () {
    $("#banner .news .tab li").mouseenter(function () {
        var index = $(this).index();
        //���ݵ�ǰli������ֵ��ȡ�ײ���Ӧ��div���в���
        $("#banner .news .neirong").eq(index).addClass("selected").siblings().removeClass("selected");
    })
});


//����������
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