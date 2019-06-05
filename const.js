// 开发过程中不想被更改的值使用const进行声明
//特性和let相似，除了const不能先声明后赋值，会报错，定义必须有值（也是不想让改的变相），如下
// const a;
// a=12;
// console.log(a)
//正确写法
const a = 12;
console.log(a);


//不在一个作用域里可以进行更改
const b = 12;

function show() {
    const b = 5;
    console.log(b);
    //输出值为5
    // const b = 5;----报错，同样存在暂时性锁区
}

show();


//const定义的对象可以进行更改操作，因为定义的是引用
const arr = [1, 2, 3];
arr.push(4);
// console.log(arr);----输出1,2,3,4


// 如果不想对对象进行操作,那么要使用object.freeze
const arr1 = Object.freeze([1, 2, 3]);
arr1.push(4);
// console.log(arr1);----报错，无法扩展对象