#### 一、ORM是什么

#### 二、Sequelize的安装使用

#### 三、Sequelize的目录结构

如何使用Sequelize来操作数据库

```sql
SELECT *
FROM `Articles`;
```

可以写成

```javascript
Article.findAll()
/**
 *Article，表示先找到Article这个模型。注意下，这里Article是单数形式，这并不是我写错了，而是 ORM 的就这么规定的。模型名是单数，对应的表名是复数。这样子，它就会自动找到Articles表上。findAll()，就是查询所有的数据了。整行的意思就是，查询Articles表的所有数据。
 */
```

```sql
SELECT *
FROM `Articles`
WHERE `id` = 2;

--  查询id=2的这条记录，也不用写
```

改为

```javascript
Article.findByPk(2)
//这里的findByPk，里面的Pk，就是primary key，也就是主键的缩写。我们表里id就是主键，说白了就是通过id来查找数据。
```

#### 安装Sequelize

```
npm i -g sequelize-cli
还要安装当前项目所依赖的sequelize包和对数据库支持依赖的mysql2
npm i sequelize mysql2
最后，来初始化项目。
sequelize init
```

| 文件或目录            | 说明      |
|:-----------------|:--------|
| config/config.js | 数据库连接配置 |
| migrations       | 迁移文件    |
| models           | 模型文件    |
| seeders          | 种子文件    |

#### 其他ORM

[Prisma](https://prisma.yoga/)

[Prisma知乎](https://zhuanlan.zhihu.com/p/1953579241464661901)
