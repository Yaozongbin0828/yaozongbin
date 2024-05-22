---
title: VuePress官方插件分享
date: 2023/10/25
tags:
 - Vuepress
categories:
 - 前端
hideComments: false
---
## 前言

除了官方[vuepress](https://v2.vuepress.vuejs.org/zh/)提供的插件，插件广场中又提供了许多实用的插件，大家可以自行探索使用。插件配置好后，一定要重新启动项目（热更新都是泪啊）😭

### back-to-top

[![@vuepress/plugin-back-to-top](https://badgen.net/npm/v/@vuepress/plugin-back-to-top/next?label=%40vuepress%2Fplugin-back-to-top%40next)](https://www.npmjs.com/package/@vuepress/plugin-back-to-top "@vuepress/plugin-back-to-top")

回到顶部小火箭插件

* 安装指令

```bash
npm install -D @vuepress/plugin-back-to-top
```

* config.ts中使用

```bash
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

module.exports = {
    ['@vuepress-reco/vuepress-plugin-back-to-top']
}
```

分页插件，实现首页内容分页展示效果。

### nprogress

[![@vuepress/plugin-nprogress](https://badgen.net/npm/v/@vuepress/plugin-nprogress/next?label=%40vuepress%2Fplugin-nprogress%40next)](https://www.npmjs.com/package/@vuepress/plugin-nprogress "@vuepress/plugin-nprogress")

切换页面时会展示进度条

* 安装指令

```bash
npm i -D @vuepress/plugin-nprogress@next
```

* config.ts中使用

```bash
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default {
  plugins: [
    nprogressPlugin(),
  ],
}
```

### container

[![@vuepress/plugin-container](https://badgen.net/npm/v/@vuepress/plugin-container/next?label=%40vuepress%2Fplugin-container%40next)](https://www.npmjs.com/package/@vuepress/plugin-container "@vuepress/plugin-container")

VuePress 站点注册自定义容器

* 安装指令

```bash
npm i -D @vuepress/plugin-container@next
```

* config.ts中使用

```bash
import { containerPlugin } from '@vuepress/plugin-container'

export default {
  plugins: [
    containerPlugin({
      // 配置项
    }),
  ],
}
```

### external-link-icon

[![@vuepress/plugin-external-link-icon](https://badgen.net/npm/v/@vuepress/plugin-external-link-icon/next?label=%40vuepress%2Fplugin-external-link-icon%40next)](https://www.npmjs.com/package/@vuepress/plugin-external-link-icon "@vuepress/plugin-external-link-icon")

该插件会为你 Markdown 内容中的外部链接添加一个图标

* 安装指令

```bash
npm i -D @vuepress/plugin-external-link-icon@next
```

* config.ts中使用

```bash
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'

export default {
  plugins: [
    externalLinkIconPlugin({
      // 配置项
    }),
  ],
}
```

### google-analytics

[![@vuepress/plugin-google-analytics](https://badgen.net/npm/v/@vuepress/plugin-google-analytics/next?label=%40vuepress%2Fplugin-google-analytics%40next)](https://www.npmjs.com/package/@vuepress/plugin-google-analytics "@vuepress/plugin-google-analytics")

将 [Google Analytics在新窗口打开](https://analytics.google.com/) 集成到 VuePress 中

* 安装指令

```bash
npm i -D @vuepress/plugin-google-analytics@next
```

* config.ts中使用

```bash
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default {
  plugins: [
    googleAnalyticsPlugin({
      // 配置项
    }),
  ],
}
```

### medium-zoom

[![@vuepress/plugin-medium-zoom](https://badgen.net/npm/v/@vuepress/plugin-medium-zoom/next?label=%40vuepress%2Fplugin-medium-zoom%40next)](https://www.npmjs.com/package/@vuepress/plugin-medium-zoom "@vuepress/plugin-medium-zoom")

将 [medium-zoom在新窗口打开](https://github.com/francoischalifour/medium-zoom#readme) 集成到 VuePress 中，为图片提供可缩放的功能。

* 安装指令

```bash
npm i -D @vuepress/plugin-medium-zoom@next
```

* config.ts中使用

```bash
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default {
  plugins: [
    mediumZoomPlugin({
      // 配置项
    }),
  ],
}
```

### register-components

[![@vuepress/plugin-register-components](https://badgen.net/npm/v/@vuepress/plugin-register-components/next?label=%40vuepress%2Fplugin-register-components%40next)](https://www.npmjs.com/package/@vuepress/plugin-register-components "@vuepress/plugin-register-components")

根据组件文件或目录自动注册 Vue 组件。

* 安装指令

```bash
npm i -D @vuepress/plugin-register-components@next
```

* config.ts中使用

```bash
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default {
  plugins: [
    registerComponentsPlugin({
      // 配置项
    }),
  ],
}
```

## 结语

总的来说博客搭建完毕后会觉得好像也不是很难，但是中间踩到了许多坑，导致博客搭建的过程中很难受。最后希望本文可以帮助到一下你们。

---
