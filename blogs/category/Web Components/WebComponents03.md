---
title: 【Web Components】渐进式进阶教程一
date: 2024/9/08
tags:
 - Web Components
categories:
 - Web Components
hideComments: false
---
## 前言

*本篇文章作为上一篇[「渐进式入门教程」](WebComponents02.md "https://juejin.cn/post/7399530640859414580")的延续，带你学习 Web Components 中一些进阶的知识。*

## 前景提要

*先来回顾一下本专栏上一篇[「渐进式入门教程」](WebComponents02.md "https://juejin.cn/post/7399530640859414580")中最后的代码，本文将用新学的进阶知识继续在该代码结构上进行删减、添加、优化。*

::: info 忘记的同学可以先再完整回顾一下上一篇文章

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

## 自定义元素

*我们自定义按钮类 `CustomButton` 继承了内建按钮类 `HTMLButtonElement`，所以它拥有和内建按钮相同的样式和标准特性，比如 `disabled` 属性，在下面代码中也有所演示。*

::: info 两种自定义元素

* Autonomous custom elements（自主自定义元素）
* Customized built-in elements（自定义内建元素）

::: warning 语法

```js
class CustomButton extends HTMLElement {
  //...
}

```

:::

::: warning HTML

```html
<!-- 对普通 button 元素使用 is 属性 -->
<button is="custom-button">点我试试</button>
<button is="custom-button" disabled>禁用按钮</button>
```

:::

::: warning JS

```js
// 继承 HTMLButtonElement 类
class CustomButton extends HTMLButtonElement {
  // 构造方法
  constructor() {
    // 调用父类的构造函数
    super();

    // 监听事件
    let num = 0;
    this.addEventListener('click', () => {
      this.innerText = `按钮被点击了 ${++num} 次`;
    });

    // this 表示自定义元素实例
    this.append();
  }
}

// 给 customElements.define() 方法传第三个参数
window.customElements.define('custom-button', CustomButton, { extends: 'button' });

```

:::

## 生命周期

*几个常见的生命周期：*

* `constructor` - 创建元素时
* `connectedCallback` - 元素被挂载到 DOM 之后
* `disconnectedCallback` - 元素被移除 DOM 时
* `adoptedCallback` - 元素被移动到新的 DOM 时

::: info 语法

*使用方法非常简单，就是在类中按需添加这几个方法即可：*

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
    console.log('生命周期 - constructor');

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

  // 元素被挂载到 DOM 之后
  connectedCallback() {
    console.log('生命周期 - connectedCallback');
  }

  // 元素被移除 DOM 时
  disconnectedCallback() {
    console.log('生命周期 - disconnectedCallback');
  }

  // 元素被移动到新的 DOM 时
  adoptedCallback() {
    console.log('生命周期 - adoptedCallback');
  }
}

window.customElements.define('custom-button', CustomButton);

```

::: warning 上述代码的打印结果和触发顺序：

1. "生命周期 - constructor"
2. "生命周期 - connectedCallback"

:::

## 正确的渲染时机

*注意到，之前我们的渲染逻辑是放在 `constructor` 方法中的，这是一种相对不正确的方式。我们最好是将渲染逻辑放在元素被挂载到 DOM 之后，也就是 `connectedCallback` 生命周期方法中。*

*这样能够避免有些时候 `getAttribute` 返回 `null` 的情况发生。例如，当我们使用 JS 命令式创建元素的时候 `document.createElement('custom-button')`，或者是 `<script>` 脚本比 DOM 先加载的时候。*

::: info 示例

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
    console.log('生命周期 - constructor');

    // 调用父类的构造函数
    super();

    // 获取内容
    this.$content = template.content.cloneNode(true);
    this.$button = this.$content.querySelector('.button');

    // 监听事件
    let num = 0;
    this.$button.addEventListener('click', () => {
      this.$button.innerText = `按钮被点击了 ${++num} 次`;
    });

    // 自定义元素调用 attachShadow() 方法开启 Shadow DOM
    this._shadowRoot = this.attachShadow({ mode: 'closed' });

    // _shadowRoot 表示影子 DOM
    this._shadowRoot.append(this.$content);
  }

  // 元素被挂载到 DOM 之后
  connectedCallback() {
    console.log('生命周期 - connectedCallback');
    this.render();
  }

  // 元素被移除 DOM 时
  disconnectedCallback() {
    console.log('生命周期 - disconnectedCallback');
  }

  // 元素被移动到新的 DOM 时
  adoptedCallback() {
    console.log('生命周期 - adoptedCallback');
  }

  // 渲染函数
  render() {
    // 获取参数
    this.$button.innerText = this.getAttribute('text');
  }
}

window.customElements.define('custom-button', CustomButton);

```

:::

## 自定义元素升级

*在 `customElements.define()` 语句被执行之前，元素是属于「未定义」状态，如果浏览器解析 DOM 时遇见了对应的元素，此时是不会有任何报错的，因为浏览器会把这个元素当作未知元素，就像任何非标准标签一样。*

::: info 自定义元素升级

```js
// 延迟定义
setTimeout(() => {
  window.customElements.define('custom-button', CustomButton);
}, 1000)

```

对于「未定义」和「已定义」的元素，都有对应的 CSS 伪类可以设置其样式：`:not(:defined)` 作用于未定义元素，`:defined` 作用于定义好的元素。

```css
/* 给「未定义」的自定义元素添加样式 */
custom-button:not(:defined) {
  color: #fff;
  background-color: #e6a23c;
}

/* 给「已定义」的自定义元素添加样式 */
custom-button:defined {
  display: block;
}

```

当自定义元素从「未定义」变为「已定义」时，也就是 `customElements.define()` 语句被执行时，被称为「 **升级** 」。

「升级」是可以被订阅到的，只需要用到 `customElements.whenDefined()` 方法即可：

```js
// 订阅状态是否变为「已定义」
customElements.whenDefined('custom-button').then(() => {
  console.log('状态变为已定义');
  const customButtonClass = customElements.get('custom-button');
  console.log('custom-button 元素对应的类', customButtonClass);
})

```

该方法返回一个 `promise`，所以我们传递一个回调给 `then` 方法即可。

代码中还出现了一个 `customElements.get()` 方法，该方法返回指定自定义元素的类。

:::

## 侦听器

*侦听属性（参数）的变化*

::: info observedAttributes

`observedAttributes` 是一个静态的 `getter`，它允许我们侦听多个属性：

```js
// 侦听器
static get observedAttributes() {
  // 将需要侦听的属性放进数组里
  return ['text'];
}

```

被侦听的属性变化后，会触发 `attributeChangedCallback` 回调，它的三个回调参数分别是属性名称、旧值、新值：

```js
// 侦听器回调
attributeChangedCallback(name, oldValue, newValue) {
  //...
}
```

:::

***值得注意的是，侦听器回调 `attributeChangedCallback` 虽然不是立即触发的，但首次触发时机是从属性为 `null` 开始计算起的。也就是说，如果我们默认不设置该属性，那么回调不会被触发；如果我们默认给属性传递了一个值，那么回调会被立即触发，并且要早于生命周期 `connectedCallback`。***

*完整代码如下：*

::: info HTML

```html
<custom-button id="custom-button" text="侦听器"></custom-button>
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
    this.$content = template.content.cloneNode(true);
    this.$button = this.$content.querySelector('.button');

    // 自定义元素调用 attachShadow() 方法开启 Shadow DOM
    this._shadowRoot = this.attachShadow({ mode: 'closed' });

    // _shadowRoot 表示影子 DOM
    this._shadowRoot.append(this.$content);
  }

  // 元素被挂载到 DOM 之后
  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  // 侦听器
  static get observedAttributes() {
    // 将需要侦听的属性放进数组里
    return ['text'];
  }

  // 侦听器回调
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  // 渲染函数
  render() {
    // 获取参数
    this.$button.innerText = this.getAttribute('text');
  }
}

window.customElements.define('custom-button', CustomButton);

// 修改参数
let num = 0;
const customButtonElem = document.getElementById('custom-button');
setInterval(() => {
  customButtonElem.setAttribute('text', `text 属性自动更新了 ${++num} 次`);
}, 1000);

```

上述代码有一个小小的细节优化：

```js
// 元素被挂载到 DOM 之后
connectedCallback() {
  if (!this.rendered) {
    this.render();
    this.rendered = true;
  }
}

```

::: warning

增加一个 `if (!this.rendered)` 的判断条件，当在 `connectedCallback` 生命周期被多次调用时（如果一个元素被反复添加到文档／移除文档），不必重复执行 `render` 方法。

:::

## 优化

*上面的侦听器代码还不够完美，例如我们将修改属性的方式从 `customButtonElem.setAttribute()` 改为 `customButtonElem.text = ···` 就侦听不到属性的变化了。*

*需要新增这样一个 `setter` 方法：*

::: info setter

```js
set text(value) {
  this.setAttribute('text', value);
}
```

:::

::: info getter

```js
get text() {
  return this.getAttribute('text');
}
```

:::

::: info render

```js
// 渲染函数
render() {
  // 获取参数
  // this.$button.innerText = this.getAttribute('text');
  this.$button.innerText = this.text;
}
```

:::

::: info 完整代码

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
    this.$content = template.content.cloneNode(true);
    this.$button = this.$content.querySelector('.button');

    // 自定义元素调用 attachShadow() 方法开启 Shadow DOM
    this._shadowRoot = this.attachShadow({ mode: 'closed' });

    // _shadowRoot 表示影子 DOM
    this._shadowRoot.append(this.$content);
  }

  // 元素被挂载到 DOM 之后
  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  // 侦听器
  static get observedAttributes() {
    // 将需要侦听的属性放进数组里
    return ['text'];
  }

  // 侦听器回调
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  // 渲染函数
  render() {
    // 获取参数
    // this.$button.innerText = this.getAttribute('text');
    this.$button.innerText = this.text;
  }

  get text() {
    return this.getAttribute('text');
  }

  set text(value) {
    this.setAttribute('text', value);
  }
}

window.customElements.define('custom-button', CustomButton);

// 修改参数
let num = 0;
const customButtonElem = document.getElementById('custom-button');
setInterval(() => {
  // 修改方式 1
  // customButtonElem.setAttribute('text', `text 属性自动更新了 ${++num} 次`);
  // 修改方式 2
  customButtonElem.text = `text 属性自动更新了 ${++num} 次`;
}, 1000);

```

:::

## 父子组件渲染顺序

*在 HTML 解析器构建 DOM 的时候，会按照先后顺序处理元素，先处理父级元素再处理子元素。*

::: info 父子组件渲染顺序

例如下面代码，会先处理并挂载 `<custom-button>` 元素，再处理并挂载「子元素」。

```html
<custom-button text="渲染顺序">子元素</custom-button>
```

这个特性非常重要，因为父元素想在自己挂载后立即访问 `innerHTML`，是可能什么都拿不到的（比如 `<script>` 脚本比 DOM 先加载的时候）：

```js
// 元素被挂载到 DOM 之后
connectedCallback() {
  this.render();
}

// 渲染函数
render() {
  // 获取参数可行
  // this.$button.innerText = this.getAttribute('text');
  // 获取 innerHTML 不一定有值
  this.$button.innerText = this.innerHTML;
}
```

当遇见 `innerHTML` 拿不到值的情况时，比较简单的解决办法就是添加一个定时器 `setTimeout` ：

```js
setTimeout(() => {
  this.$button.innerText = this.innerHTML;
}, 0)
```

:::

## 参考

*部分内容参考以下文章 & 讨论：*

* [现代 JavaScript 教程](https://zh.javascript.info/web-components "https://zh.javascript.info/web-components")
* [Web Components Tutorial for Beginners](https://www.robinwieruch.de/web-components-tutorial "https://www.robinwieruch.de/web-components-tutorial")

## End
