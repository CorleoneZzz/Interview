//var声明，声明的是全局变量
for (var i = 0; i < 10; i++) {
    //TODO
}
// alert(i); ----10


//var的变量提升
function fn() {
    // alert(a);----undefined 等同于 var a;alert(a);a=5
    var a = 5;
}

fn();


//let 块级作用域{}
if (true) {
    let a = 12;
    //a只能在这里使用
}
// alert(a);----报错


//之前的块级作用域都得通过IIFE(立即执行函数来执行),因为只有函数内才有块级作用域
(function () {
    //TODO
})()

//let 不存在变量提升，且在同一个作用域内不能重复定义
let a = 12;

// let a = 13;

function ln() {
    // alert(a);----报错，TDZ（暂时性死区），let定义的变量在之前使用，都是报错，必须先定义再使用
    let a = 5;
}

ln();


//for循环里面是父级作用域，里面是子级作用域，不发生冲突
for (let i = 0; i < 3; i++) {
    //TODO
    let i = 'abc';
    console.log(i)
}
