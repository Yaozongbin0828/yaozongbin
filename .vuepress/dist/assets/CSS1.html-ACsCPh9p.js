import{_ as e,o as n,c as o,e as i,a as l,d as t}from"./app-dNQSHuEV.js";const d={},c=i('<h2 id="一、css基础" tabindex="-1"><a class="header-anchor" href="#一、css基础" aria-hidden="true">#</a> 一、CSS基础</h2><h3 id="_1-css选择器及其优先级" tabindex="-1"><a class="header-anchor" href="#_1-css选择器及其优先级" aria-hidden="true">#</a> 1. CSS选择器及其优先级</h3><table><thead><tr><th style="text-align:center;">选择器</th><th style="text-align:center;">格式</th><th style="text-align:center;">优先级</th><th style="text-align:center;">例子</th></tr></thead><tbody><tr><td style="text-align:center;"><code>id选择器</code></td><td style="text-align:center;"><code>#id</code></td><td style="text-align:center;"><code>100</code></td><td style="text-align:center;">使用#选择器选中的元素。</td></tr><tr><td style="text-align:center;"><code>类选择器</code></td><td style="text-align:center;"><code>.classname</code></td><td style="text-align:center;"><code>10</code></td><td style="text-align:center;">使用 .classname 选择器选中的元素</td></tr><tr><td style="text-align:center;"><code>属性选择器</code></td><td style="text-align:center;"><code>a[ref=&quot;&quot;xxx&quot;]</code></td><td style="text-align:center;"><code>10</code></td><td style="text-align:center;">通过元素的属性值选中元素，如[attr]、[attr=value]、[attr^=value]等。</td></tr><tr><td style="text-align:center;"><code>伪类选择器</code></td><td style="text-align:center;"><code>li:last-child</code></td><td style="text-align:center;"><code>10</code></td><td style="text-align:center;">通过元素的状态或位置选中元素，如:hover、:active、:first-child等。</td></tr><tr><td style="text-align:center;"><code>标签选择器</code></td><td style="text-align:center;"><code>div</code></td><td style="text-align:center;"><code>1</code></td><td style="text-align:center;">通过元素的标签选中元素，如div、p等。</td></tr><tr><td style="text-align:center;"><code>伪元素选择器</code></td><td style="text-align:center;"><code>li:after</code></td><td style="text-align:center;"><code>1</code></td><td style="text-align:center;">通过元素的特定位置选中元素的某个部分，如::before、::after等。</td></tr><tr><td style="text-align:center;"><code>相邻兄弟选择器</code></td><td style="text-align:center;"><code>h1+p</code></td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">通过元素的紧邻兄弟元素选中元素，如prev + next。</td></tr><tr><td style="text-align:center;"><code>子元素选择器</code></td><td style="text-align:center;"><code>ul&gt;li</code></td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">通过元素的直接子元素选中元素，如parent &gt; child。</td></tr><tr><td style="text-align:center;"><code>后代选择器</code></td><td style="text-align:center;"><code>li a</code></td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">通过元素的嵌套关系选中元素，如ancestor descendant。</td></tr><tr><td style="text-align:center;"><code>通配符选择器</code></td><td style="text-align:center;"><code>*</code></td><td style="text-align:center;"><code>0</code></td><td style="text-align:center;">通配符选择器常用 * 号表示，它是所有选择器里作用范围最广的，能匹配页面中所有的元素。</td></tr><tr><td style="text-align:center;"><code>!important</code></td><td style="text-align:center;"><code>!important</code></td><td style="text-align:center;"><code>1000</code></td><td style="text-align:center;">具有最高优先级的样式，会覆盖其他所有样式。</td></tr></tbody></table>',3),r=l("div",{class:"custom-container info"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8h.01"}),l("path",{d:"M11 12h1v4h1"})])]),l("p",{class:"custom-container-title"},"对于选择器的优先级:"),l("ul",null,[l("li",null,"标签选择器、伪元素选择器：1；"),l("li",null,"类选择器、伪类选择器、属性选择器：10；"),l("li",null,"id 选择器：100；"),l("li",null,"内联样式：1000；")]),l("div",{class:"custom-container warning"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8v4"}),l("path",{d:"M12 16h.01"})])]),l("p",{class:"custom-container-title"},"注意事项!"),l("ul",null,[l("li",null,"!important声明的样式的优先级最高( !important > 内联样式 )；"),l("li",null,"如果优先级相同，则最后出现的样式生效；"),l("li",null,"继承得到的样式的优先级最低；"),l("li",null,"通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；"),l("li",null,"样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式")])])],-1),s=l("h3",{id:"_2-css中可继承与不可继承属性有哪些",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_2-css中可继承与不可继承属性有哪些","aria-hidden":"true"},"#"),t(" 2. CSS中可继承与不可继承属性有哪些")],-1),a=l("div",{class:"custom-container info"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8h.01"}),l("path",{d:"M11 12h1v4h1"})])]),l("p",{class:"custom-container-title"},"无继承性的属性"),l("p",null,[l("code",null,"display"),t("：规定元素应该生成的框的类型。")]),l("p",null,[l("code",null,"vertical-align"),t("：垂直文本对齐")]),l("p",null,[l("code",null,"text-decoration"),t("：规定添加到文本的装饰")]),l("p",null,[l("code",null,"text-shadow"),t("：文本阴影效果")]),l("p",null,[l("code",null,"white-space"),t("：空白符的处理")]),l("p",null,[l("code",null,"unicode-bidi"),t("：设置文本的方向")]),l("p",null,[t("盒子模型的属性: "),l("code",null,"width"),t("、"),l("code",null,"height"),t("、"),l("code",null,"margin"),t("、"),l("code",null,"border"),t("、"),l("code",null,"padding")]),l("p",null,[t("背景属性："),l("code",null,"background"),t("、"),l("code",null,"background-color"),t("、"),l("code",null,"background-image"),t("、"),l("code",null,"background-repeat"),t("、"),l("code",null,"background-position"),t("、"),l("code",null,"background-attachment")]),l("p",null,[t("定位属性: "),l("code",null,"float"),t("、"),l("code",null,"clear"),t("、"),l("code",null,"position"),t("、"),l("code",null,"top"),t("、"),l("code",null,"right"),t("、"),l("code",null,"bottom"),t("、"),l("code",null,"left"),t("、"),l("code",null,"min-width"),t("、"),l("code",null,"min-height"),t("、"),l("code",null,"max-width"),t("、"),l("code",null,"overflow"),t("、"),l("code",null,"clip"),t("、"),l("code",null,"z-index"),t("、"),l("code",null,"min-height")]),l("p",null,[t("生成内容属性："),l("code",null,"content"),t("、"),l("code",null,"counter-reset"),t("、"),l("code",null,"counter-increment")]),l("p",null,[t("轮廓样式属性："),l("code",null,"outline-style"),t("、"),l("code",null,"outline-width"),t("、"),l("code",null,"outline-color"),t("、"),l("code",null,"outline")]),l("p",null,[t("页面样式属性："),l("code",null,"size"),t("、"),l("code",null,"page-break-before"),t("、"),l("code",null,"page-break-after")]),l("p",null,[t("声音样式属性："),l("code",null,"pause-before"),t("、"),l("code",null,"pause-after"),t("、"),l("code",null,"pause"),t("、"),l("code",null,"cue-before"),t("、"),l("code",null,"cue-after"),t("、"),l("code",null,"play-during"),t(),l("code",null,"cue")])],-1),u=l("div",{class:"custom-container warning"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8v4"}),l("path",{d:"M12 16h.01"})])]),l("p",{class:"custom-container-title"},"有继承性的属性"),l("p",null,"字体系列属性:"),l("p",null,[l("code",null,"font-family"),t("：字体系列 "),l("code",null,"font-weight"),t("：字体的粗细 "),l("code",null,"font-size"),t("：字体的大小 "),l("code",null,"font-style"),t("：字体的风格")]),l("p",null,"文本系列属性:"),l("p",null,[l("code",null,"text-indent"),t("：文本缩进 "),l("code",null,"text-align"),t("：文本水平对齐 "),l("code",null,"line-height"),t("：行高 "),l("code",null,"word-spacing"),t("：单词之间的间距")]),l("p",null,[l("code",null,"letter-spacing"),t("：中文或者字母之间的间距 "),l("code",null,"color"),t("：文本颜色")]),l("p",null,[l("code",null,"text-transform"),t("：控制文本大小写（就是uppercase、lowercase、capitalize这三个）")]),l("p",null,"元素可见性:"),l("p",null,[l("code",null,"visibility"),t("：控制元素显示隐藏")]),l("p",null,"列表布局属性:"),l("p",null,[l("code",null,"list-style"),t("：列表风格，包括list-style-type、list-style-image等")]),l("p",null,"光标属性:"),l("p",null,[l("code",null,"cursor"),t("：光标显示为何种形态")])],-1),h=l("h3",{id:"_3-display的属性值及其作用",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_3-display的属性值及其作用","aria-hidden":"true"},"#"),t(" 3. display的属性值及其作用")],-1),p=l("div",{class:"custom-container info"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8h.01"}),l("path",{d:"M11 12h1v4h1"})])]),l("p",{class:"custom-container-title"},"display"),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}},[l("strong",null,"属性值")]),l("th",{style:{"text-align":"center"}},"作用"),l("th",null,"例子")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}},[l("strong",null,[l("code",null,"none")])]),l("td",{style:{"text-align":"center"}},[l("strong",null,"元素不显示，并且会从文档流中移除。")]),l("td",null,[l("code",null,"display:none")])]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("strong",null,[l("code",null,"block")])]),l("td",{style:{"text-align":"center"}},[l("strong",null,"块类型。默认宽度为父元素宽度，可设置宽高，换行显示。")]),l("td",null,[l("code",null,"display:block")])]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("strong",null,[l("code",null,"inline")])]),l("td",{style:{"text-align":"center"}},[l("strong",null,"行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。")]),l("td",null,[l("code",null,"display:inline")])]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("strong",null,[l("code",null,"inline-block")])]),l("td",{style:{"text-align":"center"}},[l("strong",null,"默认宽度为内容宽度，可以设置宽高，同行显示。")]),l("td",null,[l("code",null,"display:inline-block")])]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("strong",null,[l("code",null,"list-item")])]),l("td",{style:{"text-align":"center"}},[l("strong",null,"像块类型元素一样显示，并添加样式列表标记。")]),l("td",null,[l("code",null,"display:list-item")])]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("strong",null,[l("code",null,"table")])]),l("td",{style:{"text-align":"center"}},[l("strong",null,"此元素会作为块级表格来显示。")]),l("td",null,[l("code",null,"display:table")])]),l("tr",null,[l("td",{style:{"text-align":"center"}},[l("strong",null,[l("code",null,"inherit")])]),l("td",{style:{"text-align":"center"}},[l("strong",null,"规定应该从父元素继承display属性的值。")]),l("td",null,[l("code",null,"display:inherit"),t(":::")])])])])],-1),g=l("h3",{id:"_4-display的block、inline和inline-block的区别",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_4-display的block、inline和inline-block的区别","aria-hidden":"true"},"#"),t(" 4.display的block、inline和inline-block的区别")],-1),x=l("div",{class:"custom-container info"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8h.01"}),l("path",{d:"M11 12h1v4h1"})])]),l("p",{class:"custom-container-title"},"display的block、inline和inline-block的区别"),l("ol",null,[l("li",null,[l("code",null,"block"),t("：会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；")]),l("li",null,[l("code",null,"inline"),t("：元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；")]),l("li",null,[l("code",null,"inline-block"),t("：将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。")])]),l("div",{class:"custom-container warning"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8v4"}),l("path",{d:"M12 16h.01"})])]),l("p",{class:"custom-container-title"},"对于行内元素和块级元素，其特点如下："),l("ol",null,[l("li",null,[l("strong",null,"行内元素"),l("ul",null,[l("li",null,"设置宽高无效；"),l("li",null,"可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；"),l("li",null,"不会自动换行；")])]),l("li",null,[l("strong",null,"块级元素"),l("ul",null,[l("li",null,"可以设置宽高；"),l("li",null,"设置margin和padding都有效；"),l("li",null,"可以自动换行；"),l("li",null,"多个块状，默认排列从上到下。")])])])])],-1),w=l("h3",{id:"_5-隐藏元素的方法有哪些",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_5-隐藏元素的方法有哪些","aria-hidden":"true"},"#"),t(" 5. 隐藏元素的方法有哪些")],-1),y=l("div",{class:"custom-container info"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8h.01"}),l("path",{d:"M11 12h1v4h1"})])]),l("p",{class:"custom-container-title"},"隐藏元素的方法有哪些"),l("p",null,[l("code",null,"display: none"),t(" ：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。")]),l("p",null,[l("code",null,"visibility: hidden"),t(" ：元素在页面中仍占据空间，但是不会响应绑定的监听事件。")]),l("p",null,[l("code",null,"opacity: 0"),t(" ：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。")]),l("p",null,[l("code",null,"position: absolute"),t(" ：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。")]),l("p",null,[l("code",null,"z-index"),t(": 负值 ：来使其他元素遮盖住该元素，以此来实现隐藏。")]),l("p",null,[l("code",null,"clip/clip-path"),t(" ：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。")]),l("p",null,[l("code",null,"transform: scale(0,0)"),t(" ：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。")])],-1),k=l("h3",{id:"_6-link和-import的区别",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_6-link和-import的区别","aria-hidden":"true"},"#"),t(" 6. link和@import的区别")],-1),m=l("div",{class:"custom-container info"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8h.01"}),l("path",{d:"M11 12h1v4h1"})])]),l("p",{class:"custom-container-title"},"link和@import的区别"),l("p",null,"两者都是外部引用CSS的方式，它们的区别如下:"),l("p",null,[l("code",null,"link"),t("是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；"),l("code",null,"@import"),t("属于CSS范畴，只能加载CSS。")]),l("p",null,[l("code",null,"link"),t("引用CSS时，在页面载入时同时加载；"),l("code",null,"@import"),t("需要页面网页完全载入以后加载。")]),l("p",null,[l("code",null,"link"),t("是XHTML标签，无兼容问题；"),l("code",null,"@import"),t("是在CSS2.1提出的，低版本的浏览器不支持。")]),l("p",null,[l("code",null,"link"),t("支持使用Javascript控制DOM去改变样式；而 "),l("code",null,"@import"),t("不支持。")])],-1),v=l("h3",{id:"_7-transition和animation的区别",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_7-transition和animation的区别","aria-hidden":"true"},"#"),t(" 7. transition和animation的区别")],-1),_=l("div",{class:"custom-container info"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8h.01"}),l("path",{d:"M11 12h1v4h1"})])]),l("p",{class:"custom-container-title"},"transition和animation的区别"),l("p",null,[l("code",null,"transition"),t("是过渡属性 ，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。")]),l("p",null,[l("code",null,"animation"),t("是动画属性 ，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用 "),l("code",null,"@keyframe"),t("定义）完成动画。")])],-1),f=l("h3",{id:"_8-display-none与visibility-hidden的区别",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_8-display-none与visibility-hidden的区别","aria-hidden":"true"},"#"),t(" 8. display:none与visibility:hidden的区别")],-1),b=l("div",{class:"custom-container info"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8h.01"}),l("path",{d:"M11 12h1v4h1"})])]),l("p",{class:"custom-container-title"},"display:none与visibility:hidden的区别"),l("p",null,"这两个属性都是让元素隐藏，不可见。两者区别如下："),l("p",null,[t("在渲染树中，"),l("code",null,"display：none"),t("会让元素完全从渲染树中消失，渲染时不会占据任何空间；"),l("code",null,"visibility:hidden"),t("不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。")]),l("p",null,[t("是否是继承属性？"),l("code",null,"display：none"),t("是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；"),l("code",null,"visibility:hidden"),t("是继承属性，子孙节点消失是由于继承了 "),l("code",null,"hidden"),t("，通过设置 "),l("code",null,"visibility:visible"),t("可以让子孙节点显示。")]),l("p",null,[t("修改常规文档流中元素的 "),l("code",null,"display "),t("通常会造成文档的重排，但是修改 "),l("code",null,"visibility"),t("属性只会造成本元素的重绘；")]),l("p",null,[t("如果使用读屏器，设置为 "),l("code",null,"display:none"),t("的内容不会被读取，设置为 "),l("code",null,"visibility:hidden"),t("的内容会被读取。")])],-1),M=l("h3",{id:"_9-伪元素和伪类的区别和作用",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_9-伪元素和伪类的区别和作用","aria-hidden":"true"},"#"),t(" 9.伪元素和伪类的区别和作用？")],-1),S=l("div",{class:"custom-container info"},[l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[l("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[l("circle",{cx:"12",cy:"12",r:"9"}),l("path",{d:"M12 8h.01"}),l("path",{d:"M11 12h1v4h1"})])]),l("p",{class:"custom-container-title"},"伪元素和伪类的区别和作用？"),l("p",null,"伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如")],-1),C=[c,r,s,a,u,h,p,g,x,w,y,k,m,v,_,f,b,M,S];function B(j,z){return n(),o("div",null,C)}const N=e(d,[["render",B],["__file","CSS1.html.vue"]]);export{N as default};
