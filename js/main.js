"use strict";

const colorOpt = document.querySelectorAll(".color-option li");

const mainImgs = document.querySelectorAll(".main-imgs li");

colorOpt.forEach((colors) => {
  colors.addEventListener("click", function () {
    colorOpt.forEach((color) => color.classList.remove("active"));
    this.classList.add("active");
    mainImgs.forEach((img) => {
      img.classList.remove("active");
    });
    let colorClass = this.getElementsByTagName("span")[0].className;
    let colorImg = document.querySelector(`.main-imgs li img.${colorClass}`);
    colorImg.parentNode.classList.add("active");
  });
});
