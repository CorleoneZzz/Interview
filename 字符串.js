// 字符串模板，使用反双引号`${{变量}}`
// 优点：支持随意换行
let name = "xxx";
let age = 111;
console.log(`我叫${name}，今年${age}岁`);
// 字符串新增方法
// 查找字符串里的值
// str.includes(要找的东西) 返回值true、false
// str.indexOf(要找的东西) 返回索引值 没找到返回-1

// 字符串是否以...开头/结尾
// str.startsWith(检测的东西) 一般是检测http请求等请求头类型
// str.endsWith(检测的东西) 一般检测文件后缀

// 字符串重复
// str.repeat(次数) 造假数据用？

// 字符串填充
// str.padStart(整个字符串长度，填充东西) 往前填充
// str.padEnd(整个字符串长度，填充东西) 往后填充

