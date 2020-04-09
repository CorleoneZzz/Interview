// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
// 语法：function.call(thisArg, arg1, arg2, ...)
//变更函数调用者示例
function foo() {
    console.log(this.name)
}
// 测试
const obj = {
    name: '写代码像蔡徐抻'
};
obj.foo = foo;   // 变更foo的调用者
obj.foo();       // '写代码像蔡徐抻'
// 那么以此类推call的原理如下
Function.prototype.myCall = function(thisArg, ...args) {
    thisArg.fn = this;              // this指向调用call的对象,即我们要改变this指向的对象里的函数
    return thisArg.fn(...args)     // 执行函数并return其执行结果(注：对应调call和apply都会自动执行函数的特性)
};
// 升级版
Function.prototype.myCall = function(thisArg, ...args) {
    if(typeof this !== 'function') {
        throw new TypeError('Bind must be called on a function')
    }
    const fn = Symbol('fn');        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    thisArg = thisArg || window;    // 若没有传入this需要指向的对象, 默认绑定window对象
    thisArg[fn] = this;              // this指向调用call的对象,即我们要改变this指向的函数
    // const result = thisArg[fn](...args);  // 执行当前函数
    // delete thisArg[fn];          // 删除我们声明的fn属性
    // return result;             // 返回函数执行结果
    return thisArg[fn](...args);
};

//测试
foo.myCall(obj);     // 输出'写代码像蔡徐抻'

