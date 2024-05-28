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
