```javascript
const body = {
    title: req.body.title,
    content: req.body.content
}
//而不是直接接收全部的req.body值
```

| 方法         | 说明                | 例子                                                    |
|:-----------|:------------------|:------------------------------------------------------|
| req.params | 获取路由的参数           | /admin/articles/:id                                   |
| req.query  | 获取URL地址里的查询参数     | /admin/articles?title=hello&currentPage=2&pageSize=20 |
| req.body   | 获取通过POST、PUT发送的数据 | 常见的表单里的数据                                             |

