window.onload = function () {
    // 全部选中多选框
    var c_all = document.querySelector('.carshop_head').querySelector('input');


    // 所有店铺的全选框
    var store = document.querySelectorAll('.list_hd');
    var c_store = []
    for (var i = 0; i < store.length; i++) {
        c_store[i] = store[i].querySelector('input');
        c_store[i].a = i;
        // console.log(c_store[i]);
    }


    // 所有产品的全选框
    var chanpin = document.querySelectorAll('.list_bd')
    console.log(chanpin);
    var c_chanpin = []
    for (var i = 0; i < chanpin.length; i++) {
        c_chanpin[i] = chanpin[i].querySelectorAll('.xz')
        c_chanpin[i].a = i
    }
    // console.log();
    for (var i = 0; i < c_chanpin.length; i++) {
        for (var j = 0; j < c_chanpin[i].length; j++) {
            // 给相同店铺下的全选按钮加一个属性有同样的一个值
            c_chanpin[i][j].a = i
            // console.log(c_chanpin[i][j].a);
        }
    }
    // console.log(c_store[1].a);
    // console.log(c_chanpin[1].a);

    // 点击全选时候的变化
    c_all.onclick = function () {
        if (c_all.checked == true) {

            for (var i = 0; i < c_store.length; i++) {
                c_store[i].checked = true;
                for (var j = 0; j < c_chanpin[i].length; j++) {
                    c_chanpin[i][j].checked = true
                }
            }
        } else {
            for (var i = 0; i < c_store.length; i++) {
                c_store[i].checked = false;
                for (var j = 0; j < c_chanpin[i].length; j++) {
                    c_chanpin[i][j].checked = false
                }
            }
        }

    }

    // 点击店铺全选按钮的变化 
    var y = 0;
    for (var i = 0; i < c_store.length; i++) {
        c_store[i].onclick = function () {
            if (this.checked == true) {
                for (var i = 0; i < c_chanpin[this.a].length; i++) {
                    c_chanpin[this.a][i].checked = true
                }
                y++
            } else {
                for (var i = 0; i < c_chanpin[this.a].length; i++) {
                    c_chanpin[this.a][i].checked = false
                }
                y--
            }
            console.log("当前全选中店铺数" + y);
            console.log('店铺的数量' + c_store.length);
            if (y == c_store.length) {
                c_all.checked = true
            } else {
                c_all.checked = false

            }
        }
    }

    // 点击具体产品时候的变化
    var x = 0;
    for (var i = 0; i < c_chanpin.length; i++) {
        for (var j = 0; j < c_chanpin[i].length; j++) {
            c_chanpin[i][j].onclick = function () {
                if (this.checked == false) {
                    c_store[this.a].checked = false;
                    // console.log(c_chanpin[this.a].c = 1);
                    c_chanpin[this.a].c = --x
                } else {
                    // console.log(c_chanpin[this.a].c = ++x);

                    c_chanpin[this.a].c = ++x
                    // console.log(this.c);
                }
                if (c_chanpin[this.a].c == c_chanpin[this.a].length) {
                    c_store[this.a].checked = true;
                    x = 0

                }

            }

        }
    }


}