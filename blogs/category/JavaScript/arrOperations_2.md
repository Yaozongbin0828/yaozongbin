---
title: JavaScript系列篇章:数组对象的 34 种官方用法(二)
date: 2024/3/31
tags:
 - JavaScript
categories:
 - 前端
hideComments: false
---
## 五、迭代方法

这些方法允许你遍历数组的每个元素。

### 14.forEach() 对数组每个元素都执行一次回调函数

`forEach()` 用于对数组中的每个元素执行一次提供的函数；这个方法不会改变数组的长度。

::: info forEach()

语法：**`array.forEach(callback(currentValue, index, arr), thisArg)`**

参数说明：

* callback(currentValue, index, arr) 必需，数组中每个元素需要调用的函数；

  * currentValue 必需，当前元素；
  * index 可选，当前元素的索引值；
  * arr 可选，当前元素所属的数组对象；
* thisArg 可选，执行 callback 函数时使用的 this 值。

```js
var numbers = [65, 44, 12, 4];
var temp=0;
numbers.forEach((item)=>{return temp=temp+item})
console.log(temp)
// 输出：125
```

:::

### 15.map() 通过指定函数处理数组的每个元素，并返回处理后的数组

`map() `方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值，该方法按照原始数组元素顺序依次处理元素。

::: info map()

语法：`array.map(callback(currentValue,index,arr), thisArg)`

参数说明：

* callback(currentValue, index,arr)必须，函数，数组中的每个元素都会执行这个函数；
  * currentValue必须，当前元素的值；
  * index可选，当前元素的索引值；
  * arr可选，当前元素属于的数组对象；
* thisArg（可选）：执行 callback 函数时使用的 this 值。

```js
var numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt))//function函数使用Math函数，可选参数均省略
// 输出：2,3,4,5
```

:::

### 16.filter() 过滤符合条件的数值元素

`filter()`方法创建一个新的数组，过滤出旧数组中符合条件的元素，存储到新数组中，筛选条件由调用方提供。

::: info filter()

语法：`array.filter(callback(currentValue,index,arr), thisArg)`

参数说明：

* callback(currentValue, index,arr) 必需，过滤条件函数，数组中的每个元素都会执行这个函数，执行为 true 的符合筛选条件；
  * currentValue 必需，当前元素的值；
  * index 可选，当前元素的索引值；
  * arr 可选，当前元素属于的数组对象；
* thisArg 可选，执行 callback 函数时使用的 this 值。

```js
const ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
const newArr = ages.filter(checkAdult);
console.log(newArr) // 输出：[32,33,40]

var newArr1 = ages.filter((item, index) => (item >= 18));
console.log(newArr1); // 输出：[32,33,40]
```

thisArg 参数允许你在使用 Array.prototype.filter() 方法时明确指定回调函数中的 this 值，而不是依赖于默认的全局对象上下文。这对于需要特定上下文的对象（比如对象方法）非常有用。如下:

```js
const numbers = [1, 2, 3, 4, 5, 6];  
  
const evenNumbers = numbers.filter(function(num) {  
  return this.isEven(num); // 这里假设有一个名为 isEven 的方法在 this 上  
}, { isEven: function(num) { return num % 2 === 0; } });  
  
console.log(evenNumbers); // 输出: [2, 4, 6]
```

::: warning 注意！

   `filter()`不会对空数组进行检测； `filter() `不会改变原始数组

:::

### 17. find() 查找第一个符合条件的数组元素

`find()` 方法查找目标数组中第一个满足条件的数组元素；find() 方法会为数组中的每个元素依次调用一次传入的筛选条件，找到第一个满足条件的数组元素时，直接返回符合条件的元素，之后的元素不会再调用筛选函数，如果没有符合条件的元素返回 undefined

::: info find()

语法：`array.find(callback(currentValue, index, arr),thisArg)`

参数说明：

* callback(currentValue, index,arr) 必需，数组每个元素需要依次执行的函数；
  * currentValue 必需，当前元素；
  * index 可选，当前元素的索引值；
  * arr 可选，当前元素所属的数组对象；
* thisArg 可选，执行 callback 函数时使用的 this 值。

```js
var ages = [4, 12, 16, 20];
function checkAdult(age) {
  return age >= 18;
}
const temp= ages.find(checkAdult);
console.log(temp) // 输出：20

temp = ages.find((item, index) => { return item>= 10; });
console.log(temp) // 输出：12
```

::: warning 注意！

`find()` 对于空数组，函数是不会执行的，`find()` 并没有改变数组的原始值

:::

### 18.some() 检测数组元素中是否有元素符合指定条件

`some()` 方法用于检测数组中的元素是否满足指定条件（函数提供），some() 方法会为数组的每个元素依次执行 callback 函数，如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false。

::: info some()

语法：`array.some(callback(currentValue,index,arr),thisArg)`

参数说明：

* callback(currentValue, index,arr) 必须，函数，数组中的每个元素都会执行这个函数；
  * currentValue 必须，当前元素的值；
  * index 可选，当前元素的索引值；
  * arr 可选，当前元素属于的数组对象；
* thisArg 可选，对象作为该执行回调时使用，传递给函数，用作 "this" 的值，如果省略了 thisArg ，"this" 的值为 "undefined"。

```js
var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.some(checkAdult))
// 输出：true
```

::: warning 注意！

`some() `不会对空数组进行检测；`some()` 不会改变原始数组！

:::

### 19.every() 检测数值元素的每个元素是否都符合条件方法

`every()` 方法用于检测数组中所有元素是否都通过指定的测试函数；如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测；如果所有元素都满足条件，则返回 `true`。

::: info every()

语法：`array.every(callback(currentValue,index,arr), thisArg)`

参数说明：

* callback（必需）：用于测试每个元素的函数。这个函数应返回一个布尔值来指示元素是否通过测试。
  * currentValue 必需，当前元素的值；
  * index 可选，当前元素的索引值；
  * arr 可选，当前元素属于的数组对象；
* thisArg（可选）：执行 callback 函数时使用的 this 值。

```js
const arr = [1, 2, 3, 4, 5];  
const isEven = function(num) { return num % 2 === 0; };  
const allEven = arr.every(isEven);  
console.log(allEven); // 输出: false

var ages = [32, 33, 16, 40];
console.log(ages.every((item)=>item>18)) // 输出：false
console.log(ages.every((item)=>item>10)) // 输出：true
```

返回值：返回一个布尔值，表示数组中的所有元素是否都通过了测试。

::: warining 注意!

`every()` 不会对空数组进行检测，`every()` 不会改变原始数组。

:::

## 六、检测方法

这些方法用于检测数组的一些特性，例如是否存在某个元素或某个值是否存在于数组中。

### 20.includes() 判断一个数组是否包含一个指定的值

`includes()` 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。

::: info includes()

语法：`arr.includes(searchElement,fromIndex)`

参数说明：

* searchElement 必须，需要查找的元素值；
* fromIndex 可选，从该索引处开始查找 searchElement 如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索，默认值为 0。

```js
var  site = ['runoob', 'google', 'taobao'];
console.log(site.includes('runoob')
// 输出：true
```

::: warning 注意！

如果 fromIndex 大于等于数组长度 ，则返回 false，如果 fromIndex 为负值，计算出的索引将作为开始搜索 searchElement 的位置。如果计算出的索引小于 0，则整个数组都会被搜索。

:::

### 21. findIndex() 查找第一个符合条件的数组元素索引

`findIndex()` 方法查找数组中第一个符合条件的元素位置，findIndex() 方法为数组中的每个元素都调用一次函数执行，当数组中的元素在测试条件时返回 true 时，findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数，如果没有符合条件的元素返回 -1。

::: info findIndex()

语法：`array.findIndex(callback(currentValue, index, arr), thisArg)`

参数说明：

* callback(currentValue, index,arr) 必须，数组每个元素需要执行的函数；
  * currentValue 必需，当前元素；
  * index 可选，当前元素的索引；
  * arr 可选，当前元素所属的数组对象；
* thisArg 可选，执行 callback 函数时使用的 this 值。

```js
var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
const temp = ages.findIndex(checkAdult);
console.log(temp)
// 输出：2
const temp = ages.findIndex((item, index) =>( item >= 18))
console.log(temp)
// 输出：2
```

::: warining 注意！

findIndex() 对于空数组，函数是不会执行的; findIndex() 并没有改变数组的原始值

:::

## 七、解构赋值方法

这些方法允许你将数组的元素解构到变量中。

### 22.entries() 生成数组的可迭代对象

::: info entries()

`entries() `方法主要用于遍历数组或对象的键值对。在数组中，entries 方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键值对。例如，对于数组 `arr = ["a", "b", "c"]`，调用 arr.entries() 后，可以得到如下结果：

```js
[  
  [0, "a"],  
  [1, "b"],  
  [2, "c"]  
]
```

具体使用方式:

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var arr = fruits.entries();
console.log((arr.next()).value) 
console.log((arr.next()).value[1]) 
// 输出：[0, 'Banana']
// 输出：Banana
```

:::

### 23.keys() 返回数组的可迭代对象

::: info keys()

`keys()` 方法用于从数组创建一个包含数组键的可迭代对象。

```js
const arr = ["Banana", "Orange", "Apple", "Mango"]; 
const newArr = arr.keys();
for (const iterator of newArr) { 
  console.log(iterator);
} 
// 输出：0 1 2 3
```

:::
