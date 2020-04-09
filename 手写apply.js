// apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
// 语法：func.apply(thisArg, [argsArray])
// apply()和call()类似，区别在于call()接收参数列表，而apply()接收一个参数数组，所以我们在call()的实现上简单改一下入参形式即可
Function.prototype.myApply = function(thisArg, args) {
    // 判断是不是传入的对象里的函数这种场景使用的call/apply
    if(typeof this !== 'function') {
        throw new TypeError('Bind must be called on a function')
    }
    // 我觉得应该加一个参数类型的判断,apply必须是数组
    const fn = Symbol('fn');      // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    thisArg = thisArg || window;   // 若没有传入this, 默认绑定window对象
    thisArg[fn] = this;             //  this指向调用call的对象,即我们要改变this指向的函数
    const result = thisArg[fn](...args); // 执行当前函数
    delete thisArg[fn];             // 删除我们声明的fn属性
    return result                  // 返回函数执行结果
};

//测试
foo.myApply(obj, []);   // 输出'写代码像蔡徐抻'
