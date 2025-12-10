#### 在Node项目中使用 Prisma ORM

```bash
npm i -D prisma nodemon
```

还要来安装用来操作数据库的ORM

```bash
npm i @prisma/client
```

打开package.json

```json
{
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "prisma": {
    "seed": "node prisma/seed.js"
  }
}
```

初始化Prisma

```bash
npx prisma init --datasourse-provider mysql --output ../generated/prisma
```

生成prisma文件夹和.env文件

```env
DATABASE_URL="mysql://root:1229zhangchen@localhost:3306/zhangcheng"
```
