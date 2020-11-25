$(function(){
    // 点击全选按钮，下面的选项都选上
    $('.checkall').change(function(){
        $('.j-checkbox,.checkall').prop('checked',$(this).prop('checked'))
        js() ;

        if($(this).prop('checked') == true){
            $('.cart-item').addClass('check-cart-item')
        }
        else{
            $('.cart-item').removeClass('check-cart-item')
        }
    })

    //反选
    $('.j-checkbox').change(function(){
        if($('.j-checkbox:checked').length == $('.j-checkbox').length){
        
            $('.checkall').prop('checked',true)
        }else{
            $('.checkall').prop('checked',false)
        }
        console.log($(this).prop('checked'));
        if(($(this).prop('checked') == true)){
            $(this).parents('.cart-item').addClass('check-cart-item')
        }else{
            $(this).parents('.cart-item').removeClass('check-cart-item')
        }


        js() ;

    })

    // 数量加号
    $('.increment').click(function(){

       var a=$(this).siblings('.itxt').val();
       a++
       $(this).siblings('.itxt').val(a)
        xiaoji($(this),a)

        js() ;
        
    })

    // 数量减号
    $('.decrement').click(function(){
        var a=$(this).siblings('.itxt').val();
        if(a == 1){
            return false
        }
       a--
       $(this).siblings('.itxt').val(a)
        xiaoji($(this),a)

        js() ;
    })

    // 括号改值
    $('.itxt').change(function(){
        var a=$(this).val();
        if(a<= 0){
            a=1;
        }
        $(this).val(a);
        xiaoji($(this),a)

        js() ;
    })


    // 每个商品小结的函数
    function xiaoji(ele,sum){
       var price =  ele.parents('.p-num').siblings('.p-price').text().substr(1)
       ele.parents('.p-num').siblings('.p-sum').text('￥'+(price*sum).toFixed(2))
    }



    // 已选商品数  总价格 函数

    function js(){
        var num = 0
        var price = 0
        $('.j-checkbox:checked').each(function(index,eleDOM){
          num +=  parseInt($(eleDOM).parent('.p-checkbox').siblings('.p-num').find('.itxt').val());
          price += $(eleDOM).parent('.p-checkbox').siblings('.p-sum').text().substr(1)-0;
        })
        $('.amount-sum em').text(num)
        $('.price-sum em').text('￥'+price.toFixed(2))
    }



    //  删除本行
    $('.p-action').click(function(){
        $(this).parent('.cart-item').remove();
        js();
    })

    // 删除选中商品

    $('.remove-batch').click(function(){
        $('.j-checkbox:checked').each(function(index,eleDOM){
            $(this).parents('.cart-item').remove();
        })
        js();
    })

    // 清空购物车

    $('.clear-all').click(function(){
        $('.cart-item-list').empty();
        js();
    })
    


})  
