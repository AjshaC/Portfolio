var TextContent = document.querySelector(".TextContent");
var Buttons = document.querySelector(".buttons");

let videoDiv = document.querySelector(".video");
let body = document.querySelector("body");
var aboutbtn = document.querySelector("#aboutbtn");
let aboutDiv = document.querySelector(".AboutContainer");
let HeroDiv = document.querySelector(".HeroContainer");

document.querySelector(".fadeOut").onclick = function () {
  TextContent.classList.toggle("fade");
  TextContent.innerHTML = " ";
  Buttons.style.opacity = 1;
};

aboutbtn.addEventListener(
  "click",
  () => {
    videoDiv.style.display = "none";
    TextContent.style.display = "none";
    body.style.backgroundColor = "#181818";
    console.log("EHH");

    AboutContet();
  },
  { once: true }
);

function AboutContet() {
  let img = document.createElement("img");
  img.src = "Works-Img/Models/ElfGirl.png";
  img.className = "MyImg";

  let Nameh1 = document.createElement("h1");
  Nameh1.innerHTML = "Lets get to know each other";

  let aboutP = document.createElement("p");
  aboutP.innerHTML =
    " I am a person who works with joy to create the immersive experience. That's what I'm passionate about. <br /> My focused areas are web development, UX desing and 3D modeling. <br />In addition to this, I am a very driven person who works hard for what I believe in.";
  aboutDiv.style.transform = "translateY(0)";

  let CvBtn = document.createElement("button");
  CvBtn.innerText = "resume";
  CvBtn.className = "CvBtn";

  aboutDiv.append(img, Nameh1, aboutP, CvBtn);
  HeroContainer.append(aboutDiv);
}
