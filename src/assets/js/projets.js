import projets from "../data/projets.json";

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
  const img02 = document.createElement("img");
  const typeP = document.createElement("li");
  const liensHolder = document.createElement("ul");

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
  liensHolder.classList.add("liens-projet");

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

  const projetLiens = projet.liens;
  for (let lien in projetLiens) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    const iElement = document.createElement("i");
    aElement.textContent = lien;
    aElement.href = projetLiens[lien];
    aElement.target = "_blank";
    iElement.textContent = "arrow_forward";
    iElement.classList.add("material-icons", +lien);
    liElement.classList.add("button--material-outlined");
    aElement.prepend(iElement);
    liElement.appendChild(aElement);
    liensHolder.appendChild(liElement);
  }

  divImg.classList.add("div-img");
  img.src = projet.img[0];
  img.classList.add("first-img");
  img.alt = projet.imgAlt;
  img02.src = projet.img[1];
  img02.classList.add("second-img");
  img02.alt = projet.imgAlt;

  divTitleType.appendChild(typeProjHolder);
  divTitleType.appendChild(title);
  divInfoHeader.prepend(divTitleType);
  header.prepend(divInfoHeader);
  typeStackHolder.appendChild(stackHolder);
  typeStackHolder.appendChild(date);
  divImg.appendChild(img);
  divImg.appendChild(img02);
  infosHolder.appendChild(descriptionHolder);
  infosHolder.appendChild(liensHolder);
  infosHolder.appendChild(divImg);
  contenuHolder.prepend(typeStackHolder);
  contenuHolder.prepend(infosHolder);
};

function generateTwoImagesProjectsLists(projetsArray) {
  const holder = document.getElementById("projets-holder");

  projetsArray.forEach((projet) => {
    const cardHolder = document.createElement("div");
    const div = document.createElement("div");
    const header = document.createElement("header");
    const title = document.createElement("h3");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const img02 = document.createElement("img");
    const cardBtn = document.createElement("button");
    const iconBtn = document.createElement("span");

    cardHolder.classList.add("projets-holder-page");
    title.textContent = projet.title;
    divImg.classList.add("div-img");
    img.src = projet.img[0];
    img.classList.add("first-img");
    img.alt = projet.imgAlt;
    img02.src = projet.img[1];
    img02.classList.add("second-img");
    img02.alt = projet.imgAlt;

    cardBtn.textContent = "En savoir plus";
    cardBtn.setAttribute(
      "aria-label",
      `${cardBtn.textContent} - ${projet.title}`
    );
    cardBtn.classList.add("btn-project");
    iconBtn.classList.add("material-icons");
    iconBtn.textContent = "arrow_forward";
    cardBtn.addEventListener("click", (e) => {
      e.preventDefault();
      generateModaleContent(projet);
    });
    cardBtn.prepend(iconBtn);

    const typeItems = projet.type;
    const divHeader = document.createElement("div");
    divHeader.prepend(title);

    typeItems.forEach((item) => {
      const liElement = document.createElement("li");
      liElement.textContent = item;
      divHeader.appendChild(liElement);
    });

    const projectLink = document.createElement("a");
    projectLink.href = `/projet/${projet.id}`;
    projectLink.classList.add("project-link");
    projectLink.appendChild(cardHolder);

    header.appendChild(divHeader);
    header.appendChild(cardBtn);
    div.appendChild(header);
    divImg.appendChild(img);
    divImg.appendChild(img02);
    div.appendChild(divImg);
    cardHolder.appendChild(div);
    holder.appendChild(cardHolder);
  });
}

function generateOneImageProjectsLists(projetsArray) {
  const holder = document.getElementById("projets-holder");

  projetsArray.forEach((projet) => {
    const cardHolder = document.createElement("div");
    const div = document.createElement("div");
    const header = document.createElement("header");
    const title = document.createElement("h3");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const cardBtn = document.createElement("button");
    const iconBtn = document.createElement("span");
    const divHeader = document.createElement("div");
    const projectLink = document.createElement("a");

    cardHolder.classList.add("projets-holder-page");
    div.classList.add("div-single");
    divImg.classList.add("div-img-single");

    cardBtn.classList.add("btn-project");
    cardBtn.addEventListener("click", (e) => {
      e.preventDefault();
      generateModaleContent(projet);
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
    iconBtn.textContent = "arrow_forward";
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
    cardHolder.appendChild(div);
    projectLink.appendChild(cardHolder);
    holder.appendChild(cardHolder);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const holder = document.getElementById("projets-holder");
  holder.innerHTML = "";

  projets.forEach((projet, index) => {
    if ((index + 1) % 2 === 1) {
      generateTwoImagesProjectsLists([projet]);
    } else {
      generateOneImageProjectsLists([projet]);
    }
  });
});
