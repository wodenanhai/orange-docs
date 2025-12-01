#### 查询语句

```sql
SELECT *
FROM 表名;

-- 例如：
SELECT *
FROM `Articles`;

```

```sql
SELECT `id`, `title`
FROM `Articles`;
```

#### 添加条件

```sql
SELECT *
FROM 表名
WHERE 条件;

-- 例如：
SELECT *
FROM `Articles`
WHERE `id` = 2;

-- 或者，想查询id大于2的文章:
SELECT *
FROM `Articles`
WHERE `id` > 2;

```

#### 排序

对数据进行排序，两个关键词，ASC和DESC。ASC是正序（升序），也就是从小到大。默认就是按照id来从小到大排列的。DESC是倒序（降序），就是从大到小了。

```sql
-- 查询id大于2的文章，按 id 从大到小排序，即降序
SELECT *
FROM `Articles`
WHERE `id` > 2
ORDER BY `id` DESC;

-- 查询id大于2的文章，按 id 从小到大排列，即升序
SELECT *
FROM `Articles`
WHERE `id` > 2
ORDER BY `id` ASC;
```

[MySQL 教程](https://clwy.cn/documents/mysql)
