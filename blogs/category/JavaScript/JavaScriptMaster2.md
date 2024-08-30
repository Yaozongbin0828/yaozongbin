---
title: JavaScript-master-2(基于JavaScript开发的小项目)
date: 2024/5/19
tags:
 - JavaScript
categories:
 - 前端
hideComments: false
---
## Github API

<iframe src="/assets/Github-Api/index.html" scrolling="auto" frameborder="0" style="width:100%;height:40rem;" >
</iframe>

::: info githubApi

我将向您展示如何在 `javascript`中使用 `Github API`。我们创建了一个项目，您可以使用 `javascript`搜索github用户名并查看其详细信息❗

`GitHub API`是 `GitHub`提供的一组接口，允许开发者通过编程方式与 GitHub 上的资源进行交互。开发者可以创建、读取、更新和删除仓库、问题、拉取请求等各种 GitHub 上的资源，以及执行与用户、组织和团队相关的操作。这使得开发者可以通过他们的应用程序或工具与 GitHub 平台进行集成，从而实现自动化、定制化和扩展性的功能。GitHub API 是构建在 REST 原则之上的，支持 JSON 格式的数据交换，提供了丰富的功能和灵活的调用方式。

:::

::: warning 核心代码

```html
# HTML
	...
      <button onclick="searchGithub()">搜索</button>
	...
      <div class="details" id="result"></div>
# JS
<script>
const searchGithub = async () => {
  const username = document.getElementById("searchInput").value;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const detailsContainer = document.querySelector(".details");
  const data = await response.json();

  if (response.ok) {
    console.log(response);
    detailsContainer.style.display = "flex";
    document.getElementById("result").innerHTML = `
            <div class="profile">
                <div class="profile-image">
                    <img src="${data.avatar_url}" />
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name || data.login}</h2>
                    <p class="username">@${data.login}</p>
                    <p class="bio">${
                      data.bio || "Account doesn't have a bio."
                    }</p>

                    <div class="stats">
                        <div>
                            <div class="stats-name">Public Repos</div>
                            <div class="stats-value">${data.public_repos}</div>
                        </div>
                        <div>
                            <div class="stats-name">Followers</div>
                            <div class="stats-value">${data.followers}</div>
                        </div>
                        <div>
                            <div class="stats-name">Following</div>
                            <div class="stats-value">${data.following}</div>
                        </div>
                    </div>

                <div class="media">
                    <p>
                        <span class="media-value">${
                          data.location || "暂无"
                        }</span>
                    </p>
                    <p>
                        <span class="media-value">${data.blog || "暂无"}</span>
                    </p>
                    <p>
                        <span class="media-value">${
                          data.twitter_username || "暂无"
                        }</span>
                    </p>
                    <p>
                        <span class="media-value">${
                          data.company || "暂无"
                        }</span>
                    </p>
                </div>
            </div>
        </div>
        `;
  } else {
    alert(data.message);
  }
};
</script>
```

:::

## 渐变生成器

<iframe src="/assets/Gradient-Generator/index.html" scrolling="auto" frameborder="0" style="width:100%;height:40rem;" >
</iframe>

::: info 渐变生成器

我将向您展示如何使用javascript编写渐变生成器应用程序。有了这个javascript渐变生成器，你可以用代码生成渐变，并将其用于网站设计项目❗

:::

::: warning 核心代码

```html
# HTML
	...
      <button id="submit" onclick="generateCode()">生成</button>
	...
      <button id="copy" onclick="copyText()">复制</button>
# JS
    <script>
        let colorOne = document.getElementById("color-a");
	let colorTwo = document.getElementById("color-b");
	let currentDirection = "to bottom";
	let outputCode = document.getElementById("code");
	// 设置渐变方向
	function setDirection(value, _this) { 
 	 let direcrtions = document.querySelectorAll(".buttons button");
 	 for (let i of direcrtions) {
  	  i.classList.remove("active");
  	}
	  _this.classList.add("active");
	  currentDirection = value;
	}

	function generateCode() {
	 outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value},${colorTwo.value})`; // 输出渐变颜色代码
  	document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`; 	// 改变页面背景
}

	function copyText() {
 	 outputCode.select(); // 选择输入框中的内容
  	document.execCommand("copy"); // 执行复制
 	 alert("渐变值已复制!");
	}

	generateCode();

</script>
```

:::

## 卡片滑块

<iframe src="/assets/Card-Slider/index.html" scrolling="auto" frameborder="0" style="width:100%;height:35rem;" >
</iframe>

::: info 卡片滑块

我将向您展示如何使用javascript编写卡片滑块轮播图效果。有了这个javascript卡片滑块轮播图，你可以用代码生成渐变，并将其用于网站设计项目❗

:::

::: warning 核心代码

```html
# HTML
    <div class="container">
      <div class="slider"></div>
      <button id="prev"><</button>
      <button id="next">></button>
    </div>
# JS
<script>
const slides = [
  {
    name: "高达机甲001",
    desc: "Gundam 001",
    image: "img/3.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "高达机甲PG",
    desc: "Gundam PG",
    image: "img/1.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "高达机甲007",
    desc: "Gundam 007",
    image: "img/2.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const sliderContainer = document.querySelector(".slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlideIndex = 0;
const totalSlides = slides.length;

// 生成显示函数
const displaySlides = () => {
  if (sliderContainer && nextBtn && prevBtn) {
    sliderContainer.style.opacity = 0; // 透明度设置为0
    setTimeout(() => {
      const { name, desc, image, info } = slides[currentSlideIndex]; // 获取当前显示的幻灯片
      console.log(slides[currentSlideIndex]);
      console.log("下标：" + currentSlideIndex);
      sliderContainer.innerHTML = `
              <div class="profile">
                  <img src="${image}">
                  <h3>${name}</h3>
                  <h6>${desc}</h6>
              </div>
              <p>${info}</p>
              `;
      sliderContainer.style.opacity = 1; // 透明度设置为1
    }, 300);
  }
};

// 下一张
nextBtn.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides; // 循环显示幻灯片(循环递增索引)
  displaySlides();
});

// 上一张
prevBtn.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides; // 循环显示幻灯片(循环递减索引)
  displaySlides();
});

// 页面加载时显示第一张幻灯片
window.onload = displaySlides();
</script>
```

:::

## 截图

<iframe src="/assets/Screenshot/index.html" scrolling="auto" frameborder="0" style="width:100%;height:30rem;" >
</iframe>

::: info 利用库实现浏览器截图

我将向您展示如何从网页中使用javascript进行屏幕截图！我们将使用html2canvs库从带有javascript编码的网站上截屏

:::

::: warning 核心代码

```html
# HTML
    <button id="screenshotBtn">截图</button>
# JS
  <script src="https://cdn.bootcdn.net/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <script>
  document.getElementById("screenshotBtn").addEventListener("click", function () {
  // 隐藏截图按钮
  this.classList.add("hidden");

  // 截图配置
  html2canvas(document.body, {
    scale: window.devicePixelRatio, // 缩放
    logging: true, // 显示日志
    useCORS: true, // 跨域
    windowHeight: window.innerHeight, // 截图高度
    windowWidth: window.innerWidth, //   截图宽度
    foreignObjectRendering: true, // 包括 iframe 外部的内容
  }).then((canvas) => {
      // 创建图片
      var image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream"); // 输出图片格式

     // 创建一个链接下载图片
     var link = document.createElement("a");
     link.download = "screenshot.png";
     link.href = image;
     link.click();
     // 截图完成后显示截图按钮
      this.classList.remove("hidden");
    });
  });

  </script>
```

:::

## JS原生弹窗

<iframe src="/assets/Dialog/index.html" scrolling="auto" frameborder="0" style="width:100%;height:35rem;" >
</iframe>
