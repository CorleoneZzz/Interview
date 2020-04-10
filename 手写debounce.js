// https://segmentfault.com/a/1190000016261602
// 防抖，即短时间内大量触发同一事件，只会执行一次函数，实现原理为设置一个定时器，
// 约定在xx毫秒后再触发事件处理，每次触发事件都会重新设置计时器，直到xx毫秒内无第二次操作，
// 防抖常用于搜索框/滚动条的监听事件处理，如果不做防抖，每输入一个字/滚动屏幕，都会触发事件处理，造成性能浪费。
// 思路就是
// function debounce(func, delay) {
//     let lastFn = null;
//     return function (args) {
//         if (lastFn) clearTimeout(lastFn); // 先移除上次还处于延迟中的任务，然后重新发起一次新的延迟等待。
//         lastFn = setTimeout(() => {func(args)}, delay)
//     }
// }
// 正式版
function debounce(func, delay) {
    if (typeof func !== 'function') { // 参数类型为函数
        throw new TypeError('func is not a function');
    }
    let lastFn = null; // lastFn是定时器的标识符，具有唯一性
    return function (args) {
        let that = this;
        let _args = args;
        if (lastFn) clearTimeout(lastFn);
        lastFn = setTimeout(() => {
            func.call(that, _args)
        }, delay);
    }
}
// 其实很简单，就是每次调用函数前，先移除上次还处于延迟中的任务，然后重新发起一次新的延迟等待。
// 这里之所以要通过 call 方式来修改原函数的 this，是因为，原函数通过参数进行传递时，是只会被当做普通函数处理，不管原函数本来是否挂载在某个对象上。
// 所以，如果 debounce 内部直接以 fn() 方式调用原函数，会导致原函数的内部 this 指向发生变化。

// 调用方法如下
function fn(content) {
    console.log('ajax request ' + content)
}
let inputEle = document.getElementById('debounce');
let debounceFn = debounce(fn, 500); // 返回debounce return的函数
inputEle.addEventListener('keyup', function (e) {
    debounceFn(e.target.value) // 这个时候执行debounce return的函数
});
