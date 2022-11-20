var TextContent = document.querySelector(".TextContent");
var Buttons = document.querySelector(".buttons");

document.querySelector(".fadeOut").onclick = function () {
  TextContent.classList.toggle("fade");
  TextContent.innerHTML = "";
  Buttons.style.opacity = 1;
};
