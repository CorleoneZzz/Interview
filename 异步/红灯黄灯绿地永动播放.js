function red() {
    console.log('red')
}
function yellow() {
    console.log('yellow')
}
function green() {
    console.log('green')
}
var lighter = function (timer, cb) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            cb();
            resolve();
        }, timer)
    })
}
var step = function () {
    Promise.resolve().then(function () {
        return lighter(3000, red)
    }).then(function () {
        return lighter(2000, green)
    }).then(function () {
        return lighter(1000, yellow)
    }).then(function () {
        return step()
    })
}
step()
