---
title: 前端之HTML篇(二)
date: 2024/3/18
tags:
 - HTML
categories:
 - HTML
---
### 11. 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？

* **在线的情况下** ，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。
* **离线的情况下** ，浏览器会直接使用离线存储的资源。

### 12. title与h1的区别、b与strong的区别、i与em的区别？

* strong标签有语义，是起到加重语气的效果，而b标签是没有的，b标签只是一个简单加粗标签。b标签之间的字符都设为粗体，strong标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重strong标签。
* title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取有很大的影响
* **i内容展示为斜体，em表示强调的文本**

### 13. **iframe 有那些优点和缺点?**

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

::: info 优点

* 用来加载速度较慢的内容（如广告）
* 可以使脚本可以并行下载
* 可以实现跨子域通信

:::

::: warning 缺点

* iframe 会阻塞主页面的 onload 事件
* 无法被一些搜索引擎索识别
* 会产生很多页面，不容易管理

:::

### 14. label 的作用是什么？如何使用？

label标签来定义表单控件的关系：当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上。

::: info 方法1

```html
<label for="mobile">Number:</label>
<input type="text" id="mobile"/>
```

:::

::: info 方法2

```html
<label>Date:<input type="text"/></label>
```

:::

### 15. Canvas和SVG的区别

::: info SVG

**SVG可缩放矢量图形**（``Scalable Vector Graphics``）是基于可扩展标记语言XML描述的2D图形的语言，SVG基于XML就意味着SVG DOM中的每个元素都是可用的，可以为某个元素附加Javascript事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

::: warning 特点

* 不依赖分辨率
* 支持事件处理器
* 最适合带有大型渲染区域的应用程序（比如谷歌地图）
* 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
* 不适合游戏应用

:::

::: info Canvas

**Canvas**是画布，通过 ``Javascript``来绘制2D图形，是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。

::: warning 特点

* 依赖分辨率
* 不支持事件处理器
* 弱的文本渲染能力
* 能够以 .png 或 .jpg 格式保存结果图像
* 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

:::

::: danger 注意

矢量图，也称为面向对象的图像或绘图图像，在数学上定义为一系列由线连接的点。矢量文件中的图形元素称为对象。每个对象都是一个自成一体的实体，它具有颜色、形状、轮廓、大小和屏幕位置等属性。

:::

### 16. head 标签有什么作用，其中什么标签必不可少？

`<head>` 标签用于定义文档的头部，它是所有头部元素的容器。`<head>` 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。

文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。

下面这些标签可用在 head 部分：`<base>`, `<link>`, `<meta>`, `<script>`, `<style>`, `<title>`。

其中 `<title>` 定义文档的标题，它是 head 部分中唯一必需的元素。

### 17. 文档声明（Doctype）和<!Doctype html>有何作用? 严格模式与混杂模式如何区分？它们有何意义?

::: warning 两者作用

文档声明(`Doctype`) 的作用： 文档声明是为了告诉浏览器，当前 `HTML`文档使用什么版本的 `HTML`来写的，这样浏览器才能按照声明的版本来正确的解析。

`<!doctype html>`的作用就是让浏览器进入标准模式，使用最新的 `HTML5`标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，我们需要避免此类情况发生

:::

::: warning 严格模式与混杂模式的区分

* **严格模式** **：** 又称为标准模式，指浏览器按照 `W3C`标准解析代码；
* **混杂模式** **：** 又称怪异模式、兼容模式，是指浏览器用自己的方式解析代码。混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作；

:::

::: danger 区分

**网页中的** `DTD`，直接影响到使用的是严格模式还是浏览模式，可以说 `DTD`的使用与这两种方式的区别息息相关。

* **如果文档包含严格的** `DOCTYPE`，那么它一般以严格模式呈现（ **严格 DTD ——严格模式** **）；**
* 包含过渡 `DTD` 和 `URI` 的 `DOCTYPE` ，也以严格模式呈现，但有过渡 `DTD` 而没有 `URI`（统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现（ 有 URI 的过渡 DTD ——严格模式；没有 URI 的过渡 DTD ——混杂模式 **）；**
* `DOCTYPE`不存在或形式不正确会导致文档以混杂模式呈现（ DTD不存在或者格式不正确——混杂模式 **）；**
* `HTML5` 没有 `DTD` ，因此也就没有严格模式与混杂模式的区别，`HTML5` 有相对宽松的 法，实现时，已经尽可能大的实现了向后兼容( HTML5 没有严格和混杂之分 **)。**

总之，严格模式让各个浏览器统一执行一套规范兼容模式保证了旧网站的正常运行。

:::

### 18. 浏览器乱码的原因是什么？如何解决？

::: info 产生乱码的原因

* 网页源代码是 `gbk`的编码，而内容中的中文字是 `utf-8`编码的，这样浏览器打开即会出现 `html`乱码，反之也会出现乱码；
* `html`网页编码是 `gbk,`而程序从数据库中调出呈现是 `utf-8`编码的内容也会造成编码乱码；
* 浏览器不能自动检测网页编码，造成网页乱码。

::: warning 解决办法

* **使用软件编辑HTML网页内容；**
* **如果网页设置编码是** `gbk`，而数据库储存数据编码格式是 `UTF-8`，此时需要程序查询数据库数据显示数据前进程序转码；
* 如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换。

:::

### 19. 渐进增强和优雅降级之间的区别

 1.**渐进增强（progressive enhancement）** **：**主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果、交互等方面的改进和追加功能，以达到更好的用户体验。

 2.**优雅降级 graceful degradation** **：** 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。

::: info 两者区别

* 优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；
* 降级（功能衰竭）意味着往回看，而渐进增强则意味着往前看，同时保证其根基处于安全地带。

::: warning 优雅降级和渐进增强

“优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。 在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。

"渐进增强”观点则认为应关注于内容本身。内容是建立网站的诱因，有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得“渐进增强”成为一种更为合理的设计范例。这也是它立即被 Yahoo 所采纳并用以构建其“分级式浏览器支持 (Graded Browser Support)”策略的原因所在。

:::

### 20. 说一下 HTML5 drag API

::: info dargAPI

``dragstart``：事件主体是被拖放元素，在开始拖放被拖放元素时触发。

`darg`：事件主体是被拖放元素，在正在拖放被拖放元素时触发。

`dragenter`：事件主体是目标元素，在被拖放元素进入某元素时触发。

`dragover`：事件主体是目标元素，在被拖放在某元素内移动时触发。

`dragleave`：事件主体是目标元素，在被拖放元素移出目标元素是触发。

`drop`：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。

`dragend`：事件主体是被拖放元素，在整个拖放操作结束时触发

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Drag and Drop List Example</title>
    <style>
      #list-container {
        list-style: none;
        padding: 0;
        width: 200px;
      }

      .draggable-item {
        background-color: #f2f2f2;
        padding: 10px;
        margin: 5px 0;
        cursor: grab;
      }

      .drag-over {
        border: 2px dashed #666;
      }
    </style>
  </head>
  <body>
    <h2>Drag and Drop List Example</h2>

    <ul id="list-container">
      <li
        class="draggable-item"
        draggable="true"
        ondragstart="dragStartHandler(event)"
      >
        Item 1
      </li>
      <li
        class="draggable-item"
        draggable="true"
        ondragstart="dragStartHandler(event)"
      >
        Item 2
      </li>
      <li
        class="draggable-item"
        draggable="true"
        ondragstart="dragStartHandler(event)"
      >
        Item 3
      </li>
      <li
        class="draggable-item"
        draggable="true"
        ondragstart="dragStartHandler(event)"
      >
        Item 4
      </li>
    </ul>

    <script>
      let draggedItem = null;

      function dragStartHandler(event) {
        draggedItem = event.target;
        event.dataTransfer.setData("text/plain", ""); // 必须设置数据，但可以为空
      }

      function dragOverHandler(event) {
        event.preventDefault();
        event.target.classList.add("drag-over");
      }

      function dragLeaveHandler(event) {
        event.target.classList.remove("drag-over");
      }

      function dropHandler(event) {
        event.preventDefault();
        event.target.classList.remove("drag-over");
        if (draggedItem !== event.target) {
          const list = event.target.parentNode;
          const indexA = Array.from(list.children).indexOf(draggedItem);
          const indexB = Array.from(list.children).indexOf(event.target);
          if (indexA < indexB) {
            list.insertBefore(draggedItem, event.target.nextSibling);
          } else {
            list.insertBefore(draggedItem, event.target);
          }
        }
      }

      const items = document.querySelectorAll(".draggable-item");
      items.forEach((item) => {
        item.addEventListener("dragover", dragOverHandler);
        item.addEventListener("dragleave", dragLeaveHandler);
        item.addEventListener("drop", dropHandler);
      });
    </script>
  </body>
</html>

```

:::
