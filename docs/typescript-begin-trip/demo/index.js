// 布尔类型 boolean
// 数字类型 number
// 字符串 string
// 数组 array
// 元组 tuple
// 枚举 enum
// 任意 any
// null 和 undefined
// void 
// never
// boolean
var flag = true;
// number
var age = 18;
// string
var myname = 'cemcoe';
// array
// number 类型的数组
// 1. 普通方法定义数组
var arr1 = [2020, 20, 20];
// 2. 使用泛型定义数字数组
var arr2 = [2020, 20, 20];
// 元组类型tuple 属于数组的一种，可以指定美国元素的单独类型
var arr3 = ['cemcoe', 18, true];
// 枚举类型 enum
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
// 任意类型
