---
title: 【Web Components】渐进式入门教程
date: 2024/9/07
tags:
 - Web Components
categories:
 - 前端
hideComments: false
---
## 前言

::: info 关于本文

本篇文章渐进式的带你入门 Web Components，并为你避开每个部分常见的踩坑点。

:::

## 组成部分

*Web Components包含4个部分如下:*

::: info 4个部分

* `Custom Elements` - 自定义元素
* `HTML Template` - HTML 模板
* `Shadow DOM` - 影子 DOM
* `ES Modules` - ES 模块

::: warning tips

其中，自定义元素、HTML 模板、影子 DOM 是核心内容，本文渐进式的学习这三个规范。

:::

## 自定义元素

::: info 自定义元素

我们目标是实现一个简单的自定义按钮 `<custom-button>`：

::: warning 一些细节

为了和原生 HTML 元素有所区别，自定义元素必须包含短横线，比如可以是 `<custom-button>`，而不能是 `<custombutton>`。

并且由于 HTML 是不区分大小写的，所以采用全小写即可。

另外值得注意的是，自定义元素不是自闭合标签，所以不能书写成 `<custom-button />`，只能是 `<custom-button></custom-button>` 的书写方式才能正确渲染。

:::

## 语法

*自定义元素本质上是一个 JS 类，所有的 `<custom-button>` 都会是这个类的实例*

::: info 语法

```js
class CustomButton extends HTMLElement {
  // 构造方法
  constructor() {
    // 调用父类的构造函数
    super();
  }
}
```

::: warning tips

上面代码中的 `CustomButton` 就是自定义元素 `<custom-button>` 的类，但前提是我们需要用 `customElements.define()` 方法将两者关联起来。

```js
window.customElements.define('custom-button', CustomButton);
```

:::

::: danger 注意

注意 `extends HTMLElement` 也就是继承了父类 `HTMLElement`，因此继承了 HTML 元素的特性

:::

## 渲染内容

*目前自定义元素 `<custom-button>` 还是空的，我们需要定义它的内容。*

::: info HTML

```html
<custom-button></custom-button>
```

:::

::: info JS

```js
class CustomButton extends HTMLElement {
  // 构造方法
  constructor() {
    // 调用父类的构造函数
    super();

    // 创建内容
    const button = document.createElement('button');
    button.innerText = '默认按钮';

    // this 表示自定义元素实例
    this.append(button);
  }
}

window.customElements.define('custom-button', CustomButton);
```

:::

## HTML 模板

*用刚才 JS 的方式（命令式）描述 UI 内容非常麻烦，我们可以用 Web Components API 提供的 `<template>` 标签来声明式的描述 UI 内容。*

::: info HTML语法

```html
<custom-button></custom-button>

<!-- template 是不会被渲染的 -->
<template id="customButtonTemplate">
  <button>默认按钮</button>
</template>
```

::: warning 注意

代码 `<template>` 以及里面的内容是不会被渲染的，需要依靠自定义元素 `<custom-button>` 来渲染。

:::

::: info JS语法

```js
class CustomButton extends HTMLElement {
  // 构造方法
  constructor() {
    // 调用父类的构造函数
    super();

    // 获取模板
    const template = document.getElementById('customButtonTemplate');
    const content = template.content.cloneNode(true);

    // this 表示自定义元素实例
    this.append(content);
  }
}

window.customElements.define('custom-button', CustomButton);

```

::: warning 注意

上面代码中，获取 `customButtonTemplate` 模板以后，克隆了它的所有子元素。这是因为该自定义元素可能会被使用多次，或者有别的自定义元素也用到了该模板，如果不克隆就会变成直接移动它的子元素，会影响其他实例。

:::

## Shadow DOM

*在前面的内容中，`<custom-button>` 渲染出来的内容并没有与外界隔离，这也会导致私有样式全局污染，这时就需要用到 `Shadow DOM` 技术。*

::: info JS语法

```js
class CustomButton extends HTMLElement {
  // 构造方法
  constructor() {
    // 调用父类的构造函数
    super();

    // 获取模板
    const template = document.getElementById('customButtonTemplate');
    const content = template.content.cloneNode(true);

    // 自定义元素调用 attachShadow() 方法开启 Shadow DOM
    const shadow = this.attachShadow({ mode: 'closed' });

    // shadow 表示影子 DOM
    shadow.append(content);
  }
}

window.customElements.define('custom-button', CustomButton);

```

::: warning 注意

上面代码中 `attachShadow()` 方法的参数 `{ mode: 'closed' }` 表示 Shadow DOM 是封闭的，不允许外部访问。

:::

## CSS 样式

*为了确保样式只对组件生效，我们需要将 CSS 封装在 `<template>` 内部，并且还需要开启 `Shadow DOM` 才能完全做到样式隔离（外部样式也不会影响影子 DOM）。*

::: info HTML

```html
<custom-button></custom-button>

<!-- template 是不会被渲染的 -->
<template id="customButtonTemplate">
  <!-- 私有样式 -->
  <style>
    :host {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .button {
      color: #fff;
      background-color: #409eff;
      border: 1px solid #409eff;
      border-radius: 4px;
      padding: 12px 20px;
      font-size: 14px;
    }
  </style>
  <!-- 内容 -->
  <button class="button">默认按钮</button>
</template>
```

::: warning 注意

上面 CSS 样式中 `:host` 伪类只能在 `Shadow DOM` 中生效，指代自定义元素 `<custom-button>` 本身。

:::

## 监听事件

*在 `CustomButton` 类中监听你所需要的事件即可*

```js
class CustomButton extends HTMLElement {
  // 构造方法
  constructor() {
    // 调用父类的构造函数
    super();

    // 获取模板
    const template = document.getElementById('customButtonTemplate');
    const content = template.content.cloneNode(true);
    const button = content.querySelector('.button');

    // 获取参数
    button.innerText = this.getAttribute('text');

    // 监听事件
    let num = 0;
    button.addEventListener('click', () => {
      button.innerText = `按钮被点击了 ${++num} 次`;
    });

    // 自定义元素调用 attachShadow() 方法开启 Shadow DOM
    const shadow = this.attachShadow({ mode: 'closed' });

    // shadow 表示影子 DOM
    shadow.append(content);
  }
}

window.customElements.define('custom-button', CustomButton);

```

## 封装组件

*前面的所有例子，组件的 `<template>` 和 `JS` 代码都是分开的。我们可以想办法把 `<template>` 封装到 `JS` 里，然后再通过 `JS` 将 `<template>` 注入到 DOM 上。这样的话就能做到一个 `JS` 文件就是一个组件。*

::: info HTML

```html
<custom-button text="自定义按钮文字"></custom-button>
```

::: 

::: info JS

```js
// 定义模板
const template = document.createElement('template');
template.innerHTML = `
  <!-- 私有样式 -->
  <style>
    :host {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .button {
      color: #fff;
      background-color: #409eff;
      border: 1px solid #409eff;
      border-radius: 4px;
      padding: 12px 20px;
      font-size: 14px;
    }
  </style>
  <!-- 内容 -->
  <button class="button">默认按钮</button>
`;

class CustomButton extends HTMLElement {
  // 构造方法
  constructor() {
    // 调用父类的构造函数
    super();

    // 获取内容
    const content = template.content.cloneNode(true);
    const button = content.querySelector('.button');

    // 获取参数
    button.innerText = this.getAttribute('text');

    // 监听事件
    let num = 0;
    button.addEventListener('click', () => {
      button.innerText = `按钮被点击了 ${++num} 次`;
    });

    // 自定义元素调用 attachShadow() 方法开启 Shadow DOM
    const shadow = this.attachShadow({ mode: 'closed' });

    // shadow 表示影子 DOM
    shadow.append(content);
  }
}

window.customElements.define('custom-button', CustomButton);

```

:::

## 参考

*部分内容参考以下文章 & 讨论：*

* [Web Components 入门实例教程](https://www.ruanyifeng.com/blog/2019/08/web_components.html "https://www.ruanyifeng.com/blog/2019/08/web_components.html")
* [Web Components Tutorial for Beginners](https://www.robinwieruch.de/web-components-tutorial/ "https://www.robinwieruch.de/web-components-tutorial/")

## End
