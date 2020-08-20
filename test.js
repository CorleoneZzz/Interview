function runP() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(()=> {
            console.log('执行完成');
            resolve('随便说点啥111');
        }, 1000);
    });
    return p;
}

function runP1() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(()=> {
            console.log('执行完成');
            resolve('随便说点啥222');
        });
    });
    return p;
}

function runP2() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(()=> {
            console.log('执行完成');
            resolve('随便说点啥333');
        });
    });
    return p;
}
//
// runP()
// .then(function (data) {
//     console.log(data);
//     return runP1();
// }).then(function (data) {
//     console.log(data);
//     return runP2();}).then(function (data) {
//     console.log(data);
// });
Promise.race([runP(), runP1(), runP2()]).then(function (results) {
    console.log(results);
});
