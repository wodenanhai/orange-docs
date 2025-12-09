#### 数据分页

| 当前页数（currentPage） | 从哪里开始（offset） | 每页显示多少条（pageSize） |
|:------------------|:--------------|:------------------|
| 第1页               | 0             | 10                |
| 第2页               | 10            | 10                |
| 第3页               | 20            | 10                |

```sql
SELECT *
FROM `Articles` LIMIT
offset,pageSize;
```

`/articles?pageSize=15&currentPage=2`
`offset = (currentPage-1)*pageSize`

```javascript
const query = req.query;
const currentPage = Math.abs(Number(query.currentPage)) || 1;
const pageSize = Math.abs(Number(query.pageSize)) || 10;
const offset = (currentPage - 1) * pageSize;

```
