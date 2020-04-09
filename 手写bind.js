// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
// 语法: function.bind(thisArg, arg1, arg2, ...)
// 从用法上看，似乎给call/apply包一层function就实现了bind()
Function.prototype.myBind = function(thisArg, ...args) {
    return () => {
        this.apply(thisArg, args)
    }
};
// 但我们忽略了三点：
// bind()除了this还接收其他参数，bind()返回的函数也接收参数，这两部分的参数都要传给返回的函数
// new的优先级：如果bind绑定后的函数被new了，那么此时this指向就发生改变。此时的this就是当前函数的实例
// 没有保留原函数在原型链上的属性和方法
