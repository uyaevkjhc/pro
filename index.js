window.addEventListener('load', function () {

    let list = document.querySelector('.list');
    let oBtnRight = document.querySelector('.btn_right');
    let oBtnLeft = document.querySelector('.btn_left');
    let point = document.querySelectorAll('.point');
    let wrap = document.querySelector('.wrap');

    // 第几层图片展示【默认第一张0已经显示】
    let index = 0;

    //去掉所有人
    let clearOn = function () {
        for (let i = 0; i < list.children.length; i++) {
            list.children[i].className = 'item';
        }
        for (let i = 0; i < point.length; i++) {
            point[i].className = 'point';
        }
    }

    // 留下自己
    let addOn=function() {

        // 留下自己的类名
        list.children[index].className = 'item on';
        point[index].className = 'point tab_act';
    }
    wrap.addEventListener('mouseenter',function() {
        clearInterval(timer);
        timer=null;
    })
    wrap.addEventListener('mouseleave',function() {
        timer = setInterval(function () {
            // 手动调用点击事件
            oBtnRight.click();
        }, 1000);
    })

    // 右侧按钮点击事件监听
    oBtnRight.addEventListener('click', function () {
        index++;
        if (index > list.children.length - 1) {
            index = 0;
        }

        //去掉所有人[去掉所有类名]
        clearOn();

         // 留下自己的类名
        addOn();
        // animate(list,targent,callback);

    })

    // zuo侧按钮点击事件监听
    oBtnLeft.addEventListener('click', function () {
        if (index == 0) {
            index = list.children.length;
        }
        index--;

        //去掉所有人[去掉所有类名]
        clearOn();

        // 留下自己的类名
        addOn();
    })
    //点击小圆圈变换图片

    for (let i = 0; i < point.length; i++) {
        point[i].addEventListener('mouseenter', function () {
            // 获取标签中的数据
            let pointIndex = this.getAttribute('data-index');
            // console.log(pointIndex);
            // 下标等价
            index = pointIndex;

            //去掉所有人[去掉所有类名]
            clearOn();

            // 留下自己的类名
            addOn();
        })
    }
    let timer=setInterval(function() {
        oBtnRight.click();
    },1000);
})