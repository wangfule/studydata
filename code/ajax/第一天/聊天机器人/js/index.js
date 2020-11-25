$(function () { 

    // let lis = []

    function ltMsg() { 
        let inpTxt = $('.input_txt').val().trim();
        if(inpTxt.length == 0){
            return alert('消息不能为空哦!')
        }
        // 把自己的话添加上去
        var userStr = `
        <li class="right_word">
             <img src="img/person02.png" /> <span>${inpTxt}</span>
        </li>
        `

        $('.talk_list').append(userStr);

        // lis.push(userStr);
        // $('.talk_list').empty().append(lis.join(''));
        $('.input_txt').val('')
        resetui()

        
        // 获取回复的话
        
        $.get('http://www.liulongbin.top:3006/api/robot',{spoken:inpTxt},function(res){
            // console.log(res);

            
            let robStr = `
            <li class="left_word">
                <img src="img/person01.png" /> <span>${res.data.info.text}</span>
            </li>
            `
            // 把加上去的数组渲染上去
            $('.talk_list').append(robStr);


            // lis.push(robStr);
            // $('.talk_list').empty().append(lis.join(''));
            resetui()

            $.get('http://www.liulongbin.top:3006/api/synthesize',{text:res.data.info.text},function(res){
                $('#voice').attr('src',res.voiceUrl)
                // console.log(res.voiceUrl);
            })


        })
     }

    $('.input_sub').on('click',function(){
        ltMsg();
    })

    $('.input_txt').on('keyup',function (e) { 
        if(e.keyCode == 13){
            ltMsg();
        }
     })
 })