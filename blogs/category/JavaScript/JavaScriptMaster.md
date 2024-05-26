---
title: JavaScript-master(基于JavaScript开发的小项目)
date: 2024/5/15
tags:
 - JavaScript
categories:
 - 前端
hideComments: false
---
## 固定导航栏

<iframe src="/assets/Sticky-Nav/index.html" scrolling="auto" frameborder="0" style="width:100%;height:40rem;" >
</iframe>

::: info 固定导航栏的作用

固定导航栏通常用于网页设计中，特别是在单页应用或者较长页面中。它提供了便捷的导航功能，让用户可以随时访问导航链接，而无需手动滚动页面。这有助于提升用户体验和网站的可用性。

:::

::: warning 核心代码

```css
# CSS	  
      body.fixed-nav .site-wrap {
        transform: scale(1);
      }
      body.fixed-nav nav {
        position: fixed;
        box-shadow: 0 5px 0 rgba(0, 0, 0, 0.1);
      }
      .fixed-nav li.logo {
        max-width: 500px;
      }
```

```html
# HTML 
  <nav id="main">
     <ul>
       <li class="logo"><a href="#">Yaozongbin</a></li>
       <li><a href="#">首页</a></li>
       <li><a href="#">关于</a></li>
       <li><a href="#">关于我们</a></li>
       <li><a href="#">科研力量</a></li>
       <li><a href="#">人才招聘</a></li>
     </ul>
  </nav>
# JS
    <script>
      const nav = document.querySelector("#main");
      let topOfNav = nav.offsetTop; // 获取了导舏栏元素距离文档顶部的偏移量
      function fixNav() {
        if (window.scrollY >= topOfNav) {
          // 判断页面滚动位置是否超过了导舏栏元素距离顶部的偏移量
          document.body.style.paddingTop = nav.offsetHeight + "px";
          document.body.classList.add("fixed-nav");
        } else {
          document.body.classList.remove("fixed-nav");
          document.body.style.paddingTop = 0;
        }
      }
      //  添加一个滚动事件监听器
      window.addEventListener("scroll", fixNav);
    </script>
```

:::

## CSS变量控制图片的间距、背景颜色和模糊程度

<iframe src="/assets/CSS-Variables/index.html" scrolling="auto" frameborder="0" style="width:100%;height:40rem;" >
</iframe>

::: info 交互式的图片样式控制界面

实现了一个交互式的图片样式控制界面，用户可以通过滑块和颜色选择器实时调整图片的样式效果。

`CSSStyleDeclaration.setProperty()`方法接口为一个声明了 CSS 样式的对象设置一个新的值。

css `var()`（有时也被称为“CSS 变量”）的值，用来代替非自定义属性中值的任何部分。

:::

::: warning 核心代码

```css
# CSS
      :root {
        --base: #ffc600;
        --spacing: 10px;
        --blur: 10px;
      }

      div.active {
        width: 20px;
        height: 20px;
        margin: 0 auto;
        padding: var(--spacing);
        background: var(--base);
        filter: blur(var(--blur));
        /* filter: grayscale(100%); */
      }
      .hl {
        color: var(--base);
      }
```

```html
# HTML
 <div class="controls">
      <label for="spacing">间距大小:</label>
      <input
        id="spacing"
        type="range"
        name="spacing"
        min="10"
        max="200"
        value="10"
        data-sizing="px"
      />
      <label for="blur">模糊程度:</label>
      <input
        id="blur"
        type="range"
        name="blur"
        min="0"
        max="25"
        value="10"
        data-sizing="px"
      />
      <label for="base">背景颜色</label>
      <input id="base" type="color" name="base" value="#ffc600" />
    </div>
<div class="active"></div>
# JS
<script>
      const inputs = document.querySelectorAll(".controls input");
      function handleUpdate() {
        // 获取控制元素的data-sizing属性中获取单位后缀,无data-sizing属性，则使用空字符串作为后缀(背景颜色)
        const suffix = this.dataset.sizing || "";
        // .setProperty()声明了 CSS 样式的对象设置一个新的值
        document.documentElement.style.setProperty( 
          `--${this.name}`, // --spacing --blur
          this.value + suffix
        );
      }
      // 添加了change事件的监听器 控制元素的值发生变化时，会触发handleUpdate函数
      inputs.forEach((input) => input.addEventListener("change", handleUpdate));
</script>
```

:::

## LocalStorage

<iframe src="/assets/LocalStorage/index.html" scrolling="auto" frameborder="0" style="width:100%;height:35rem;" >
</iframe>

::: info LocalStorage

`LocalStorage`是HTML5新引入的特性，由于有的时候我们存储的信息较大，Cookie就不能满足我们的需求，这时候 `LocalStorage`就派上用场了。

`LocalStorage`的优点：

* 在大小方面，`LocalStorage`的大小一般为5MB，可以储存更多的信息
* LocalStorage是持久储存，并不会随着页面的关闭而消失，除非主动清理，不然会永久存在
* 仅储存在本地，不像 `Cookie`那样每次HTTP请求都会被携带

`LocalStorage`的缺点：

* 存在浏览器兼容问题，IE8以下版本的浏览器不支持
* 如果浏览器设置为隐私模式，那我们将无法读取到 `LocalStorage`
* `LocalStorage`受到同源策略的限制，即端口、协议、主机地址有任何一个不相同，都不会访问

:::

::: warning 核心代码

```css
# CSS
      .plates li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 10px 0;
        font-weight: 100;
        display: flex;
      }
      .plates label {
        flex: 1;
        cursor: pointer;
      }
      .plates input {
        display: none;
      }
      .plates input + label:before {
        content: "⬜️";
        margin-right: 10px;
      }

      .plates input:checked + label:before {
        content: "🌮";
      }
      .add-items {
        margin-top: 20px;
      }
      .add-items input:nth-child(1) {
        width: 94%;
        padding: 10px;
        outline: 0;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      .add-items input:nth-child(2) {
        width: 49%;
        padding: 10px;
        outline: 0;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
```

```html
# HTML
    <div class="wrapper">
      <h2>
        A small demo - LocalStorage <br />
        by Yao Zongbin
      </h2>
      <p></p>
      <ul class="plates">
        <li>正在加载待办项...</li>
      </ul>
      <form class="add-items">
        <input type="text" name="item" placeholder="项目名称" required />
        <input type="submit" value="+ 添加待办项" />
        <button onclick="clearLocalStorage()">清除LocalStorage列表</button>
      </form>
    </div>
# JS
  <script>
    const addItems = document.querySelector(".add-items");
    const itemsList = document.querySelector(".plates");
    const items = JSON.parse(localStorage.getItem("items")) || []; // 本地存储中获取名为items的数据，并将其解析为JavaScript对象

    // 添加待办事项函数
    function addItem(e) {
      e.preventDefault();
      const text = this.querySelector("[name=item]").value;
      const item = {
        text,
        done: false,
      };

      items.push(item);
      populateList(items, itemsList);
      localStorage.setItem("items", JSON.stringify(items));
      this.reset(); // 重置表单的所有输入字段为它们的初始值
    }

    // 填充列表函数
    function populateList(plates = [], platesList) {
      platesList.innerHTML = plates
        .map((plate, i) => {
          return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
            plate.done ? "checked" : ""
          } />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
        })
        .join(""); // 去除逗号
    }

    // 切换待办事项完成状态的函数
    function toggleDone(e) {
      if (!e.target.matches("input")) return; // 检查事件目标是否是一个input元素
      const el = e.target; // 触发事件的目标元素
      const index = el.dataset.index; // 获取索引
      items[index].done = !items[index].done; // 通过取反操作来切换对应待办事项的done属性的状态
      localStorage.setItem("items", JSON.stringify(items));
      populateList(items, itemsList);
    }

    // 清空按钮
    function clearLocalStorage() {
      localStorage.removeItem("items");
      itemsList.innerHTML = "<li>正在加载待办项...</li>"; // 清空待办事项列表的显示
    }

    // 添加监听器
    addItems.addEventListener("submit", addItem);
    itemsList.addEventListener("click", toggleDone);

    populateList(items, itemsList);
  </script>
```

:::

## JS鼠标悬停显示高亮效果的功能

<iframe src="/assets/Follow-Along-Nav/index.html" scrolling="auto" frameborder="0" style="width:100%;height:35rem;overflow:hidden" >
</iframe>

::: info JS鼠标悬停在链接上时显示高亮效果的功能

网页的跟随导航通常是指网页上的导航栏或菜单，在用户浏览网页时可以帮助他们快速找到所需的信息或页面。通过良好设计的导航，用户可以轻松地浏览网站的不同部分，并且可以快速返回到主页或其他重要页面。网页的跟随导航对于提高用户体验和网站可用性非常重要，它可以帮助用户更容易地找到他们需要的内容，提高网站的易用性和吸引力。

:::

::: warning 核心代码

```css
# CSS
      /* 高亮样式 */
      .highlight {
        transition: all 0.2s;
        border-bottom: 2px solid white;
        position: absolute;
        top: 0;
        background: white;
        left: 0;
        z-index: -1;
        border-radius: 20px;
        display: block;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
```

```html
# HTML
    <nav>
      <ul class="menu">
        <li><a href="">首页</a></li>
        <li><a href="">相关资讯</a></li>
        <li><a href="">资源中心</a></li>
        <li><a href="">关于我们</a></li>
        <li><a href="">联系我们</a></li>
      </ul>
    </nav>
   <div class="wrapper">
	...
    </div>
# JS
  <script>
    const triggers = document.querySelectorAll("a");
    const highlight = document.createElement("span");
    highlight.classList.add("highlight"); // 添加高亮样式
    document.body.appendChild(highlight); // 将span标签添加到body中
    // 高亮函数
    function highlightLink() {
      const linkCoords = this.getBoundingClientRect(); // 获取当前a标签的位置
      console.log(linkCoords);
      const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
      };
      highlight.style.width = `${coords.width}px`; // 设置高亮标签的宽高
      highlight.style.height = `${coords.height}px`; // 设置高亮标签的高
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`; // 设置高亮标签的位置
    }
    triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink)); // 鼠标进入a标签时触发highlight函数
  </script>
```

:::

## JS实现抓取拖拽效果

<iframe src="/assets/Click-And-Drag/index.html" scrolling="auto" frameborder="0" style="width:100%;height:40rem;" >
</iframe>

::: info JS实现抓取拖拽效果

JavaScript 实现抓取拖拽效果在网页开发中有很多实际用途，其中包括但不限于以下几个方面：

1. **用户交互体验增强：** 拖拽效果可以增强用户与网页的交互体验，使用户能够直观地通过拖动元素来进行操作，例如拖动滑块、调整窗口大小、拖拽元素进行排序等。
2. **拖放功能：** 拖拽效果是实现拖放功能的基础，可以用于实现网页上的元素拖放，比如拖动文件上传区域进行文件上传、拖拽图标到指定区域进行操作等。
3. **游戏开发：** 在网页游戏开发中，拖拽效果常常用于实现拖动游戏中的角色、道具或其他元素，增加游戏的趣味性和可玩性。
4. **图表操作：** 在数据可视化和图表操作中，拖拽效果可以用于调整图表的显示范围、拖动图表中的数据点进行交互式操作等。
5. **拖动式布局：** 拖拽效果可以用于实现可拖动式布局，让用户可以自定义界面的布局和排列方式，提高用户定制化体验。

总的来说，JavaScript 实现抓取拖拽效果可以为网页增加丰富的交互功能，提升用户体验，同时也为开发者提供了更多的创意和可能性来设计和开发网页应用。

:::

::: warning 核心代码

```css
# CSS
      .items {
        height: 500px;
        padding: 100px;
        width: 100%;
        border: 1px solid white;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
        transition: all 0.2s;
        transform: scale(0.98);
        will-change: transform;
        position: relative;
        background: rgba(255, 255, 255, 0.1);
        font-size: 0;
        perspective: 500px; /* 添加3d效果 */
      }
      .item {
        width: 150px;
        height: calc(100% - 40px);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 80px;
        font-weight: 100;
        color: rgba(0, 0, 0, 0.15);
        box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.15);
      }
      /** 1、10、19 */
      .item:nth-child(9n + 1) {
        background: dodgerblue;
      }
      /** 2、11、20 */
      .item:nth-child(9n + 2) {
        background: goldenrod;
      }
      /** 3、12、21 */
      .item:nth-child(9n + 3) {
        background: paleturquoise;
      }
      /** 4、13、22 */
      .item:nth-child(9n + 4) {
        background: gold;
      }
      /** 5、14、23 */
      .item:nth-child(9n + 5) {
        background: cadetblue;
      }
      /** 6、15、24 */
      .item:nth-child(9n + 6) {
        background: tomato;
      }
      /** 7、16、25 */
      .item:nth-child(9n + 7) {
        background: lightcoral;
      }
      /** 8、17、26 */
      .item:nth-child(9n + 8) {
        background: darkslateblue;
      }
      /** 9、18、27 */
      .item:nth-child(9n + 9) {
        background: rebeccapurple;
      }
      /** 偶数 */
      .item:nth-child(even) {
        transform: scaleX(1.31) rotateY(40deg);
      }
      /** 奇数 */
      .item:nth-child(odd) {
        transform: scaleX(1.31) rotateY(-40deg);
      }
```

```html
# HTML
    <div class="items">
      <div class="item item1">01</div>
      <div class="item item2">02</div>
      <div class="item item3">03</div>
      <div class="item item4">04</div>
      <div class="item item5">05</div>
      <div class="item item6">06</div>
      <div class="item item7">07</div>
      <div class="item item8">08</div>
      <div class="item item9">09</div>
      <div class="item item10">10</div>
      <div class="item item11">11</div>
      <div class="item item12">12</div>
      <div class="item item13">13</div>
      <div class="item item14">14</div>
      <div class="item item15">15</div>
      <div class="item item16">16</div>
      <div class="item item17">17</div>
      <div class="item item18">18</div>
      <div class="item item19">19</div>
      <div class="item item20">20</div>
      <div class="item item21">21</div>
      <div class="item item22">22</div>
      <div class="item item23">23</div>
      <div class="item item24">24</div>
      <div class="item item25">25</div>
    </div>
# JS
<script>
    const slider = document.querySelector(".items");
    let isDown = false; // 是否按下
    let startX;
    let scrollLeft;

    // 鼠标按下
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    // 鼠标离开
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    // 鼠标松开
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    // 鼠标移动
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return; // 如果没有按下，则返回
      e.preventDefault(); //  阻止默认事件
      const x = e.pageX - slider.offsetLeft; // 鼠标相对于slider的x坐标
      const walk = (x - startX) * 3; // 鼠标移动距离
      slider.scrollLeft = scrollLeft - walk; // 滚动距离
    });
  </script>
```



:::
