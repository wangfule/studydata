window.onload = function () {

    var focus = document.querySelector('.focus')
    var arrowL = document.querySelector('.arrow-l')
    var arrowR = document.querySelector('.arrow-r')
    var ul = document.querySelector('.focus ul')

    var ullis = document.querySelectorAll('.focus ul li')
    var ol = focus.querySelector('ol')

    // 右边按钮判断第几个
    var num = 0;
    // console.log(ol);

    // console.log(arrowL, arrowR);

    // 鼠标移上去之后，出现向左向右的按钮

    focus.onmouseover = function () {
        // 当鼠标移到大框上的时候，显示左右的按钮，同时停止自动播放的轮播图
        arrowR.style.display = 'block'
        arrowL.style.display = 'block'
        clearInterval(zd)
    }
    focus.onmouseout = function () {
        // 当鼠标移出，隐藏左右按钮，把自动播放打开
        arrowR.style.display = 'none'
        arrowL.style.display = 'none'
        zd = setInterval(function () {
            arrowR.onclick();
        }, 2000)

    }

    // 手动添加下面有的小圆点
    // 判断有多少张图片，有多少张图片就加几个圆点，同时把第一个的样式加进去
    for (var i = 0; i < ullis.length; i++) {
        var li = document.createElement('li')
        ol.append(li)
        if (i == 0) {
            li.className = 'current'
        }

        // 点击下面小圆点，图片换到对应的
        // 先给每个里都加一个属相值，存储目前的是哪一个小圆点，用于后期跟轮播图对应 
        li.a = i;
        li.onclick = function () {
            // 获得图片应该移动的距离，第几个原点就以移动当前框大小倍数，把目前的图片移动上去
            var target = focus.offsetWidth * this.a
            // 因为是图片是往左走的，所以有穿进去的是负值，移动的元素是整个ul框
            animate(ul, -target)
            // 排他，把所以的小圆点的高亮都给去掉
            for (var i = 0; i < ollis.length; i++) {
                ollis[i].className = ""
            }
            // 把当前对应的原点高亮
            ollis[this.a].className = 'current'

            // 因为后期点击左右框和点击下面圆点跳转的冲突，所有把当前圆点的值直接赋给对应的原点
            num = this.a
        }

    }
    // 需要放在循环添加后面，才可以获取到所有添加的li
    var ollis = focus.querySelectorAll('ol li')


    // 点击向右按钮，图片下一个
    // 把第一个图片克隆一份，然后加到最后面，记得不要放在开头，不然会影响到上面，导致加的园点多一个
    // 最后加照片是为了解决图片的无缝滚动，不然会有白缝的问题
    var last = ullis[0].cloneNode(true);
    ul.append(last)
    arrowR.onclick = function () {
        // 先判断当前的图片是第几个，如果是最后一个，直接让他跳到第一个
        if (num == ullis.length) {
            num = 0;
            ul.style.left = 0
        }
        // 点击后，让图片往后加一个
        num++
        // 调用动画，往左移动负值
        animate(ul, -num * focus.offsetWidth)

        // x小圆点的判断，排他和当前高亮
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = ""
        }
        if (num == ullis.length) {
            ollis[0].className = 'current'
        } else {
            ollis[num].className = 'current'

        }

    }

    // 点击向左按钮，图片上一个
    arrowL.onclick = function () {
        // 如果图片是第一个，让图片换成最后一个，也就是为数字的长度，就是图片的最后一个
        if (num == 0) {
            num = ullis.length;
            // 把图片直接挪到最后一个图片的位置,防止一会移动有白缝的问题
            ul.style.left = -num * focus.offsetWidth + 'px'
        }
        // 每次点都让图片换成前一个
        num--
        // 只要是整体是忘左走,就是负值
        animate(ul, -num * focus.offsetWidth)

        // x小圆点的判断
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = ""
        }
        if (num == ullis.length) {
            ollis[0].className = 'current'
        } else {
            ollis[num].className = 'current'

        }

    }

    // 自动轮播， 没2秒调用右箭头点击事件
    var zd = setInterval(function () {
        arrowR.onclick();
    }, 2000)

}