// 对于[1, [1,2], [1,2,3]]这样多层嵌套的数组，我们如何将其扁平化为[1, 1, 2, 1, 2, 3]这样的一维数组呢
// ES6的flat()
// const arr = [1, [1,2], [1,2,3]];
// arr.flat(Infinity); // [1, 1, 2, 1, 2, 3]

// 对于树状结构的数据，最直接的处理方式就是递归
const arr = [1, [1,2], [1,2,3]];
function flat(arr) {
    let result = [];
     // 注意for of拿到的才是数组的元素，for in拿到的是index
    for (const item of arr) {
        if (item instanceof Array) {
            result = result.concat(flat(item));
        } else {
            result.push(item)
        }
    // 也可换成三元表达式
    // item instanceof Array ? result = result.concat(flat(item)) : result.push(item)

    }
    return result;
}
console.log(flat(arr));
