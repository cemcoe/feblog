前段时间企图通过 [以四条链串一串前端的那些事儿](https://www.jianshu.com/p/69c6243fa013)，经过一番尝试后我发现我串不起来。

那就换个思路，用一些题一些书和一些博客来串一串前端那些事儿，以题为引，以书为参考，以博客为补充。

参考的书籍包括但不限于以下几本：
- 《JavaScript高级程序设计》
- 《你不知道的JavaSript》
- 《CSS权威指南》
- 《深入理解ES6》

本文只会提供回答题目的大致的方向，具体的内容请参考相应的书籍，背题没什么意思，若本文中内容与书不同，请相信书上的。

文字可能没有什么分量，看一下我前几天到的书吧。虽说只有四本书，但《你不知道的JavaSript》有三册，《CSS权威指南》有两册。

文字的厚重电子书是无法感知的，而纸质书可以让你真切地感受到这份重量。

![books](./books.png)


本文档会随着本人的自我成长而不断完善，可能，大概，也许，今天的理解在未来的某个时间点发生变化。

## 考察的大方向

从网上找来的宏观考察点。先来确定大方向，大方向不要错。枪在手，跟我走。

- 基础知识（HTML、CSS、JS）
- 高级部分（源码、优化等）
- 积极性（开源项目、博客积累等）
- 视野（新技术的了解和学习）

## 自我介绍

基本信息：我叫xxx， 我2019年毕业于xxx，我大学的专业是xxx，上一份工作是在xx公司担任xxx职务。

项目经验：主要负责xx网站维护和开发，技术栈使用Vue全家桶，同时使用node开发中间层。

面试目的：这次想找一份前端工程师的职位。


## HTML
单独考察 HTML 的题目不是很多，常常配合CSS和JS来考察。

### 1. HTML5新特性，语义化？
子问题，对语义化的理解？HTML5新增的标签。

- canvas api 较多且应用场景有限，暂且不管。
- 对本地离线存储有更好的支持，localStorage长期存储数据，浏览器关闭后数据不丢失；sessionStorage的数据在浏览器关闭后自动删除


### 2. 常用的meta标签
```html
<!-- 抄自jianshu -->
<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">

  <!-- Start of Baidu Transcode -->
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  <meta http-equiv="Cache-Control" content="no-transform" />
  <meta name="applicable-device" content="pc,mobile">
  <meta name="MobileOptimized" content="width"/>
  <meta name="HandheldFriendly" content="true"/>
  <meta name="mobile-agent" content="format=html5;url=https://www.jianshu.com/u/e20f22d3e8d3">
  <!-- End of Baidu Transcode -->

    <meta name="description"  content="少玩简书多读书">

  <meta name="tencent-site-verification" content="39a5ed77a02c0103af6ac08addbc3851"/>
  <meta name="360-site-verification" content="604a14b53c6b871206001285921e81d8" />
  <meta property="wb:webmaster" content="294ec9de89e7fadb" />
  <meta property="qc:admins" content="104102651453316562112116375" />
  <meta property="qc:admins" content="11635613706305617" />
  <meta property="qc:admins" content="1163561616621163056375" />
  <meta name="google-site-verification" content="6ARJIxhZLIgZT7J8MZkENr5mR0-CqshgzYyA3r3jBWU" />
  <meta http-equiv="mobile-agent" content="format=html5; url=https://www.jianshu.com/u/e20f22d3e8d3">

  <!-- Apple -->
  <meta name="apple-mobile-web-app-title" content="简书">

  

    <title>cemcoe - 简书</title>

  <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="yOdlTYWqpFdlcgvD9X3d8xxxxxxxxxxxy64ZXwH2cFOlsnCo+dlsiLNRYwknNeblVOPK5MQmZhyxwrDg==" />
```


## CSS

这部分的参考资料主要是 《CSS权威指南第四版》，会给出页码。知识点包括盒模型，选择器，居中方案，浮动，flex，grid。

其他的东西用到了查文档就好了，不必强行记忆。


### 0. 待学习的知识点
- 视差滚动（Parallax Scrolling）

### 0. [盒模型P316](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)

#### 两种盒模型

盒模型应该是一个在 CSS 中比较基础的概念点，很多问题由它而产生。

最权威的资料在这里[css-box-3](https://www.w3.org/TR/css-box-3/)

```md
box-sizing：content-box   //标准盒模型，默认值
box-sizing：border-box    //怪异盒模型
```

标准盒模型：元素的宽度等于元素的 width+padding+border 宽度。加 padding border 会撑开。

margin 不计入实际大小，当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止，不会延伸到 margin。

怪异盒模型：元素宽度就是元素的 width 宽度，加 border 会往里凹。虽然它叫怪异盒模型，但可能这种模式更加符合人的心理预期。

两种模式的区别在于添加 padding 和 border 时，去占用自身的空间还是去扩展新的边界。下图展示的是两种模式切换对盒子的影响。

在使用 JavaScript 获取盒子的各种 width 时会产生影响，详见[understanding offsetwidth clientwidth scrollwidth and height](https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively)。

![盒模型](./box-model.gif)



为了更加直观地看出两者的差别，不妨借用 setInterval 来写一个动画。

假设每隔1s border的度量加6，分别看一下 content-box 和 border-box 的效果。



````html
<style>
  #app {
    box-sizing: content-box;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border: 10px solid #f40;
    background-color: rgb(0, 0, 0);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
<div id="app">
  
</div>
<script>
  const app = document.querySelector('#app')
  let pa = 10

  const intervalId = setInterval(() => {

    if (pa <= 60) {
      pa += 6
      app.style.borderBottom = `${pa}px solid #f40`

    } else {
      clearInterval(intervalId)
    }

  }, 1000);
</script>
````

![content-box](./content-border.gif)


![border-box](./border-border.gif)


两者在被添加 border padding 时发生了不同的变化，border-box 是弹簧的压缩过程，content-box 是弹簧的复原的过程。

#### margin相关问题(p380)

上面是盒模型中 border 和 padding 相关的问题，接下来看一下和 margin 相关的问题，同样借助 setInterval 来展示。

```html
<body>
  <style>
    #app, #app1 {
      width: 100px;
      height: 100px;
      border: 10px solid #f40;
      /* background-color: rgb(0, 0, 0); */
    }
    #app1 {
      margin-top: 40px;
    }
  </style>
  <div id="app">
    
  </div>
  <div id="app1">
    margin-top: 40px;

  </div>
  <script>
    const app = document.querySelector('#app')
    let pa = 10

    const intervalId = setInterval(() => {

      if (pa <= 60) {
        pa += 6
        app.style.marginBottom = `${pa}px`
        app.innerHTML = `margin-bottom: ${pa}px;`

      } else {
        clearInterval(intervalId)
      }

    }, 1000);
  </script>

</body>

```

![margin](./margin.gif)


可以看到最开始时，下面的方块有个 margin-top 属性，而上面的方块的 margin-bottom 属性在不断地增加，而两者的距离并没有随着margin-bottom 的增加而增加。

两个方块的距离并不是由两者的 margin 的和来决定的，而是两者中的较大值来决定。这种现象被称为 margin重叠。这种现象只会发生在垂直方向，水平方向两者的距离就是两者的 margin 和。

这个例子中 margin 重叠产生的问题可能还不是那么的难以解决，大不了换一套计算规则罢了，但如果两个盒子是父子关系，问题就有点难办了。



上面的例子两个盒子是分离的，如果将一个盒子套一个盒子，那么 margin 就会出现另一个现象。

```html
<style>
  #app {
    width: 200px;
    height: 200px;
    background-color: rgb(92, 86, 86);
  }
  #app1 {
    width: 50px;
    height: 50px;
    margin-top: 40px;
    background-color: rgb(235, 217, 217);
  }
</style>
<div id="app">
  <div id="app1">
    margin-top: 40px;
  </div>
</div>
```

![margin塌陷](./margin-fa.gif)


代码的本意是使里面的小盒子相对于大盒子顶部距离 40px，最终产生的效果确是整个大盒子相对于顶部有40px，这个东西可以称为 margin 塌陷，这个东西就需要解决一下了。这里先给出一个解决方案就是给父元素添加属性，overflow:hidden，具体可看 BFC 相关问题。

#### 百分比问题(p378)

border padding 可用单位很多，这里提一下使用百分比时注意的问题。

按照一般的逻辑来想话，左右内外边距按照父元素的宽度来，上下的按照高度来，但，其实规范规定都按照宽度来。

使用百分比时是相对于父元素的宽度来，border-bottom border-top 也是相对于宽度来的。这是需要注意的点。

鉴于此，可以借助这个特性实现成比例地盒子。比如长宽2：1的盒子。

在div的width为固定的情况下，设置height为0，使内容自然溢出，再通过设置padding-bottom使元素有一定高度。
```css
.element {
  /* height: 0px, 防止矩形被里面的内容撑出多余的高度*/
  width: 100vw; 
  height: 0px; 
  padding-bottom: 50%;
  background: blue;
}
```



### 0. CSS选择器特指度权重问题p106

一句换总结，指向越具体，权重越高。
```md
通配符：* 无
ID选择器：#ID 0，1，0，0
类选择器：.class 0. 0，1，0
元素选择器：p、a 0，0，0，1

伪类选择器：a:hover 0，0，1，0
属性选择器：input[type="text"]  0，0，1，0
```

### 0. 伪类和伪元素
伪类用于当已有元素处于某个状态时，为其添加对应对的样式，这个状态是根据用户行为而动态变化。
a标签用户访问前后。动态的。

设计伪元素的目的就是去选取诸如元素内容第一个字（母）、第一行，选取某些内容前面或后面这种普通的选择器无法完成的工作。
```css
a:link{
  color: blue;
}
a:visited{
  color: yellow;
}
a:hover{
  color: red;
}
a:active{
  color: pink;
}
```

伪元素用于创建一些不在文档树中的元素，并为其添加样式。伪元素是对元素中的特定内容进行操作。静态的。
一句话的第一个字母。
```css
h6::first-letter {
  font-size: 24px;
}
```



### 0. BFC是什么，如何产生，有何作用

BFC 权威资料 [block-formatting](https://www.w3.org/TR/CSS21/visuren.html#block-formatting)

前面提到 margin 塌陷的问题，如果这些盒子没有父子关系，我们可以不用管，但如果两者是父子关系，这个问题对布局的影响就比较大，我们就应该做点什么了。

拿上面的例子来将，通常第一时间会想到使用 position:absolute 配合 top left 属性来实现想要的效果。

其实在不知情的情况下就触发了 BFC 的规则，你大可不必必须知道这个东西触发了 BFC ，但为了增加自己的专业素养(和人侃大山)，了解以下还是可以的。



BFC 全称 Block formatting context ，是一个独立的渲染区域，一个实验环境，哪怕发生了爆炸，也只对内部产生影响。

你可能不知道这个概念，但使用了其中的解决方案，如果你使用了下面规则之一其实就触发了BFC：



1.根元素(整个页面就是一个大的BFC)；

2.position为 absolute | fixed；

3.float为 left | right；

4.overflow为 hidden | auto | scroll；

5.display为 inline-block | table-cell | table-caption | flex | inline-flex；



BFC最大的一个作用就是：在页面上有一个独立隔离容器，容器内的元素和容器外的元素布局不会相互影响。

关上门称王称霸。这东西不难，你往往在不知情的情况下就触发了它，只是可能不知道它的名字。



### 0.清除浮动

浮动会导致的问题：


1.文字围绕浮动元素排版，但我们可能希望文字排列在浮动元素下方。


2.浮动元素排版超出了其父级元素，父元素的高度出现了塌缩，若没有文字高度的支撑，不考虑边框，父级元素高度会塌缩成零。


解决方案：不使用浮动布局（不是）。

只要我够穷，就没人能骗我，只要我不用浮动，我就不需要清除浮动，逻辑无懈可击。

还是要正经看一下的，给到不想受到浮动影响的元素添加 clear 属性。使用伪类和伪元素使用的原理还是clear，只是添加的位置不同。

当然了，你也可以触发BFC，来解决浮动带来的问题。

最好的解决方案就是不要使用浮动布局(狗头保命)，flex，grid布局不香吗？



### 1. 响应式布局，响应式背后的浏览器原理
根据浏览器或设备的分辨率可以计算获取到相应的尺寸，通过不同的尺寸可以动态的修改html元素或者盒子在浏览器中的大小，从而实现响应式。

响应式解决方案：
- 百分比
- rem
- 媒体查询


rem是根据根的font-size变化，而em是根据父级的font-size变化。



### 2. 水平垂直居中
[CSS | 绝对的固定C位](https://www.jianshu.com/p/41b9318839d8)

被居中的元素是inline或者inline-block元素
```css
.container{
  width: 600px;
  height: 600px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```


transfrom
```css
.container{
  width: 100%;
  height: 600px;
  position: relative;
}
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

flex 布局
```css
.container{
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

最简单的方法
```css
.container{
  display: flex;
  height: 600px;
}
.center{
  margin : auto;
}
```
### 3. 常见布局解决方案
[两栏布局那些事](../css-two-column-layout/)

实现左边定宽，右边自适应布局

（1）左盒子左浮动，右盒子width=100%

（2）左盒子左浮动，右盒子margin-left=左盒子宽度

（3）左盒子左浮动，右盒子右浮动，设置width: calc（100% - 左盒子宽度）

（4）父容器设置display：flex，右盒子flex：1

[三栏布局那些事](../css-three-column-layout/)

实现中间自适应宽度，左右两栏固定宽度布局


### 4. dom树和cssom树原理
这个问题有点深了，其实也是从浏览器输入url到页面显示经历了什么？问题的一部分。

先放一个链接
[constructing the object model](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model?hl=zh-cn)


### 5. CSS3新特性

```md
1.过渡 transition
2.动画 animation
3.形状转换 transform
4.阴影 box-shadow
5.滤镜 Filter
6.颜色 rgba
7.栅格布局 gird
8.弹性布局 flex
```

### 6. link与@import区别与选择

当解析到link时，页面会同步加载所引的 css，而@import所引用的 css 会等到页面加载完才被加载。


### 7. 一个具体的布局方案
有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。这题有js解法、一般css解法、css3解法等。

### 8. 浏览器是怎样解析CSS选择器的？

dom树和cssom树原理中的知识点，需要数据结构相关的知识储备。

CSS选择器的解析是从右向左解析的，为了避免对所有元素进行遍历。

若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。

若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。

两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。

而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。


总结一下，CSS 中一个概念盒模型，两个问题 margin 塌陷，浮动清除，三种布局，常规布局，flex，grid布局。


## JavaScript

主要参考书籍《你不知道的JavaScript》

### 0. JavaScript的执行过程
预编译+生成可执行代码


### 1. 数据类型8种，类型检测，类型转换
[03 | 读JavaScript 高程](https://www.jianshu.com/p/c9fe9227ce12)

基本类型和引用类型的区别是什么？

null 和 undefined 区别是什么？

“一切皆对象”怎么理解？ 

number 也是对象么？字符串也是对象么？

0.1 + 0.2 精度问题？

'cemcoe'.length 字符串为什么可以像对象一样拥有属性？

### 2. 数组方法排序，遍历，去重，深浅拷贝
在数组中经常会出现“茴字的n种写法”类似的题目。

#### 数组方法

```
indexOf / lastIndexOf(value, fromIndex): 查找数组项，返回对应的下标
forEach: 无法break，可以用try/catch中throw new Error来停止
slice(start, end): 返回截断后的新数组，不改变原数组
filter: 过滤
splice(start, number, value...): 返回删除元素组成的数组，value 为插入项，改变原数组
concat: 连接数组，不影响原数组， 浅拷贝
sort(fn) / reverse: 排序与反转，改变原数组
join: 通过指定连接符生成字符串
reduce / reduceRight(fn(prev, cur)， defaultPrev): 两两执行，prev 为上次化简函数的return值，cur 为当前值(从第二项开始)
map: 遍历数组，返回回调返回值组成的新数组
some: 有一项返回true，则整体为true
every: 有一项返回false，则整体为false
push / pop: 末尾推入和弹出，改变原数组， 返回推入/弹出项【有误】
unshift / shift: 头部推入和弹出，改变原数组，返回操作项【有误】
```

#### 数组去重
数组去重方案


0. 借助扩展运算符和set数据类型。推荐该方案。

1. push 增加方案，新建一个数组，使用includes或者indexOf拿原数组中的每个元素和新数组比较，如果在新数组中找不到，就将该元素push到新数组中。
 

2. splice 删除方案，遍历拿数组元素和该元素后面的元素比较，如果有相同的将该元素删掉，并将遍历的索引减一，防止出现越界行为。核心是，如果有重复的，那留最后一次出现的那个。

3. 借助对象属性名的唯一性。



```js
// 去重
// 第一种： 通过ES6新特性Set()
// 例如： var arr = [1, 2, 3, 1, 2]; var newArr= [...new Set(arr)]


// 利用对象属性存在的特性，如果没有该属性则存入新数组。

function unique3(arr) {
  var obj={}
  var newArr=[]
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
        obj[arr[i]] = 1
        newArr.push(arr[i])
    }   
  }
  return newArr
}
console.log(unique2([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));
```



#### 深浅拷贝
浅拷贝：浅拷贝通过ES6新特性 `Object.assign()` 或者通过扩展运算法 `...`来达到浅拷贝的目的。

浅拷贝修改副本，不会影响原数据，但缺点是浅拷贝只能拷贝第一层的数据，且都是值类型数据，如果有引用型数据，修改副本会影响原数据。

深拷贝：通过利用 `JSON.parse(JSON.stringify())` 来实现深拷贝的目的。

但利用JSON拷贝也是有缺点的，当要拷贝的数据中含有undefined/function/symbol类型是无法进行拷贝的，当然我们想项目开发中需要深拷贝的数据一般不会含有以上三种类型，如有需要可以自己在封装一个函数来实现。


### 3. 闭包

函数A 里面包含了 函数B，而 函数B 里面使用了 函数A 的变量，那么 函数B 被称为闭包。

又或者：闭包就是能够读取其他函数内部变量的函数。



闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。

在js中，函数即闭包，只有函数才会产生作用域的概念。ES6中新增块级作用域。

使用闭包主要是为了封装对象的私有属性和私有方法。

### 4. JS作用域及作用域链
[04 | 读JavaScript 高程](https://www.jianshu.com/p/b6f6c6bc6c7b)


### 5. 原型和原型链

new 操作符做了什么？

这里有cat和animal子类和父类，如何进行es5继承，至少说出5种。

[06-1 | 读JavaScript 高程](https://www.jianshu.com/p/6bfd709aa441)

原型链能够实现所谓的继承的本质原因是什么？


### 6. this 上册82

#### 绑定规则

- 默认绑定

- 隐式绑定 对象

- 显示绑定 apply call bind

- new



#### apply、call和bind的区别

在JS中，这三者都是用来改变函数的this对象的指向的。

call和apply都是对函数的直接调用，而bind方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。


### 7. 异步代码解决方案

- 回调函数
- Promise
- generator
- async await

很多资料说 Promise 最大的作用就是解决了回调地狱，但 Promise 难道不是又带来了"链式地狱"。

本质上，Promise是将回调附加到的返回对象，而不是将回调传递到函数中。

在《你不知道的JavaScript》中册173 中的 [观点](https://github.com/getify/You-Dont-Know-JS/blob/f6e1e05bc2fb212bc38acfeb7461804d48975728/sync-async/ch2.md) 是这样的。



> The most troublesome problem with callbacks is *inversion of control* leading to a complete breakdown along all those trust lines.

回调最大的问题是信任链断裂，这也是 Promise 为 Promise 的原因（双关）。

async / await 是 generator 的语法糖，是基于 Promise 的。有了async 还是要会 Promise。

如何使用以及api这里就不展开了。


### 8. 箭头函数和普通函数的区别

```
1,箭头函数是匿名函数，不能作为构造函数，不能使用new

2,箭头函数不绑定arguments，取而代之用rest参数...解决

3,箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值

4,箭头函数通过 call() 或 apply() 方法调用一个函数时，只传入了一个参数，对 this 并没有影响。

5,箭头函数没有原型属性

6,箭头函数不能当做Generator函数,不能使用yield关键字
```


### 9. 事件相关，事件循环event loop，事件队列，事件委托

### 10. 客户端持久化存储
请描述一下 cookies，sessionStorage和 localStorage的区别？

主要从作用，大小，存储位置，何时销毁回答。

### 11. 算法
用js实现千位分隔符

## ES6新特性，ES2020新特性
主要参考书籍《深入理解ES6》

### 1. ES2020
[ES2020](https://www.jianshu.com/p/d6586d4c33f9)


### 2. let const 块级作用域，死区

### 3.变量的解构赋值

### 4.字符串的扩展
    includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
### 5.数值的扩展
    Number.isFinite()用来检查一个数值是否为有限的（finite）。
    Number.isNaN()用来检查一个值是否为NaN。
### 6.函数的扩展
    函数参数指定默认值
###  7.数组的扩展
    扩展运算符
### 8.对象的扩展
    对象的解构
### 9.新增 symbol 和 BigInt 数据类型

### 10.Set 和 Map 数据结构 
    ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。 Set 本身是一个构造函数，用来生成 Set 数据结构。
    
    Map它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
### 11.Proxy
    Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问
    都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
    Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
    Vue3.0使用了proxy
### 12.Promise
    Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
    特点是：
        对象的状态不受外界影响。
        一旦状态改变，就不会再变，任何时候都可以得到这个结果。
### 13.async 函数 
    async函数对 Generator 函数的区别：
    （1）内置执行器。
    Generator 函数的执行必须靠执行器，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。
    （2）更好的语义。
    async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
    （3）正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。
    （4）返回值是 Promise。
    async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。
### 14.Class 
    class跟let、const一样：不存在变量提升、不能重复声明...
    ES6 的class可以看作只是一个语法糖，它的绝大部分功能
    ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
### 15.Module
    ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。
    import和export命令以及export和export default的区别








## Vue

### 0. 什么是组件化
[Vue | 组件化 | 基本操作](../vue-com-base-operation/)

组件就是将一段UI样式和其对应的功能作为独立的整体去看待，无论这个整体放在哪里去使用，它都具有一样的功能和样式，从而实现复用，这种整体化的细想就是组件化。不难看出，组件化设计就是为了增加复用性，灵活性，提高系统设计，从而提高开发效率。

### 1. MVVM


MVVM(Model-View-ViewModel)
Model(模型):数据层，负责存储数据。
View(控制器):就是ViewController层，他的任务就是从ViewModel层获取数据，然后显示。
ViewModel(视图模型):就是View和Model层的粘合剂，封装业务逻辑处理，封装网络处理，封装数据缓存。

### 2. 生命周期

#### 2.1 生命周期的理解：
Vue 实例从创建到销毁的过程，就是生命周期。

也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。


#### 2.2 特定的时间做特定的事情：

第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子。

DOM 渲染在 mounted 中就已经完成了。

beforecreate : 可以在这加个loading事件，在加载实例时触发。

created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用。

mounted : 挂载元素，获取到DOM节点。

updated : 如果对数据统一处理，在这里写上相应函数。

beforeDestroy : 可以做一个确认停止事件的确认框。

nextTick : 更新数据后立即操作dom better-scroll。

### 3. 简述 Vue 的响应式原理

当一个 Vue 实例创建时，Vue会遍历 data 选项的属性，用 Object.defineProperty 将它们转为 getter/setter 并且在内部追踪相关依赖，在属性被访问和修改时通知变化。

每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

Vue3 的响应式原理Vue3.0和2.x的双向数据绑定（object.definePorperty和Proxy）

### 4. Vue如何解析template模板，diff算法？
key

### 5. 组件通信
[Vue | 组件化 | 基本操作](https://www.jianshu.com/p/283cd29b80e4)
[Vue | 组件化 | 组件通信](https://www.jianshu.com/p/44935cdd12e9)

1.props和$emit
2.vuex(官方推荐状态管理器)

### 6. new Vue 发生了什么
[new Vue](https://ustbhuangyi.github.io/vue-analysis/v2/data-driven/new-vue.html)

### 7. 为什么data推荐函数，而不是对象形式？
```js
data = vm._data = typeof data === 'function'
? getData(data, vm)
: data || {}
```
源码告诉你这里可以是函数也可以对象，推荐函数是为了解决组件实例公用同一个data的问题。

### 8. Vue-Router

### 9. Vuex

### 10. axios


## 网络
### 0. 输入url到看到页面，发生了什么？
### 0. http特性以及状态码
### 0. get与post请求区别
### 0. http的三次握手

### 1. 如何解决跨域问题

### 2. cookie、session 了解吗？说一下传统的登录流程？

### 3. 前端鉴权

鉴权主要分为四种：

- HTTP Basic Authentication (HTTP基本认证)
- session-cookie
- Token 验证(包括JWT,SSO)
- OAuth(开放授权)

我们普通网站常用的认证就是session-cookie的方式，用户向服务端发生请求，服务端会创建session并保存相关身份信息，并向客户端下发一个sessionId,大家如果用心的话，会发现跟JAVA交互的时候，浏览器会有一个JSESSION_ID，跟PHP交互的时候，会有一个PHPSESSION_ID;后面的每次请求，客户端都会自动带上这个cookie跟服务端通信。

> 实际上大家要明白每一种方式的作用；SSO主要用来做单点登录；OAuth主要用来做第三方网站授权；JWT就是一种便于扩展的跨域认证解决方案，通常会考察这个。

关于JWT我这儿不展开讲，给大家推荐[阮一峰](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)的讲解。

### 4. 试从域名解析原理的角度简单分析，域名劫持是怎么发生的？有什么危害？

### 5. http2有什么改进？

## 前端工程化
### 0. 前端模块化规范AMD CMD CommonJS
### 0. webpack

## 性能优化
初级而已，不要计较太多
浏览器渲染机制、重绘、重排


## 开发工具
- VScode
- nodemon
- Git

## 闲聊

### 0. 你是如何学习前端知识的？


### 1. 哪个项目让你最满意、代表你的最高水平？如何做的？
项目能访问


项目能访问，这个隐含的东西可多了。如果这个是你自己做的，这说明你起码舍得为技术花钱、会配置服务器、会部署前后端项目、有使用 linux 的经验、愿意证明项目是真的而不是嘴遁。

基础和项目穿插：问到基础可以穿插项目，这样才真实，而不是个只会背答案的复读•莫得感情•机。随便举个例子，比如问到状态码，你说“⋯⋯301 重定向，我之前做的一个项目地址改了，于是在 nginx 里配置的时候就用到了 ⋯⋯ 它和 302 也是有区别的，⋯⋯”。


### 2. 让你印象最深刻的一个（技术）难点，害的你搞了很久，最后怎么解的，有什么心得？

### 3. 你做的时间最久的一个项目（或产品），你看到这个项目有哪些问题，你能做什么？

### 4. 你能给我们团队或者产品带来什么？

这些问题不是硬性的，主要看平时是不是除了技术还琢磨点别的，特别是在阿里好多 BU 产品基本形态成型的基础上，要做试错、创新、提效、求精、找方向，这种情况下，只具备（完成刚性需求的）技术能力已经远不够了，而更需要辩证的执行。



### 5.轻松一下
一个段子
```
这些都很基础。
然后我面试的时候是这样的：
[好奇]：用过vue的那个路由吗，就是那个路由。
[惊喜]：你说vue-router是吧，用过。默认是hash模式，原理大概是通过监听hashchange事件获取当前路径去匹配对应的路由然后更新试图。
[思考]：你说什么？会发请求吗。
[发呆]：会的，ajax请求的核心模块是XMLhttprequest，内部实现原理不晓得。也可以用axios库，把原生ajax请求做了一些封装和处理。
[撇嘴]：额，什么？我们这里一周上六天班，早八晚六，最多能给6k。
[衰]：你赢了。我简历都是吹的，还给我吧。
```

又一个段子
```
某些面试官居然自己构造专业名词问别人，比如你知道什么是CDYSB么，啊？不知道？！这就是层叠样式表的拼音缩写啊，就是css啊，你是不是搞前端的啊！
```


## 参考

- [掘金 | 小明同学哟 | 初中级前端面试题](https://juejin.im/post/5d87985d6fb9a06add4e6ac3)
- [掘金 | 只会番茄炒蛋 | 2020 前端面试 第一波面试题总结](https://juejin.im/post/5e3d898cf265da5732551a56)
- [知乎 | 小潘 | 2019前端面试题](https://zhuanlan.zhihu.com/p/60832562)
- [掘金 | 是云息呀 | 21 届前端暑期实习 BAT 面试之路，已上岸阿里（万字长文）](https://juejin.im/post/5ea01c776fb9a03c337f93af)
- [大前端面试宝典 - 图解前端](https://lucifer.ren/fe-interview/)

