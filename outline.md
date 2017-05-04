# JS入门课程提纲

[TOC]

## 主题：让你的网页动起来

### JS 简介

- 轻量级编程语言（弱类型/强类型，解释型语言/编译型）
- 执行环境：浏览器（因为有JS引擎/渲染引擎）,可插入HTML页面中
- 作用：实现交互以及动态（不同于CSS动画）
- 例子：浏览器地址栏执行以下代码：
  ```js
  javascript:alert('Hello JS!')
  javascript:console.log('Hello JS!')
  ```
- 发展：首先由网景开发，后交由ECMA，有兴趣的自己去了解
- 目前：大部分应用ES5，ES6（兼容部分）（ES7，ES8，ES.NEXT）。

### JS 语言

#### 基本语法知识
##### 数据类型
- 布尔
- 数字
- 字符串
- 数组
- null
- undefined
- *Object*
- *function*

##### 变量 (var)

**命名**

- 第一个字符必须是字母、下划线（_）或美元符号（$）
- 余下的字符可以是下划线、美元符号或任何字母或数字字符

命名要规范
常用的的变量命名规则:
Camel 标记法
首字母是小写的，接下来的字母都以大写字符开头。例如：

```js
var myTestValue = 0, mySecondValue = "hi";
```

Pascal 标记法
首字母是大写的，接下来的字母都以大写字符开头。例如：

```js
var MyTestValue = 0, MySecondValue = "hi";
```

**声明定义**

```js
var a;
var b, c, d;
```

**初始化**

```js
var a;
a = 10;
var a = 10;
var b = 20, c = 30;

// 存放不同类型的值
var x = 100;
console.log(x);
x = "Hello";
console.log(x);

// 使用前不一定非要声明
var y = 200;
z = y + 100;
console.log(z);
```

##### 运算符

- 一元运算符
	- 一般：`+`, `-`, `++`, `--`
	- 其他：`typeof`,`delete`,`void`等（不讲）

	```js
    // 一元加法本质上对数字无任何影响：
    var iNum = 20;
    iNum = +iNum;
    alert(iNum);	//输出 "20"

    // 尽管一元加法对数字无作用，但对字符串却有有趣的效果，会把字符串转换成数字。
    var sNum = "20";
    alert(typeof sNum);	//输出 "string"
    var iNum = +sNum;
    alert(typeof iNum);	//输出 "number"
    ```
- 位运算符
	- `&`
	- `|`
	- `^`
	- `<<`
	- `>>`
	- `>>>` (无符号右移)
- 逻辑运算符
	- `&&`
	- `||` (ES5 定义默认值)
	- `!` 或 `~`
- 算数运算符
	- `+`
	- `-`
	- `*`
	- `/`
	- `%`
- 关系运算符
	- `>`
	- `>=`
	- `<`
	- `<=`
	- `==`
	- `===`
- 赋值运算符
	- `=`
- 逗号运算符
	- `,`
- 三目运算符
	- `? :`

##### 语句

- if else
- for
- for in
- while
- do while
- switch case
- break
- continue
- label
- with

##### 函数

- 两种定义方式
- 调用（立即执行）
- 参数
- 返回值
- Function对象（扩展）
- arguments对象（扩展）
- 闭包（扩展）

### JS 应用

#### 算法举例

- 随机数（if else)
- 求和（for语句）
- 计算器运算符匹配（switch case）

#### DOM操作

- 设置样式
- 获取dom属性值
- 获取网络API数据（获取天气：心知天气API，地理位置等举例）（扩展）

#### 课后作业

**任务一：**

利用HTML,CSS,JS结合写一个计算器
基本要求：操作方便，能实现基本运算算数运算
扩展要求：界面美观，易于操作，可由基本型切换成复杂型（能进行复杂运算：平方，开方，n次方，进制转换等，可自由扩展）







