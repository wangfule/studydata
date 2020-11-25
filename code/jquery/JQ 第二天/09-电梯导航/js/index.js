$(function(){
    
    $(document).scroll(gd)

    function gd(){
        if($(document).scrollTop() >= $('.recommend').offset().top){
            $('.fixedtool').fadeIn();
        }else {
            $('.fixedtool').fadeOut();
        }
       
        // 滚动到的距离
        $('.floor .w').each(function(index,domEle){
            if($(document).scrollTop() >= $(domEle).offset().top){
                $('.fixedtool li').eq(index).addClass('current').siblings().removeClass('current')
            }
        })
    }

    $('.fixedtool li').click(function(){
       $(this).addClass('current').siblings().removeClass('current')
    //    点击后，先把滚动事件给取消绑定
       $(document).off('scroll')

        $('html').stop().animate({
            scrollTop: $('.floor .w').eq($(this).index()).offset().top
        },function(){
            // 当动画完成后，再把滚动时间绑定上去
        $(document).on('scroll',gd)
        })
    })


})