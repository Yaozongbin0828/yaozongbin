---
title: 【V3 Admin Vite】平台配置（涉及布局、路由菜单、全局样式配置）(4)
date: 2024/1/28
tags:
 - Vue
categories:
 - Vue
hideComments: false
sticky: 5
---
## 前言

基于[【V3 Admin Vite】掌握登录模块涉及路由守卫(3)](v3AdminVite3.md) 的内容继续续上，本文会讲解[V3-Admin-Vite](https://v3-vite-admin-js-master.zeabur.app/#/dashboard)平台相关配置。

项目链接①：[v3-vite-admin-js-master.zeabur.app](https://v3-vite-admin-js-master.zeabur.app/#/dashboard)

项目链接②：[yaozongbin.github.io/v3-vite-admin-js-master](https://yaozongbin.github.io/v3-vite-admin-js-master)

## 目的

本文将教会你如何使用该平台内置的一些配置，比如和布局相关的隐藏标签栏、和路由相关的路由缓存、和样式相关的修改全局颜色。

## 布局配置

::: info Layouts

页面布局内容设计的大致如下：

![1713670317675](image/v3AdminVite4/1713670317675.png)

`header` 是通过CSS `position:fixed + top:0` 固定在头部，`footer`反之。， `@/config/layout.ts` 布局配置文件里将 `layoutSettings` 配置项的布尔值修改为 `true `即可。

![1713671029165](image/v3AdminVite4/1713671029165.png)

![1713671034462](image/v3AdminVite4/1713671034462.png)

![1713671039748](image/v3AdminVite4/1713671039748.png)

:::

## 响应式布局

::: info useResize

响应式布局如下：

![1713685113279](image/v3AdminVite4/1713685113279.png)

响应式布局是参考[bootstrap](https://www.bootcss.com/)里的移动端原理来实现的，并且封装一个 `hook`来判断侧边栏伸缩展开。

![1713672665663](image/v3AdminVite4/1713672665663.png)

配合[pinia](https://pinia.vuejs.org/zh/)设置 `Sidebar`的状态

![1713672670803](image/v3AdminVite4/1713672670803.png)

设置缓存 `CacheKey`，以便于保存用户偏好设置

![1713672937135](image/v3AdminVite4/1713672937135.png)

![1713672657091](image/v3AdminVite4/1713672657091.png)

:::

## 路由菜单

::: info RouterMenu

路由的定义以及配置在 `@/router/index.js` 文件里，比如登录路由配置：

![1713671567315](image/v3AdminVite4/1713671567315.png)

::: warning 注意

首先我们要了解一个基本的知识点：我们平台自定义的配置项都在 `meta` 属性下，而其他的比如 `path`、`component`、`redirect`、`children`、`name` 这些属性，是 `vue-router` 自带的，如果你还不了解它们各自代表什么意思，那你应该去[Vue-Router官网](https://router.vuejs.org/zh/)学习！！！

:::

## 图标使用

::: info svg-icon

假如想使用本地的 `SVG` 图标，那你应该将静态资源复制到 `@/icons/svg` 目录下，比如这个名为 `dashboard` 的图标

![1713673086726](image/v3AdminVite4/1713673086726.png)

实现的前提需要封装 `svgIcon`组件，再通过[iconfont](https://www.iconfont.cn/)网站下载的 `svg`图标部署上来。

![1713673480751](image/v3AdminVite4/1713673480751.png)

```js
 meta: {
      title: "首页",
      svgIcon: "dashboard",
      affix: true,
},
```

![1713683398150](image/v3AdminVite4/1713683398150.png)

:::

::: info element-icon

假如想使用 `Element Plus` 的 `Icon`，那你应该去 [ElementPlus官网](https://element-plus.org/zh-CN/component/icon.html#icon-collection "https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88") 找一个符合要求的图标并复制它的名字

![1713683099913](image/v3AdminVite4/1713683099913.png)

```js
meta: {
  title: "首页",
  elIcon: "House",
  affix: true
}
```

:::

## 全局样式

::: info style

全局样式如下：

![1713683818547](image/v3AdminVite4/1713683818547.png)

`transition.scss`： 这里可以写动画相关的样式

`index.scss`：这里是所有样式的入口，也可以写样式来覆盖原生 html 的样式

`mixins.scss`：这里可以写和 scss mixin 相关的样式

 `variables.css`：全局样式(通过 `calc()`函数获取设定值)

```css
/** 全局 CSS 变量，这种变量不仅可以在 CSS 和 SCSS 中使用，还可以导入到 JS 中使用 */

:root {
  /** 全局背景色 */
  --v3-body-bg-color: #f2f3f5;
  /** Header 区域 = NavigationBar 组件 + TagsView 组件  calc()动态计算长度值*/
  --v3-header-height: calc(
    var(--v3-navigationbar-height) + var(--v3-tagsview-height)
  );

  /** NavigationBar 组件 */
  --v3-navigationbar-height: 50px;
  /** Sidebar 组件 */
  --v3-sidebar-width: 220px;
  --v3-sidebar-hide-width: 58px;
  --v3-sidebar-menu-item-height: 60px;
  --v3-sidebar-menu-tip-line-bg-color: var(--el-color-primary);
  --v3-sidebar-menu-bg-color: #001428;
  /** #001428 */
  --v3-sidebar-menu-hover-bg-color: #ffffff10;
  --v3-sidebar-menu-text-color: #c0c4cc;
  --v3-sidebar-menu-active-text-color: #ffffff;
  /** SidebarLogo 组件 */
  --v3-sidebarlogo-bg-color: #001428;
  /** TagsView 组件 */
  --v3-tagsview-height: 34px;
  --v3-tagsview-tag-text-color: #495060;
  --v3-tagsview-tag-active-text-color: #ffffff;
  --v3-tagsview-tag-bg-color: #ffffff;
  --v3-tagsview-tag-active-bg-color: var(--el-color-primary);
  --v3-tagsview-tag-border-radius: 2px;
  --v3-tagsview-tag-border-color: #d8dce5;
  --v3-tagsview-tag-active-border-color: var(--el-color-primary);
  --v3-tagsview-tag-active-before-color: #ffffff;
  --v3-tagsview-tag-icon-hover-bg-color: #00000030;
  --v3-tagsview-tag-icon-hover-color: #ffffff;
  /** Footer组件*/
  --v3-footer-background-color: #fff;
  --v3-footer-height: 45px;
}

```

::: warning 提示

如果你想知道某个样式是什么作用，可以直接看注释和命名，因为项目本身还是非常规范的，这两点已经满足大部分人了。也可以直接复制变量名在编辑器里搜索，就能查看到该变量在什么地方用到了。

:::

## V3 Admin Vite 相关链接

* [V3 Admin Vite 中文文档](https://juejin.cn/post/7089377403717287972)
* [Github/un-pany](https://github.com/un-pany/v3-admin-vite)
* [Gitee/un-pany](https://gitee.com/un-pany/v3-admin-vite)
