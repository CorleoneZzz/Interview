//解构赋值，左右两边的格式和解构要保持一致
//非常有用，特别在数据交互的复杂格式时
let [b, c, d] = [12, 5, 6];
console.log(b, c, d);


//json解构赋值
let json =
    {
        name: 'Strive',
        age: 18,
        job: '代码'
    };
let {name, age, job} = json;
console.log(name, age, job);


//解构的时候可以给默认值
let [e, f, g = "默认值"] = ['aaa', 'bbb'];


//解构可以用来交换，不用引入额外变量
let h = 12;
let j = 5;
[h, j] = [j, h];
console.log(h, j);

//函数参数也可以解构赋值
function show({k, l}) {
    console.log(k, l)
}

show({
    k: 1,
    l: 2
});