// https://wangdoc.com/javascript/oop/this.html
// part 1
// 不管是什么场合，this都有一个共同点：它总是返回一个对象。简单说，this就是属性或方法“当前”所在的对象
// this.property this就代表property属性当前所在的对象。
var person = {
    name: '张三',
    describe: function () {
        return '姓名：'+ this.name;
    }
};
person.describe();
// "姓名：张三"

// 下面代码中，函数f内部使用了this关键字，随着f所在的对象不同，this的指向也不同。只要函数被赋给另一个变量，this的指向就会变。
// part 2
function f() {
  return '姓名：'+ this.name;
}

var A = {
  name: '张三',
  describe: f
};

var B = {
  name: '李四',
  describe: f
};

A.describe(); // "姓名：张三"
B.describe(); // "姓名：李四"

// part3
var f = function () {
    console.log(this.x);
};

var x = 1;
var obj = {
    f: f,
    x: 2,
};

// 单独执行
f(); // 1

// obj 环境执行
obj.f(); // 2
// 上面代码中，函数f在全局环境执行，this.x指向全局环境的x；在obj环境执行，this.x指向obj.x。

// part4
// this主要有以下几个使用场合。
// part4.1 全局环境使用this，它指的就是顶层对象window。
this === window; // true
function f() {
  console.log(this === window);
}
f(); // true
// 上面代码说明，不管是不是在函数内部，只要是在全局环境下运行，this就是指顶层对象window。

// part4.2 构造函数中的this，指的是实例对象。
var Obj = function (p) {
    this.p = p;
};
var o = new Obj('Hello World!');
o.p; // "Hello World!"

// part4.3 对象的方法
// 如果对象的方法里面包含this，this的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变this的指向。

