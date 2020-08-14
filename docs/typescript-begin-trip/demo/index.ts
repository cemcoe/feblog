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
let flag: boolean = true
// number
let age: number = 18
// string
let myname: string = 'cemcoe'

// array
// number 类型的数组
// 1. 普通方法定义数组
let arr1: number[] = [2020, 20, 20]

// 2. 使用泛型定义数字数组
let arr2: Array<number> = [2020, 20, 20]


// 元组类型tuple 属于数组的一种，可以指定美国元素的单独类型
let arr3: [string, number, boolean] = ['cemcoe', 18, true]


// 枚举类型 enum
enum Flag {
  success = 1,
  error = -1
}
let f:Flag = Flag.success


// 任意类型



