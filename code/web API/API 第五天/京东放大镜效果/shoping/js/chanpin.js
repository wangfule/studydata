window.onload = function () {
    var dv_img = document.querySelector('.image_big')
    var shade = document.querySelector('.shade')
    var big_phone = document.querySelector('.big_phone')
    console.log(dv_img);

    dv_img.onmouseover = function () {
        shade.style.display = 'block'
        big_phone.style.display = 'block'

        // 鼠标与框的距离
        // console.log(e.pageX);
        // 鼠标移动事件
        dv_img.onmousemove = function (e) {

            // 判断鼠标距离框的距离
            var x = e.pageX - dv_img.offsetLeft
            var y = e.pageY - dv_img.offsetTop

            // 设置框跟随鼠标移动，同时鼠标在框的中央
            shade.style.top = y - shade.offsetHeight / 2 + 'px';
            shade.style.left = x - shade.offsetWidth / 2 + 'px';

            // 不让遮罩层移出大框
            if (shade.offsetLeft < 0) {
                shade.style.left = 0
            } else if (shade.offsetLeft > dv_img.offsetWidth - shade.offsetWidth) {
                shade.style.left = dv_img.offsetWidth - shade.offsetWidth + 'px';
            }

            if (shade.offsetTop < 0) {
                shade.style.top = 0
            } else if (shade.offsetTop > dv_img.offsetWidth - shade.offsetWidth) {
                shade.style.top = dv_img.offsetWidth - shade.offsetWidth + 'px';
            }

            // 小框偏移量x * 大图可偏移量 /小图可偏移量  =  大图要偏移的量
            var a1 = shade.offsetLeft;
            var a2 = shade.offsetTop;
            // console.log();
            // 求出 大图可以偏移的量
            var b = big_phone.children[0].offsetWidth - big_phone.offsetWidth
            // 定义小图可以偏移的量
            var c = dv_img.offsetWidth - shade.offsetWidth

            big_phone.children[0].style.left = -a1 * b / c + 'px'
            big_phone.children[0].style.top = -a2 * b / c + 'px'

            // console.log(a, b, c);
            // console.log(a * b / c);


        }

    }
    dv_img.onmouseout = function () {
        shade.style.display = 'none'
        big_phone.style.display = 'none'
    }
}