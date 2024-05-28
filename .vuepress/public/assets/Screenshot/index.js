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
