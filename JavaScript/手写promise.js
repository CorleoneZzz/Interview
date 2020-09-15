// promise的使用
function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;
}
runAsync1()
    .then(function(data){
        console.log(data);
        console.log(a)
        return runAsync2();
    })
    .catch(function(data){
        console.log(data);
        return runAsync3();
    })
    .then(function(data){
        console.log(data);
    });    function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;
}
runAsync1()
    .then(function(data){
        console.log(data);
        console.log(a)
        return runAsync2();
    })
    .catch(function(data){
        console.log(data);
        return runAsync3();
    })
    .then(function(data){
        console.log(data);
    });
// 手写promise
function Promise(executor) {
    this.state = 'pending'; //状态
    this.value = undefined; //成功结果
    this.reason = undefined; //失败原因
    this.onFulfilledFunc = [];//保存成功回调
    this.onRejectedFunc = [];//保存失败回调

    executor(resolve, reject); //马上执行

    function resolve(value) {
        //当状态为pending时再做更新
        if (_this.state === 'pending') {
            _this.value = value;//保存成功结果
            //依次执行成功回调
            _this.onFulfilledFunc.forEach(fn => fn(value));
            _this.state = 'resolved';
        }
    }

    function reject(reason) {
        //当状态为pending时再做更新
        if (_this.state === 'pending') {
            _this.reason = reason;//保存失败原因
            _this.onRejectedFunc.forEach(fn => fn(reason));
            _this.state = 'rejected';
        }
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    var promise2 = new Promise((resolve, reject) => {
        /**
         * 解析then返回值与新Promise对象
         * @param {Object} promise2 新的Promise对象
         * @param {*} x 上一个then的返回值
         * @param {Function} resolve promise2的resolve
         * @param {Function} reject promise2的reject
         */

        function resolvePromise(promise2, x, resolve, reject) {
            if (promise2 === x) {
                reject(new TypeError('Promise发生了循环引用'));
            }

            if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
                //可能是个对象或是函数
            } else {
                //否则是个普通值
                resolve(x);
            }
        }

        if (this.state === 'pending') {
            if (typeof onFulfilled === 'function') {
                this.onFulfilledFunc.push(onFulfilled);//保存回调
            }
            if (typeof onRejected === 'function') {
                this.onRejectedFunc.push(onRejected);//保存回调
            }
        }

        if (this.state === 'resolved') {
            //判断参数类型，是函数执行之,onFulfilled 和 onRejected 都是可选参数，所以要typeof
            if (typeof onFulfilled === 'function') {
                onFulfilled(this.value);
            }

        }
        if (this.state === 'rejected') {
            if (typeof onRejected === 'function') {
                onRejected(this.reason);
            }
        }
    }
    return promise2;
};

module.exports = Promise;
