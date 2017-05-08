# simple-ppt

> A Vue.js project about simple PowerPoint

[TOC]

## 开发指南

### 启动说明（Windows系统）

*注意：*
需要安装node运行环境

1. cd命令行打开项目根目录（simple-ppt)
2. 运行命令`npm install`或`cnpm install`（淘宝镜像）安装依赖项
3. 运行命令`npm run dev`启动项目
4. 浏览器地址栏打开localhost:8080即可访问

### 开发约定

使用HTML5、CSS3、ES6进行开发
使用ESLint规范，否则编译报错，代码无法运行

- 使用两个空格进行缩进，行尾不用多余分号，也不能出现空格。
- 操作符前后一个空格分隔。
- 方法名与小括号之间以及方法小括号与大括号之间都用一个空格分隔。

### 文件结构介绍

```
simple-ppt
|----build
|    |----main.css
|
|----config
|    |----dev.env.js
|    |----index.js
|    |----prod.env.js
|    |----test.env.js
|
|----src
|    |----assets
|    |----component
|    |----router
|    |----App.vue
|    |----main.js
|
|----static
|    |----.gitkeep
|
|----test
|    |----e2e
|    |----unit
|
|----.babelrc
|----.editorconfig
|----.eslintignore
|----.eslintrc.js
|----.gitignore
|----.postcssrc.js
|----index.html
|----package.json
|----README.md
```

