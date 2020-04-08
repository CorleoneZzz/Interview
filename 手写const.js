function __const (data, value) {
    window.data = value; // 把要定义的data挂载到window下，并赋值value
    Object.defineProperty(window, data, {
        enumerable: false,
        configurable: false,
        // 数据属性
        writable: true,
        value: value,
        // 访问器属性
        // get: function () {
        //     return value
        // },
        // set: function (data) {
        //     if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！
        //         throw new TypeError('Assignment to constant variable.')
        //     } else {
        //         return value
        //     }
        // }
    })
};
__const('a', 10);
console.log(a);
delete a;
console.log(a);
for (let item in window) { // 因为const定义的属性在global下也是不存在的，所以用到了enumerable: false来模拟这一功能
    if (item === 'a') { // 因为不可枚举，所以不执行
        console.log(window[item])
    }
}
a = 20; // 报错
