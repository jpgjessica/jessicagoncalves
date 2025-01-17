import projets from "../data/projets.json";
import {
  disableScrollNavigation,
  enableScrollNavigation,
} from "../components/horizontalScroll.js";

console.log(projets);

const generateModaleContent = (projet) => {
  const holder = document.getElementById("modale-holder");
  const contenuHolder = document.getElementById("modale-contenu");
  const divInfoHeader = document.querySelector(".info-header");
  const header = holder.querySelector("header");
  const title = document.createElement("h2");
  const typeProjHolder = document.createElement("ul");
  const divTitleType = document.createElement("div");
  const closeBtn = holder.querySelector("[data-modal-close]");
  const descriptionHolder = document.createElement("p");
  const infosHolder = document.createElement("div");
  const typeStackHolder = document.createElement("div");
  const stackHolder = document.createElement("ul");
  const date = document.createElement("span");
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  const typeP = document.createElement("li");
  const liensHolderDesign = document.createElement("ul");
  const liensHolderDev = document.createElement("ul");

  if (header.querySelector("h2")) {
    header.querySelector("h2").remove();
  }
  divInfoHeader.textContent = "";
  typeStackHolder.classList.add("details-div");
  divTitleType.classList.add("div-header");
  infosHolder.classList.add("div-infos");
  typeProjHolder.classList.add("list-vertical");
  stackHolder.classList.add("list-vertical");
  closeBtn.classList.add("material-icons");
  liensHolderDesign.classList.add("liens-projet");
  liensHolderDev.classList.add("liens-projet");

  title.textContent = projet.title;
  closeBtn.textContent = "close";
  contenuHolder.textContent = "";
  img.src = projet.img;
  img.alt = projet.imgAlt;
  typeP.textContent = projet.type;
  descriptionHolder.textContent = projet.description;
  date.textContent = "Date: " + projet.date;

  holder.classList.remove("hidden");
  closeBtn.addEventListener("click", () => {
    holder.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    document.body.classList.add("overflow-visible");
    enableScrollNavigation();
  });

  const stackItems = projet.stack;
  const formattedStack = stackItems.join(" | ");
  stackHolder.textContent = formattedStack;

  typeProjHolder.textContent = "";
  const typeItems = projet.type;
  typeItems.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    typeProjHolder.appendChild(liElement);
  });

  const projetLiensDesign = projet.liens_design;
  for (let lien in projetLiensDesign) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    const iElement = document.createElement("i");
    aElement.textContent = lien;
    aElement.href = projetLiensDesign[lien];
    aElement.target = "_blank";
    iElement.textContent = "arrow_forward";
    iElement.classList.add("material-icons", +lien);
    liElement.classList.add("button--material-outlined");
    aElement.prepend(iElement);
    liElement.appendChild(aElement);
    liensHolderDesign.appendChild(liElement);
  }

  const projetLiensDev = projet.liens_dev;
  for (let lien in projetLiensDev) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    const iElement = document.createElement("i");
    aElement.textContent = lien;
    aElement.href = projetLiensDev[lien];
    aElement.target = "_blank";
    iElement.textContent = "arrow_forward";
    iElement.classList.add("material-icons", +lien);
    liElement.classList.add("button--material-outlined");
    aElement.prepend(iElement);
    liElement.appendChild(aElement);
    liensHolderDev.appendChild(liElement);
  }

  if (projetLiensDesign) {
    const designTitle = document.createElement("h3");
    designTitle.textContent = "Design";
    liensHolderDesign.prepend(designTitle);
  }

  if (projetLiensDev) {
    const devTitle = document.createElement("h3");
    devTitle.textContent = "Dev";
    liensHolderDev.prepend(devTitle);
  }

  divImg.classList.add("div-img");
  img.src = projet.img[0];
  img.classList.add("first-modale-img");
  img.alt = projet.imgAlt;

  divTitleType.appendChild(typeProjHolder);
  divTitleType.appendChild(title);
  divInfoHeader.prepend(divTitleType);
  header.prepend(divInfoHeader);
  typeStackHolder.appendChild(stackHolder);
  typeStackHolder.appendChild(date);
  divImg.appendChild(img);

  if (projet.img[1]) {
    const img02 = document.createElement("img");
    img02.src = projet.img[1];
    img02.classList.add("second-img");
    img02.alt = projet.imgAlt;
    divImg.appendChild(img02);
  }

  const divliens = document.createElement("div");
  divliens.classList.add("div-liens");

  divliens.appendChild(liensHolderDesign);
  divliens.appendChild(liensHolderDev);
  infosHolder.appendChild(descriptionHolder);
  infosHolder.appendChild(divImg);
  contenuHolder.prepend(typeStackHolder);
  contenuHolder.prepend(infosHolder);
  infosHolder.appendChild(divliens);
};

function generateTwoProjectsPerPage(projetsArray1, projetsArray2) {
  const holder = document.getElementById("projets-holder");
  const cardHolder = document.createElement("div");
  cardHolder.classList.add("projets-holder-page");
  cardHolder.appendChild(generateOneImageProjectsLists(projetsArray1, 0));
  if (projetsArray2) {
    cardHolder.appendChild(generateOneImageProjectsLists(projetsArray2, 1));
  }
  holder.appendChild(cardHolder);
}

function generateOneImageProjectsLists(projet, index) {
  const div = document.createElement("div");
  const header = document.createElement("header");
  const title = document.createElement("h3");
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  const cardBtn = document.createElement("button");
  const iconBtn = document.createElement("span");
  const divHeader = document.createElement("div");
  const projectLink = document.createElement("a");

  div.classList.add("div-single");
  div.classList.add(`div-single-${index}`);

  cardBtn.classList.add("btn-project");
  cardBtn.addEventListener("click", (e) => {
    e.preventDefault();
    generateModaleContent(projet);
    document.body.classList.remove("overflow-visible");
    document.body.classList.add("overflow-hidden");
    disableScrollNavigation();
  });
  iconBtn.classList.add("material-icons");
  projectLink.classList.add("project-link");

  title.textContent = projet.title;
  img.src = projet.img[0];
  img.classList.add("first-img");
  img.alt = projet.imgAlt;
  cardBtn.textContent = "En savoir plus";
  cardBtn.setAttribute(
    "aria-label",
    `${cardBtn.textContent} - ${projet.title}`
  );
  iconBtn.textContent = "add";
  projectLink.href = `/projet/${projet.id}`;

  cardBtn.prepend(iconBtn);

  const typeItems = projet.type;
  typeItems.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    divHeader.appendChild(liElement);
  });
  cardBtn.addEventListener("click", () => {
    generateModaleContent(projet);
  });

  divHeader.prepend(title);
  header.appendChild(divHeader);
  header.appendChild(cardBtn);
  divImg.appendChild(img);
  div.appendChild(header);
  div.appendChild(divImg);
  projectLink.appendChild(div);
  return div;
}
document.addEventListener("DOMContentLoaded", () => {
  const holder = document.getElementById("projets-holder");
  holder.innerHTML = "";

  for (let i = 0; i < projets.length; i += 2) {
    generateTwoProjectsPerPage(
      projets[i],
      projets[i + 1] ? projets[i + 1] : null
    );
  }
});
