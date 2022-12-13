//*************WORK**************//
let btnOne = document.querySelector(".Btnone");
let btnTwo = document.querySelector(".Btntwo");
let btnThree = document.querySelector(".Btnthree");

let outputdiv = document.querySelector(".main-container");

async function getProjects(e) {
  const respons = await fetch("work.json");

  const ProjectData = await respons.json();

  addProjectsToWebbPage(ProjectData, e);
}

btnOne.addEventListener("click", (e) => {
  getProjects(e);
});

btnTwo.addEventListener("click", (e) => {
  getProjects(e);
});

btnThree.addEventListener("click", (e) => {
  getProjects(e);
});

function addProjectsToWebbPage(ProjectData, e) {
  outputdiv.innerHTML = "";
  let theBtn = e.target;

  for (const object of ProjectData) {
    if (object.Id == theBtn.id) {
      let constinerdiv = document.createElement("div");
      constinerdiv.className = "container";
      let imgText = document.createElement("div");
      imgText.className = "Img-Text";

      let h1 = document.createElement("h1");
      let img = document.createElement("img");
      let paragraph = document.createElement("p");
      let LinkP = document.createElement("p");

      img.src = object.image;
      h1.innerText = object.title;
      paragraph.innerHTML = object.description;
      LinkP.innerHTML = object.link;

      outputdiv.append(constinerdiv);
      constinerdiv.append(img, imgText);
      imgText.append(h1, paragraph, LinkP);
    }
  }
}
