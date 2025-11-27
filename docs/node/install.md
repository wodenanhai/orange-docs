# 安装（nvm）

#### 查看node.js LTS版本，即长期支持版本

+ Windows 运行 :nvm list available
+ macOS 运行 :nvm ls-remote

``` javascript
nvm install 20.12.2
```

#### 查看安装过的版本

+ Windows
```
nvm list
```
+ macOS
```
nvm ls
```
#### 切换版本

+ Windows
```
nvm use 20.12.2
```
+ macOS
```
nvm alias default 20.12.2
```
#### 配置npm中国镜像

```
npm config set registry https://registry.npmmirror.com/
```
