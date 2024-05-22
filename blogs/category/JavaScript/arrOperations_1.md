---
title: JavaScript系列篇章:数组对象的 34 种官方用法(一)
date: 2024/3/16
tags:
 - JavaScript
categories:
 - 前端
hideComments: false

---
## 前言

::: warning ?Array

数组（Array）作为 JavaScript 位列第一的对象， 其重要性可见一般，在这里就让我们来详细的扒一扒数组对象都有哪些方法，它们分别能对数组做什么。

:::

## 一、数组是什么

::: info Array[数组]

官方对于 Array（数组）对象的解释是这样的：使用单独的变量名来存储一系列的值。简而言之就是把你要储存的值都放在一个房间里，然后给他们每人一个固定的座位号，你在找这些值的时候可以通过座位号 1、2、3...... 快速的找到你需要的数值。

在 JavaScript 中，数组是一种特殊的对象，用于表示和操作有序的数据集。数组是一种数据结构，可以存储多个值在一个变量中，并通过数字索引来访问这些值。

JavaScript 中的数组与其他编程语言中的数组有所不同，因为它具有动态大小，这意味着可以在运行时添加或删除元素。以下是一些关于 JavaScript 数组的基本特点：

::: warning 特点

1. 索引访问：可以通过索引访问数组中的元素，索引从0开始。例如，arr[0]将访问数组的第一个元素。
2. 动态大小：可以随时向数组添加或删除元素，而不需要预先指定其大小。
   异质性：数组可以包含不同类型的元素。
3. 方法：JavaScript数组有大量内置方法，如push(), pop(), shift(), unshift(), splice(), slice(), map(), filter(), reduce()等，这些方法可用于操作数组。
4. 多维数组：JavaScript中的数组也可以是二维或多维的。
   关联数组：除了数字索引外，还可以使用字符串或其他对象作为键来存储和访问值。

Array对象的方法可以根据其用途和功能来进行分类，本文将按照不同的分类来分别对这些方法做解释。

:::

## 二、转换方法

以下这些方法用于将数组转换为其他数据类型，或者将其他数据类型转换为数组。

### 1.concat() 连接两个或更多的数组

::: info concat()

`concat()` 方法用于连接两个或多个数组。该方法不会改变现有的数组，而是返回一个新数组。

语法：``array1.concat(array2, array3,..., arrayN)``

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];
const array4 = array1.concat(array2, array3);
console.log(array4); // 输出： ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i']
```

:::

### 2.join() 把数组的所有元素放入一个字符串

::: info join()

`join()`方法用于把数组中的所有元素转换一个字符串，元素是通过指定的分隔符进行分隔的。 语法：`array.join(separator)` 参数说明：

* separator 可选，指定要使用的分隔符，如果省略该参数，则使用逗号作为分隔符。

**返回值：** 返回一个字符串，该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" " + "and" + " "));
// 输出：Banana and Orange and Apple and Mango
```

:::

### 3.slice() 选取数组的一部分

::: info slice()

 `slice()`方法可从已有的数组中返回选定的元素，slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分，**slice() 方法不会改变原始数组。** 语法：`array.slice(start, end)` 参数说明：

* `start` 可选，规定从何处开始选取，如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）；
* `end` 可选，规定从何处结束选取，该参数是数组片断结束处的数组下标，如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素，如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取，slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。

**返回值：** Array 返回一个新的数组，包含从 start（包括该元素） 到 end （不包括该元素）的 arrayObject 中的元素。

```javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(-3,-1))
console.log(fruits.slice(-3))
// 输出: ['Lemon', 'Apple']
// ['Lemon', 'Apple', 'Mango']
```

:::

### 4.toString() 把数组转换为字符串

::: info toSring()

toString() 方法可把数组转换为字符串，并返回结果。

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var str = fruits.toString();
console.log(str)
// 输出：Banana,Orange,Apple,Mango
```

::: warning 注意！

    数组中的元素之间用逗号分隔。

:::

## 三、位置方法

以下这些方法用于获取或设置数组中特定元素的位置或值。

### 5.indexOf() 返回数组中某个指定的元素位置

::: info indexOf()

该方法将从头到尾地检索数组，看它是否含有对应的元素，开始检索的位置在数组 start 处或数组的开头(没有指定 start 参数时)，如果找到一个 item，则返回 item 的第一次出现的位置，开始位置的索引为 0，如果在数组中没找到指定元素则返回 -1。

语法 ：`array.indexOf(item,start)`

参数说明：

* item必须,查找的元素
* start 可选，规定在数组中开始检索的位置，它的合法取值是 0 到 stringObject.length - 1，如省略该参数，则将从字符串的首字符开始检索。

**返回值** ：Number 元素在数组中的位置，如果没有搜索到则返回 -1

```js
var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple","Mango"];
console.log(fruits.indexOf("Apple",4))
// 输出：6
console.log(fruits.indexOf("Apple",0))
// 输出：2
```

::: warning 注意

提示如果你想查找字符串最后出现的位置，请使用 `lastIndexOf()` 方法。

:::

### 6.lastIndexOf() 搜索数组中的元素，并返回它最后出现的位置

::: info lastIndexOf()

lastIndexOf() 方法可返回一个指定的元素在数组中最后出现的位置，从该字符串的后面向前查找，如果要检索的元素没有出现，则该方法返回 -1，该方法将从尾到头地检索数组中指定元素 item，开始检索的位置在数组的 start 处或数组的结尾（没有指定 start 参数时），如果找到一个 item，则返回 item 从尾向前检索第一个次出现在数组的位置，数组的索引开始位置是从 0 开始的，如果在数组中没找到指定元素则返回 -1。

语法：`array.lastIndexOf(item,start)`

参数说明：

* item必需，规定需检索的字符串值；
* start可选，整数参数，规定在字符串中开始检索的位置，它的合法取值是 0 到stringObject.length - 1，如省略该参数，则将从字符串的最后一个字符处开始检索。

```js
var fruits=["Banana","Orange","Apple","Mango","Banana","Orange","Apple","Mango"];
console.log(fruits.lastIndexOf("Apple"))
// 输出：6
```

::: warning 注意!

如果你想查找数组首次出现的位置，请使用 `indexOf()` 方法。

:::

### 7.shift() 删除并返回数组的第一个元素

::: info shift()

shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值， **此方法改变数组的长度** 。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift())
// 输出：Mango
console.log(fruits)
// 输出：[Orange,Apple,Mango]

```

::: warning 提示
移除数组末尾的元素可以使用 `pop()` 方法

:::

### 8.unshift() 向数组的开头添加一个或更多元素

::: info unshift()

unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度，**该方法将改变原数组。**

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits)
// 输出：Lemon,Pineapple,Banana,Orange,Apple,Mango
```

::: warning 提示

将新项添加到数组末尾，请使用 `push()` 方法

:::

### 9.splice() 从数组中添加或删除元素

::: info splice

`splice()` 方法用于添加或删除数组中的元素，**这种方法会改变原始数组，**

语法：`array.splice(index,howmany,item1,.....,itemX)`

参数说明：

* index 必需，规定从何处添加/删除元素，该参数是开始插入和（或）删除的数组元素的下标，必须是数字；
* howmany 可选，规定应该删除多少元素，必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素；
* item1, ..., itemX 可选，要添加到数组的新元素。

返回值： 如果删除一个元素，则返回一个元素的数组，如果未删除任何元素，则返回空数组。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2,1,"Lemon","Kiwi"))
// 移除数组的第三个元素，并在数组第三个位置添加新元素:
// 输出：[Banana,Orange,Lemon,Kiwi,Mango]
```

:::

### 10.pop() 删除数组的最后一个元素并返回删除的元素

::: info pop()

pop() 方法用于删除数组的最后一个元素并返回删除的元素， **此方法会改变数组的长度** 。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop())
// 输出：Mango
console.log(fruits)
// 输出：["Banana", "Orange", "Apple"]
```

::: warning 提示

移除数组第一个元素，请使用 `shift()` 方法。

:::

### 11.push() 向数组的末尾添加一个或更多元素

::: info push()

`push()` 方法可向数组的末尾添加一个或多个元素，并返回新的长度，新元素将添加在数组的末尾，**此方法会改变数组的长度**

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push('Cherry'))
// 输出：5
console.log(fruits)
// 输出：['Banana', 'Orange', 'Apple', 'Mango', 'Cherry']
```

::: warning 提示

在数组起始位置添加元素请使用 `unshift()` 方法。

:::

## 四、排序方法

### 12.sort()对数组的元素进行排序

`sort()` 方法用于对数组的元素进行排序，排序顺序可以是字母或数字，并按升序或降序，默认排序顺序为按字母升序（当数字是按字母顺序排列时"40"将排在"5"前面），使用数字排序，你必须通过一个函数作为参数来调用，函数指定数字是按照升序还是降序排列，**这种方法会改变原始数组**

::: info sort()

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort())
//输出：['Apple', 'Banana', 'Mango', 'Orange']
```

:::

### 13.reverse() 反转数组的元素顺序

`reverse()` 方法用于反转数组中元素的顺序。

::: info reverse()

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse())
// 输出： ['Mango', 'Apple', 'Orange', 'Banana']
```

:::
