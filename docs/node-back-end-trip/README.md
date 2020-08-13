借用node来走一下简单的后端流程

今天来玩一玩node，作为前端不会点后端总觉得差那么点意思。

主要用 node + http + fs 来做三个东西，当用户访问 `/` 时我们给到用户一个服务器中的html文件。

当用户访问 `/girl` 时我们给到一个图片，而当用户访问 `/products` 时我们给到一个我们熟悉的 api 接口。

这里不会使用express，Koa进行开发，一来一上来就上框架就是在耍流氓，而来，只是一个小demo，犯不上。

## 0. 有哪些问题
为了搞定这个东西我们需要搞明白以下这么些问题

- 如何获取请求的相关信息

- 如何找到用户访问的路由，这玩意存在哪里

- 如何对请求进行响应

- 如何将html文件回给用户

- 响应内容支持的格式

- 如何设置请求头

- content-type

我们采用不断迭代的方法来实现它。


## 1. 使用 http 创建 server 的步骤
创建 server 我们借助的是 http 模块。

它的使用流程大致是，引入模块，调用 createServer 方法，监听 request 事件，设置监听端口。

```js
// 1.1 导入http库文件
const http = require('http')
// 1.2 调用createServer方法
const server = http.createServer()
// 1.3 使用on方法绑定监听事件，第一个是事件名，第二个参数是回调，和addEventListener类似
server.on('request', () => {})
// 1.4 监听端口
server.listen(8080, () => {
	console.log('http://localhost:8080/')
})
```

## 2. 获取请求的相关信息
我们只能尽可能多地知道请求的相关信息，才能为用户提供更好的服务。

这里我们先要拿到用户访问的地址，即 url，让我们聚焦到上面监听 request 事件的回调函数中，我们只能知道用户的述求后才能为其提供响应。

在回调函数中可以传入 request 和 response，这两者对应请求和响应，用户的请求相关信息就存在 request 中。

这里就转换了身份，现在我们站在后端的角度来接收前端发来的请求。

明确我们需要的信息有，用户访问的 url，该信息在req中，我们需要该信息来处理后端的路由。

```js
// 1.3 使用on方法绑定监听事件，第一个是事件名，第二个参数是回调，和addEventListener类似
server.on('request', (req, res) => {
  const url = req.url
})
```
是的，就是这么的简单，url 在 request 身上，直接找他要就好了。

还有经常要知道是 GET 请求还是 POST 请求也可以找这货要。这个 req 就像酒楼的小二一样知道的可多了呢。

## 3. html和图片等静态文件的处理
知道了用户访问的 url 后，我们就可以开始做我们的第一个东西了。

当`url === '/'` 时，将服务器中的一个 html 文件给到用户。

响应的格式只能是字符串或二进制格式，你不能像发文件一样直接将一个 html 文件给到客户端。

你要先读取文件内容，并将读取的数据传过去，这个过程相当于你将你的 `毕业论文.pdf` 的内容复制到聊天框，然后以文本的格式发给了你的导师，你这种创新的思维一定会得到老师的大大夸赞。

回归正题，读文件要用到 fs 模块，来看一下具体的代码。

```js
// 3. html等静态文件的处理，当用户请求/时返回一个html文件，这里就有问题了，如何将服务器中的文件读出来并发给前端
// 3.1 导入fs模块
const fs = require('fs')
if(url === '/') {
  // 3.2 读取html文件
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      // 3.3 对读取错误的情况进行处理
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('文件读取失败')
    } else {
      // 3.4 设置恰当的请求头Content-Type
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(data)
    }
  })
} 
```

图片的处理和 html 文件类似，差别是请求头的设置是不同的。
```js
else if(url === '/girl') {
  fs.readFile('./girl.jpg', (err, data) => {
    res.setHeader('Content-Type', 'image/jpeg')
    res.end(data)
  })
} 
```

## 4. 如何将 JSON 格式的数据给到客户端

前端提到过，响应的数据只能是字符串或二进制，对象或更见严格的 JSON 格式如果要传，那要转化一下。

```js
else if (url === '/products') {
  // 假想的数据
  const products = [
    {
      name: 'ddd',
      price: 123
    }, {
      name: 'ccc',
      price: 3455
    }
  ]

  // 响应内容只能是字符串或二进制数据
  const res_data = JSON.stringify(products)
  res.end(res_data)
} 
```

最后附上完整的demo代码
```js
// 1. 如何使用http创建server
// 1.1 导入http库文件
const http = require('http')
// 1.2 调用createServer方法
const server = http.createServer()
// 1.3 使用on方法绑定监听事件，第一个是事件名，第二个参数是回调，和addEventListener类似
server.on('request', (req, res) => {
	// 2. 如何获取请求的相关信息
	// 请求路径
	// 请求方法
	// 请求参数
	// 这里就转换了身份，现在我们站在后端的角度来接收前端发来的请求
	// 明确我们需要的信息有，用户访问的url，该信息在req中，我们需要该信息来处理后端的路由
	// 2.1 请求地址url
	const url = req.url
	console.log(req.method)
	// 3. html等静态文件的处理，当用户请求/时返回一个html文件，这里就有问题了，如何将服务器中的文件读出来并发给前端
	// 3.1 导入fs模块
	const fs = require('fs')
	if (url === '/') {
		// 3.2 读取html文件
		fs.readFile('./index.html', (err, data) => {
			if (err) {
				// 3.3 对读取错误的情况进行处理
				res.setHeader('Content-Type', 'text/plain; charset=utf-8')
				res.end('文件读取失败')

			} else {
				// 3.4 设置恰当1的请求头Content-Type
				res.setHeader('Content-Type', 'text/html; charset=utf-8')
				res.end(data)
			}
		})
	} else if (url === '/girl') {
		fs.readFile('./girl.jpg', (err, data) => {
			res.setHeader('Content-Type', 'image/jpeg')
			res.end(data)
		})
	} else if (url === '/products') {
		// 4. 如何返回json
		const products = [
			{
				name: 'ddd',
				price: 123
			}, {
				name: 'ccc',
				price: 3455
			}
		]

		// 4.1 响应内容只能是字符串或二进制数据
		const res_data = JSON.stringify(products)
		res.end(res_data)
	} else {
		res.end('404')
	}

})
// 1.4 监听端口
server.listen(8080, () => {
	console.log('http://localhost:8080/')
})
```

当然了，这只是一个特别简化的版本，仅供理解使用，后端不可能就这么简单，只是一个简单的理解模型，里面具体的点慢慢了解。重要的是前端和后端这种思维的转变，其实在这两者间不断转换还是蛮有意思的。