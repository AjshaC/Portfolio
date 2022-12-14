var TextContent = document.querySelector(".TextContent");
var Buttons = document.querySelector(".buttons");

let videoDiv = document.querySelector(".video");
let body = document.querySelector("body");
var aboutbtn = document.querySelector("#aboutbtn");
let aboutDiv = document.querySelector(".AboutContainer");
let HeroDiv = document.querySelector(".HeroContainer");

let contactBtn = document.querySelector("#contactBtn");
let ContactDiv = document.querySelector(".ContactContainer");

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
    ContactDiv.style.transform = "translateY(-900px)";
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
    " I am a person who works with joy to create the immersive experience. That's what I'm passionate about. My focused areas are web development, UX desing and 3D modeling. In addition to this, I am a very driven person who works hard for what I believe in.";
  aboutDiv.style.transform = "translateY(20%)";

  let CvA = document.createElement("a");
  CvA.href = "Ajsha Caca.pdf";
  CvA.target = "_blank";
  CvA.innerHTML = "RESUME";
  CvA.className = "CvBtn";

  aboutDiv.append(img, Nameh1, aboutP, CvA);
  //HeroDiv.append(aboutDiv);
}

contactBtn.addEventListener(
  "click",
  () => {
    aboutDiv.style.transform = "translateY(200%)";
    videoDiv.style.display = "none";
    TextContent.style.display = "none";
    body.style.backgroundColor = "#181818";

    ContactContent();
  },
  { once: true }
);

function ContactContent() {
  let h1 = document.createElement("h1");
  h1.innerHTML = "LET'S TALK";

  let contactP = document.createElement("p");
  contactP.innerHTML =
    "If you have a project idea in mind, please email me and provide details about it. I will then come up with different solutions and we can discuss and choose the best one together. If you just want to chat, feel free to reach out to me.";

  let LinkDiv = document.createElement("div");
  LinkDiv.className = "LinkDiv";

  let MailHref = document.createElement("a");
  MailHref.href = "mailto:cacaajsha@gmail.com";
  MailHref.target = "_blank";
  MailHref.className = "fa-sharp fa-solid fa-envelope fa-bounce";

  let LinkedinHref = document.createElement("a");
  LinkedinHref.href = "https://www.linkedin.com/in/ajca97/";
  LinkedinHref.target = "_blank";

  LinkedinHref.className = "fa-brands fa-linkedin fa-bounce";

  ContactDiv.style.transform = "translateY(0)";

  LinkDiv.append(MailHref, LinkedinHref);
  ContactDiv.append(h1, contactP, LinkDiv);
}
