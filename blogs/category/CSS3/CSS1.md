---
title: 前端之CSS篇(一)
date: 2024/3/31
tags:
 - CSS
categories:
 - CSS
---
## 一、CSS基础

### 1. CSS选择器及其优先级

|       选择器       |       格式       |  优先级  |                                         例子                                         |
| :----------------: | :---------------: | :------: | :----------------------------------------------------------------------------------: |
|    `id选择器`    |      `#id`      | `100` |                               使用#选择器选中的元素。                               |
|    `类选择器`    |  `.classname`  |  `10`  |                          使用 .classname 选择器选中的元素                          |
|   `属性选择器`   | `a[ref=""xxx"]` |  `10`  |         通过元素的属性值选中元素，如[attr]、[attr=value]、[attr^=value]等。         |
|   `伪类选择器`   | `li:last-child` |  `10`  |          通过元素的状态或位置选中元素，如:hover、:active、:first-child等。          |
|   `标签选择器`   |      `div`      |  `1`  |                         通过元素的标签选中元素，如div、p等。                         |
|  `伪元素选择器`  |   `li:after`   |  `1`  |            通过元素的特定位置选中元素的某个部分，如::before、::after等。            |
| `相邻兄弟选择器` |     `h1+p`     |  `0`  |                   通过元素的紧邻兄弟元素选中元素，如prev + next。                   |
|  `子元素选择器`  |     `ul>li`     |  `0`  |                   通过元素的直接子元素选中元素，如parent > child。                   |
|   `后代选择器`   |     `li a`     |  `0`  |                 通过元素的嵌套关系选中元素，如ancestor descendant。                 |
|  `通配符选择器`  |       `*`       |  `0`  | 通配符选择器常用 * 号表示，它是所有选择器里作用范围最广的，能匹配页面中所有的元素。 |
|   `!important`   |  `!important`  | `1000` |                      具有最高优先级的样式，会覆盖其他所有样式。                      |

::: info 对于选择器的优先级:

* 标签选择器、伪元素选择器：1；
* 类选择器、伪类选择器、属性选择器：10；
* id 选择器：100；
* 内联样式：1000；

::: warning 注意事项!

* !important声明的样式的优先级最高( !important > 内联样式 )；
* 如果优先级相同，则最后出现的样式生效；
* 继承得到的样式的优先级最低；
* 通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；
* 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式

:::

### 2. CSS中可继承与不可继承属性有哪些

::: info 无继承性的属性

`display`：规定元素应该生成的框的类型。

`vertical-align`：垂直文本对齐

`text-decoration`：规定添加到文本的装饰

`text-shadow`：文本阴影效果

`white-space`：空白符的处理

`unicode-bidi`：设置文本的方向

盒子模型的属性: `width`、`height`、`margin`、`border`、`padding`

背景属性：`background`、`background-color`、`background-image`、`background-repeat`、`background-position`、`background-attachment`

定位属性: `float`、`clear`、`position`、`top`、`right`、`bottom`、`left`、`min-width`、`min-height`、`max-width`、`overflow`、`clip`、`z-index`、`min-height`

生成内容属性：`content`、`counter-reset`、`counter-increment`

轮廓样式属性：`outline-style`、`outline-width`、`outline-color`、`outline`

页面样式属性：`size`、`page-break-before`、`page-break-after`

声音样式属性：`pause-before`、`pause-after`、`pause`、`cue-before`、`cue-after`、`play-during`  `cue`

:::

::: warning 有继承性的属性

字体系列属性:

 `font-family`：字体系列 `font-weight`：字体的粗细 `font-size`：字体的大小 `font-style`：字体的风格

文本系列属性:

`text-indent`：文本缩进 `text-align`：文本水平对齐 `line-height`：行高 `word-spacing`：单词之间的间距

 `letter-spacing`：中文或者字母之间的间距 `color`：文本颜色

 `text-transform`：控制文本大小写（就是uppercase、lowercase、capitalize这三个）

元素可见性:

`visibility`：控制元素显示隐藏

列表布局属性:

`list-style`：列表风格，包括list-style-type、list-style-image等

光标属性:

`cursor`：光标显示为何种形态

:::

### 3. display的属性值及其作用

::: info display

|      **属性值**      |                                 作用                                 | 例子                     |
| :------------------------: | :------------------------------------------------------------------: | ------------------------ |
|     **`none`**     |             **元素不显示，并且会从文档流中移除。**             | `display:none`         |
|    **`block`**    |    **块类型。默认宽度为父元素宽度，可设置宽高，换行显示。**    | `display:block`        |
|    **`inline`**    | **行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。** | `display:inline`       |
| **`inline-block`** |        **默认宽度为内容宽度，可以设置宽高，同行显示。**        | `display:inline-block` |
|  **`list-item`**  |         **像块类型元素一样显示，并添加样式列表标记。**         | `display:list-item`    |
|    **`table`**    |                **此元素会作为块级表格来显示。**                | `display:table`        |
|   **`inherit`**   |           **规定应该从父元素继承display属性的值。**           | `display:inherit`:::   |

:::

### 4.display的block、inline和inline-block的区别

::: info display的block、inline和inline-block的区别

1. `block`：会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；
2. `inline`：元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；
3. `inline-block`：将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。

::: warning 对于行内元素和块级元素，其特点如下：

1. **行内元素**
   * 设置宽高无效；
   * 可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；
   * 不会自动换行；
2. **块级元素**
   * 可以设置宽高；
   * 设置margin和padding都有效；
   * 可以自动换行；
   * 多个块状，默认排列从上到下。

:::

### 5. 隐藏元素的方法有哪些

::: info 隐藏元素的方法有哪些

`display: none` ：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。

`visibility: hidden` ：元素在页面中仍占据空间，但是不会响应绑定的监听事件。

`opacity: 0` ：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。

`position: absolute` ：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。

`z-index`: 负值 ：来使其他元素遮盖住该元素，以此来实现隐藏。

`clip/clip-path` ：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。

`transform: scale(0,0)` ：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。

:::

### 6. link和@import的区别

::: info link和@import的区别

两者都是外部引用CSS的方式，它们的区别如下:

`link`是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；`@import`属于CSS范畴，只能加载CSS。

`link`引用CSS时，在页面载入时同时加载；`@import`需要页面网页完全载入以后加载。

`link`是XHTML标签，无兼容问题；`@import`是在CSS2.1提出的，低版本的浏览器不支持。

`link`支持使用Javascript控制DOM去改变样式；而 `@import`不支持。

:::

### 7. transition和animation的区别

::: info transition和animation的区别

`transition`是过渡属性 ，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。

`animation`是动画属性 ，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用 `@keyframe`定义）完成动画。

:::

### 8. display:none与visibility:hidden的区别

::: info display:none与visibility:hidden的区别

这两个属性都是让元素隐藏，不可见。两者区别如下：

在渲染树中，`display：none`会让元素完全从渲染树中消失，渲染时不会占据任何空间；`visibility:hidden`不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。

是否是继承属性？`display：none`是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；`visibility:hidden`是继承属性，子孙节点消失是由于继承了 `hidden`，通过设置 `visibility:visible`可以让子孙节点显示。

修改常规文档流中元素的 `display `通常会造成文档的重排，但是修改 `visibility`属性只会造成本元素的重绘；

如果使用读屏器，设置为 `display:none`的内容不会被读取，设置为 `visibility:hidden`的内容会被读取。

:::

### 9.伪元素和伪类的区别和作用？

::: info 伪元素和伪类的区别和作用？

伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如

:::
