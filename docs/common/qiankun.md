#### Q：父应用和子应用可以在不同的nginx上吗？

A：可以，父子应用既可以在同一个nginx也可以在不同的nginx上。

#### Q：从SLB(服务器)过来的请求是先到父应用再路由到子应用？

A：不是。 父应用在运行时，通过fetch拿到子应用的html文件上的js、css依赖（import-html-entry），划出一个"独立容器"
（sandbox）运行子应用，所有子应用都是运行在父应用这个基座上的"应用级组件"
，子应用成为了父应用的一部分，子应用中配置的的代理不会生效，父子应用共享同一个网络环境，都运行在同一个IP上，请求都从同一个IP发出，⼦应⽤的所有⽹络请求都通过⽗应⽤配置的代理转发。

#### Q：父应用和子应用通信？（是不是通过网络通信）

A：qiankun的父子应用通信不是通过网络通信

父子应用通信是直接通过浏览器存储或者内存等。例如路由参数、localStorage、eventBus或者线程的全局状态管理工具都可以管理（比如umi的useModel）

⼦应⽤挂载时，也可以类似 React 组件通过 props 传递具体数据和⽗应⽤中改变数据的函数，也可以
传递⼀个全局状态，其包含变量修改和监听变化的函数，⽗⼦应⽤都可以监听变量的变化和修改变
量。

#### Nginx配置

父应用上的nginx配置类似本地文件中的proxy代理配置，在父应用上分别配置每个子应用的html文件所在的地址（资源代理），和子应用的后端接口地址（请求代理）。

```javascript
export default {
    "/root-app": {
        target: "https://xxx.xxx.com:xxxx/",
        changeOrigin: true,
    },
    // child1 
    // 资源代理 
    "/child1/": {
        target: "https://xxx.xxx.com:xxxx/",
        changeOrigin: true,
    },
    // 接⼝代理 
    "/child1-api/": {
        target: "https://xxx.xxx.com:xxxx/",
        changeOrigin: true,
    },
    //......
};
```

**不允许主应用跨域访问微应用**，做法就是将主应⽤服务器上⼀个特殊路径的请求全部转发到微应⽤的
服务器上，即通过代理实现“微应⽤部署在主应⽤服务器上”的效果。

例如，主应⽤在 A 服务器，微应⽤在 B 服务器，使⽤路径 /app1 来区分微应⽤，即 A 服务器上所有
/app1 开头的请求都转发到 B 服务器上。此时主应⽤的 Nginx 代理配置为：
```
/app1/ {
 proxy_pass http://www.b.com/app1/; 
 proxy_set_header Host $host:$server_port;
}
```
