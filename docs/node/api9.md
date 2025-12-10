#### 何为DRY原则？

不要自己重复自己

#### 如何自定义异常

新建utils/response.js

```javascript
/**
 * 自定义 404 错误类
 */
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError'
    }
}

module.exports = {NotFoundError}

```

在代码中引入

```javascript
const {NotFoundError} = require('./utils/response');

async function getArticle(req) {
    if (false) {
        throw new NotFoundError(`ID:${id}的文章未找到`)
    }
}

```

#### 如何将重复的代码封装成函数？

| 响应     | 状态码 | 说明             |
|:-------|:----|:---------------|
| 请求成功   | 200 | 正确响应了          |
| 创建数据成功 | 201 | 正确响应了，并创建了新的资源 |

```javascript
function success(res, message, data = {}, code = 200) {
    res.status(code).json({
        status: true,
        message,
        data
    })
}
```

| 响应      | 状态码 | 说明                    |
|:--------|:----|:----------------------|
| 请求参数不存在 | 400 | 数据验证失败，而且还需要map遍历错误信息 |
| 数据不存在   | 404 | 查询不存在的内容              |
| 服务器错误   | 500 | 未知的各种问题               |

```javascript
function failure(res, error) {
    if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map(e => e.message);
        return res.status(400).json({
            status: false,
            message: "请求参数错误",
            errors
        })
    }
    if (error.name === 'NotFoundError') {
        return res.status(404).json({
            status: false,
            message: "资源不存在",
            errors: [error.message]
        })
    }
    return res.status(500).json({
        status: false,
        message: "服务器错误",
        errors: [error.message]
    })
}
```

#### 也可以使用错误中间件
