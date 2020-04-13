Koa 是由 Express 原班人马打造的 web 框架。

## 初体验
第一步当然是安装了，直接搞。
```md
npm install koa
```

创建一个名为 `app.js` 的入口测试文件。

```js
// app.js

// 导入koa，一般操作，包装过的http
const Koa = require('koa') 

// 创建一个 http 服务器
const app = new Koa()

// 这里是干什么的，暂时打个问号？
app.use((ctx, next) => {
  ctx.body = 'cemcoe'
})

// 监听当前机器地址端口，
// 启动服务后就可以通过 http://127.0.0.1:80 访问
app.listen(80)
```

作为一个 web 框架，Koa 帮我们做了什么？

从后端的角度看从客户端发请求到看到内容的过程。

服务器：接收到来自前端的请求(request) => 处理请求，查表并进行数据处理 => 生成数据 => 将数据发送的客户端(response)。

有了 Koa 后，Koa: request => middlewares => response

Koa 帮我们做了头和尾，帮我们处理了请求，发送数据，但中间的查表，数据处理等还是要我们来完成，也就是说，编码的重点在中间件上。


我们的工作是处理中间文件，上面的例子的核心代码如下：
```js
// 中间件，重点关注
app.use((ctx, next) => {
  // ctx ： koa 处理好的对象
  ctx.body = 'cemcoe'
})
```
这里的 ctx 和 next 是干什么的？
- ctx: koa 处理好的对象
- next: 迭代器，控制流程顺序


## 一些常用的API
前面已经初步尝试了 Koa 的写法，遇到了 `ctx` api，不妨看一看在开发中会经常用到的 api。
首先是 `ctx`，作为对象，看一看里面还有些什么？
- ctx.request
- ctx.response
- ctx.state 命名空间，类似于 Vuex

需要注意的是 `ctx.request` `ctx.response` 的访问器可以省略掉`request` `response`，什么意思嘞？

```md
ctx.request.method === ctx.method
ctx.response.body === ctx.body
```

刚开始学习时，省略掉这些容易懵，别问我是怎么知道的。

总会陷入到这个玩意究竟是 `request` 身上的还是 `response` 身上的？


## 常用中间价
前面说过，中间件是编码的重点，这里有一些已经封装好的中间件，可以直接拿来使用。

- koa-static-cache 静态文件代理服务
- koa-router 路由
- koa-swing 模板引擎
- koa-bodyparser body 解析

下面挑几个试一试。

### 静态资源模块 static-cache
处理静态文件如图片等，使用前先安装是基本操作。
```md
npm install koa-static-cache
```

如何使用嘞？
```js
const koaStaticCache = require('koa-static-cache')
// 中间件
app.use( koaStaticCache( __dirname, {
  prefix: '/static' // 如果请求的 url 以 /static 开始，则为静态文件
}) )
```
此时如果有 `./index.html` 那么就可以到 `http://127.0.0.1/static/index.html` 地址看到该静态文件。



### koa-router
RESTful 中 url 的设计，使用 http 中的 method 来表述动作。

- POST: http://127.0.0.1/user 新增用户
- GET: http://127.0.0.1/user/1 查询用户
- DELETE: http://127.0.0.1/user/1 删除用户

```js
const Router = require('koa-router')
// 通过 get 请求 发送 / 请求 => https://127.0.0.1/
router.get('/', (ctx, next) => {
  console.log('访问根目录')
})
// 把路由挂载到 app 对象，这一步很容易遗忘
app.use( router.routes())
```

---
常用的中间件还有 koa-swig 模板引擎，在 Hexo 已经感受到了模板引擎的玩法。至于 koa-bodyparser 这里也先不多介绍。

对于 Koa 的初体验就是这样了。
