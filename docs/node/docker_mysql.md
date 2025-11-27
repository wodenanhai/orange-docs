进入[docker官网](https://docker.com/get-started/)下载
安装好之后，设置中Docker Engine配置中国镜像

```
 "registry-mirrors": [
    "https://docker.1ms.run"
]
```
接着进入项目根目录中，新建一个文件，叫做docker-compose.yml。千万要注意，一定要在项目根目录中，放在其他地方会找不到的。然后将下面的配置复制进去，这就是MySQL的一个简单配置了。

```
services:
  mysql:
    image: mysql:8.3.0
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
    environment:
      - MYSQL_ROOT_PASSWORD=clwy1234
      - MYSQL_LOWER_CASE_TABLE_NAMES=0
    ports:
      - "3306:3306"
    volumes:
      - ./data/mysql:/var/lib/mysql
```
然后再运行下面命令，这样，MySQL就会自动下载好，并启动起来了。
```
docker-compose up -d
```
