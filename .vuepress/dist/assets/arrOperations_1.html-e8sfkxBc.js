import{_ as a,o as t,c as o,a as n,d as s}from"./app-fZllhPry.js";const e={},c=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),l=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"?Array"),n("p",null,"数组（Array）作为 JavaScript 位列第一的对象， 其重要性可见一般，在这里就让我们来详细的扒一扒数组对象都有哪些方法，它们分别能对数组做什么。")],-1),i=n("h2",{id:"一、数组是什么",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、数组是什么","aria-hidden":"true"},"#"),s(" 一、数组是什么")],-1),r=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"Array[数组]"),n("p",null,"官方对于 Array（数组）对象的解释是这样的：使用单独的变量名来存储一系列的值。简而言之就是把你要储存的值都放在一个房间里，然后给他们每人一个固定的座位号，你在找这些值的时候可以通过座位号 1、2、3...... 快速的找到你需要的数值。"),n("p",null,"在 JavaScript 中，数组是一种特殊的对象，用于表示和操作有序的数据集。数组是一种数据结构，可以存储多个值在一个变量中，并通过数字索引来访问这些值。"),n("p",null,"JavaScript 中的数组与其他编程语言中的数组有所不同，因为它具有动态大小，这意味着可以在运行时添加或删除元素。以下是一些关于 JavaScript 数组的基本特点："),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"特点"),n("ol",null,[n("li",null,"索引访问：可以通过索引访问数组中的元素，索引从0开始。例如，arr[0]将访问数组的第一个元素。"),n("li",null,"动态大小：可以随时向数组添加或删除元素，而不需要预先指定其大小。 异质性：数组可以包含不同类型的元素。"),n("li",null,"方法：JavaScript数组有大量内置方法，如push(), pop(), shift(), unshift(), splice(), slice(), map(), filter(), reduce()等，这些方法可用于操作数组。"),n("li",null,"多维数组：JavaScript中的数组也可以是二维或多维的。 关联数组：除了数字索引外，还可以使用字符串或其他对象作为键来存储和访问值。")]),n("p",null,"Array对象的方法可以根据其用途和功能来进行分类，本文将按照不同的分类来分别对这些方法做解释。")])],-1),p=n("h2",{id:"二、转换方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二、转换方法","aria-hidden":"true"},"#"),s(" 二、转换方法")],-1),u=n("p",null,"以下这些方法用于将数组转换为其他数据类型，或者将其他数据类型转换为数组。",-1),k=n("h3",{id:"_1-concat-连接两个或更多的数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-concat-连接两个或更多的数组","aria-hidden":"true"},"#"),s(" 1.concat() 连接两个或更多的数组")],-1),d=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"concat()"),n("p",null,[n("code",null,"concat()"),s(" 方法用于连接两个或多个数组。该方法不会改变现有的数组，而是返回一个新数组。")]),n("p",null,[s("语法："),n("code",null,"array1.concat(array2, array3,..., arrayN)")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" array1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" array2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'e'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'f'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" array3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'g'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'h'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" array4 "),n("span",{class:"token operator"},"="),s(" array1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),s("array2"),n("span",{class:"token punctuation"},","),s(" array3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("array4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 输出： ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i']"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),h=n("h3",{id:"_2-join-把数组的所有元素放入一个字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-join-把数组的所有元素放入一个字符串","aria-hidden":"true"},"#"),s(" 2.join() 把数组的所有元素放入一个字符串")],-1),g=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"join()"),n("p",null,[n("code",null,"join()"),s("方法用于把数组中的所有元素转换一个字符串，元素是通过指定的分隔符进行分隔的。 语法："),n("code",null,"array.join(separator)"),s(" 参数说明：")]),n("ul",null,[n("li",null,"separator 可选，指定要使用的分隔符，如果省略该参数，则使用逗号作为分隔符。")]),n("p",null,[n("strong",null,"返回值："),s(" 返回一个字符串，该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'" "'),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'"and"'),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 输出：Banana and Orange and Apple and Mango"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),m=n("h3",{id:"_3-slice-选取数组的一部分",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-slice-选取数组的一部分","aria-hidden":"true"},"#"),s(" 3.slice() 选取数组的一部分")],-1),w=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"slice()"),n("p",null,[n("code",null,"slice()"),s("方法可从已有的数组中返回选定的元素，slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分，"),n("strong",null,"slice() 方法不会改变原始数组。"),s(" 语法："),n("code",null,"array.slice(start, end)"),s(" 参数说明：")]),n("ul",null,[n("li",null,[n("code",null,"start"),s(" 可选，规定从何处开始选取，如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）；")]),n("li",null,[n("code",null,"end"),s(" 可选，规定从何处结束选取，该参数是数组片断结束处的数组下标，如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素，如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取，slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。")])]),n("p",null,[n("strong",null,"返回值："),s(" Array 返回一个新的数组，包含从 start（包括该元素） 到 end （不包括该元素）的 arrayObject 中的元素。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Lemon"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出: ['Lemon', 'Apple']"),s(`
`),n("span",{class:"token comment"},"// ['Lemon', 'Apple', 'Mango']"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),v=n("h3",{id:"_4-tostring-把数组转换为字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-tostring-把数组转换为字符串","aria-hidden":"true"},"#"),s(" 4.toString() 把数组转换为字符串")],-1),x=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"toSring()"),n("p",null,"toString() 方法可把数组转换为字符串，并返回结果。"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"var"),s(" str "),n("span",{class:"token operator"},"="),s(" fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：Banana,Orange,Apple,Mango"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"注意！"),n("pre",null,[n("code",null,`数组中的元素之间用逗号分隔。
`)])])],-1),f=n("h2",{id:"三、位置方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三、位置方法","aria-hidden":"true"},"#"),s(" 三、位置方法")],-1),_=n("p",null,"以下这些方法用于获取或设置数组中特定元素的位置或值。",-1),b=n("h3",{id:"_5-indexof-返回数组中某个指定的元素位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-indexof-返回数组中某个指定的元素位置","aria-hidden":"true"},"#"),s(" 5.indexOf() 返回数组中某个指定的元素位置")],-1),j=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"indexOf()"),n("p",null,"该方法将从头到尾地检索数组，看它是否含有对应的元素，开始检索的位置在数组 start 处或数组的开头(没有指定 start 参数时)，如果找到一个 item，则返回 item 的第一次出现的位置，开始位置的索引为 0，如果在数组中没找到指定元素则返回 -1。"),n("p",null,[s("语法 ："),n("code",null,"array.indexOf(item,start)")]),n("p",null,"参数说明："),n("ul",null,[n("li",null,"item必须,查找的元素"),n("li",null,"start 可选，规定在数组中开始检索的位置，它的合法取值是 0 到 stringObject.length - 1，如省略该参数，则将从字符串的首字符开始检索。")]),n("p",null,[n("strong",null,"返回值"),s(" ：Number 元素在数组中的位置，如果没有搜索到则返回 -1")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：6"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：2"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"注意"),n("p",null,[s("提示如果你想查找字符串最后出现的位置，请使用 "),n("code",null,"lastIndexOf()"),s(" 方法。")])])],-1),M=n("h3",{id:"_6-lastindexof-搜索数组中的元素-并返回它最后出现的位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-lastindexof-搜索数组中的元素-并返回它最后出现的位置","aria-hidden":"true"},"#"),s(" 6.lastIndexOf() 搜索数组中的元素，并返回它最后出现的位置")],-1),y=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"lastIndexOf()"),n("p",null,"lastIndexOf() 方法可返回一个指定的元素在数组中最后出现的位置，从该字符串的后面向前查找，如果要检索的元素没有出现，则该方法返回 -1，该方法将从尾到头地检索数组中指定元素 item，开始检索的位置在数组的 start 处或数组的结尾（没有指定 start 参数时），如果找到一个 item，则返回 item 从尾向前检索第一个次出现在数组的位置，数组的索引开始位置是从 0 开始的，如果在数组中没找到指定元素则返回 -1。"),n("p",null,[s("语法："),n("code",null,"array.lastIndexOf(item,start)")]),n("p",null,"参数说明："),n("ul",null,[n("li",null,"item必需，规定需检索的字符串值；"),n("li",null,"start可选，整数参数，规定在字符串中开始检索的位置，它的合法取值是 0 到stringObject.length - 1，如省略该参数，则将从字符串的最后一个字符处开始检索。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lastIndexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：6"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"注意!"),n("p",null,[s("如果你想查找数组首次出现的位置，请使用 "),n("code",null,"indexOf()"),s(" 方法。")])])],-1),B=n("h3",{id:"_7-shift-删除并返回数组的第一个元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-shift-删除并返回数组的第一个元素","aria-hidden":"true"},"#"),s(" 7.shift() 删除并返回数组的第一个元素")],-1),O=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"shift()"),n("p",null,[s("shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值， "),n("strong",null,"此方法改变数组的长度"),s(" 。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：Mango"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：[Orange,Apple,Mango]"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"提示"),n("p",null,[s("移除数组末尾的元素可以使用 "),n("code",null,"pop()"),s(" 方法")])])],-1),A=n("h3",{id:"_8-unshift-向数组的开头添加一个或更多元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-unshift-向数组的开头添加一个或更多元素","aria-hidden":"true"},"#"),s(" 8.unshift() 向数组的开头添加一个或更多元素")],-1),C=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"unshift()"),n("p",null,[s("unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度，"),n("strong",null,"该方法将改变原数组。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
fruits`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unshift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Lemon"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Pineapple"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：Lemon,Pineapple,Banana,Orange,Apple,Mango"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"提示"),n("p",null,[s("将新项添加到数组末尾，请使用 "),n("code",null,"push()"),s(" 方法")])])],-1),S=n("h3",{id:"_9-splice-从数组中添加或删除元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9-splice-从数组中添加或删除元素","aria-hidden":"true"},"#"),s(" 9.splice() 从数组中添加或删除元素")],-1),L=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"splice"),n("p",null,[n("code",null,"splice()"),s(" 方法用于添加或删除数组中的元素，"),n("strong",null,"这种方法会改变原始数组，")]),n("p",null,[s("语法："),n("code",null,"array.splice(index,howmany,item1,.....,itemX)")]),n("p",null,"参数说明："),n("ul",null,[n("li",null,"index 必需，规定从何处添加/删除元素，该参数是开始插入和（或）删除的数组元素的下标，必须是数字；"),n("li",null,'howmany 可选，规定应该删除多少元素，必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素；'),n("li",null,"item1, ..., itemX 可选，要添加到数组的新元素。")]),n("p",null,"返回值： 如果删除一个元素，则返回一个元素的数组，如果未删除任何元素，则返回空数组。"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Lemon"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"Kiwi"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 移除数组的第三个元素，并在数组第三个位置添加新元素:"),s(`
`),n("span",{class:"token comment"},"// 输出：[Banana,Orange,Lemon,Kiwi,Mango]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),I=n("h3",{id:"_10-pop-删除数组的最后一个元素并返回删除的元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-pop-删除数组的最后一个元素并返回删除的元素","aria-hidden":"true"},"#"),s(" 10.pop() 删除数组的最后一个元素并返回删除的元素")],-1),J=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"pop()"),n("p",null,[s("pop() 方法用于删除数组的最后一个元素并返回删除的元素， "),n("strong",null,"此方法会改变数组的长度"),s(" 。")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：Mango"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},'// 输出：["Banana", "Orange", "Apple"]'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"提示"),n("p",null,[s("移除数组第一个元素，请使用 "),n("code",null,"shift()"),s(" 方法。")])])],-1),N=n("h3",{id:"_11-push-向数组的末尾添加一个或更多元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_11-push-向数组的末尾添加一个或更多元素","aria-hidden":"true"},"#"),s(" 11.push() 向数组的末尾添加一个或更多元素")],-1),K=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"push()"),n("p",null,[n("code",null,"push()"),s(" 方法可向数组的末尾添加一个或多个元素，并返回新的长度，新元素将添加在数组的末尾，"),n("strong",null,"此方法会改变数组的长度")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cherry'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：5"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出：['Banana', 'Orange', 'Apple', 'Mango', 'Cherry']"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"提示"),n("p",null,[s("在数组起始位置添加元素请使用 "),n("code",null,"unshift()"),s(" 方法。")])])],-1),P=n("h2",{id:"四、排序方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#四、排序方法","aria-hidden":"true"},"#"),s(" 四、排序方法")],-1),V=n("h3",{id:"_12-sort-对数组的元素进行排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_12-sort-对数组的元素进行排序","aria-hidden":"true"},"#"),s(" 12.sort()对数组的元素进行排序")],-1),X=n("p",null,[n("code",null,"sort()"),s(' 方法用于对数组的元素进行排序，排序顺序可以是字母或数字，并按升序或降序，默认排序顺序为按字母升序（当数字是按字母顺序排列时"40"将排在"5"前面），使用数字排序，你必须通过一个函数作为参数来调用，函数指定数字是按照升序还是降序排列，'),n("strong",null,"这种方法会改变原始数组")],-1),E=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"sort()"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"//输出：['Apple', 'Banana', 'Mango', 'Orange']"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),T=n("h3",{id:"_13-reverse-反转数组的元素顺序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_13-reverse-反转数组的元素顺序","aria-hidden":"true"},"#"),s(" 13.reverse() 反转数组的元素顺序")],-1),q=n("p",null,[n("code",null,"reverse()"),s(" 方法用于反转数组中元素的顺序。")],-1),z=n("div",{class:"custom-container info"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"reverse()"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" fruits "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Banana"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Orange"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Apple"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Mango"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("fruits"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// 输出： ['Mango', 'Apple', 'Orange', 'Banana']"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),D=[c,l,i,r,p,u,k,d,h,g,m,w,v,x,f,_,b,j,M,y,B,O,A,C,S,L,I,J,N,K,P,V,X,E,T,q,z];function F(G,H){return t(),o("div",null,D)}const R=a(e,[["render",F],["__file","arrOperations_1.html.vue"]]);export{R as default};
