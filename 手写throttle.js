// 防抖是延迟执行，而节流是间隔执行，函数节流即每隔一段时间就执行一次，实现原理为设置一个定时器，约定xx毫秒后执行事件，如果时间到了，那么执行函数并重置定时器，
// 和防抖的区别在于，防抖每次触发事件都重置定时器，而节流在定时器到时间后再清空定时器
function throttle(func, delay) {
    if (typeof func !== 'function') { // 参数类型为函数
        throw new TypeError('func is not a function');
    }
    let lastFn = null; // 初始化，赋值防止是undefined
    return function (args) { // 每次执行的是这部分，return的函数，下面的lastFn = null和上面的意义不一样。
        let that = this;
        let _args = args;
        if (!lastFn) {
            lastFn = setTimeout(() => {
                lastFn = null;
                func.call(that, _args)
            }, delay)
        }
    }
}

// 实现方式2：使用两个时间戳prev旧时间戳和now新时间戳，每次触发事件都判断二者的时间差，如果到达规定时间，执行函数并重置旧时间戳
function throttle(func, delay) {
    if (typeof func !== 'function') { // 参数类型为函数
        throw new TypeError('func is not a function');
    }
    var prev = 0;
    return function(args) {
        let now = Date.now();
        let that = this;
        let _args = args;
        if (now - prev > delay) {
            func.call(that, _args);
            prev = now;
        }
    }
}

// 调用方法如下
function fn(content) {
    console.log('ajax request ' + content)
}
let inputEle = document.getElementById('debounce');
let debounceFn = throttle(fn, 500); // 返回debounce return的函数, 给lastFn赋值
inputEle.addEventListener('keyup', function (e) {
    debounceFn(e.target.value) // 这个时候执行debounce return的函数
});
