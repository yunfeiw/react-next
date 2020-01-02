# react-next

* next + redux + antd + koa 实现类似掘金工具

### 运行
    npm install
    npm run dev2

### 目录结构
```
    component ==> 公共模块
    lib       ==> redux封装与工具集
    pages     ==> view
    public    ==> 静态文件
    server    ==> 服务端
    store

```
### 问题
    - 快速点击左上角刷新，会因js加载失败而报错
    - server端与client端 请求数据的 按断 有待优化
    - redux 有待优化
