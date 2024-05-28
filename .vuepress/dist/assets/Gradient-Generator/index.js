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

// 生成渐变代码
function generateCode() {
  outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`; // 输出渐变颜色代码
  document.getElementsByTagName(
    "BODY"
  )[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`; // 改变页面背景
}

function copyText() {
  outputCode.select(); // 选择输入框中的内容
  document.execCommand("copy"); // 执行复制
  alert("渐变值已复制!");
}

generateCode();
