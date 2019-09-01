// 函数默认参数
function show({x = 0, y = 0} = {}) {
    console.log(x, y)
}

show()