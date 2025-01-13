let arrowFoward;
let arrowBackward;

export function scrollNavigation() {
  arrowFoward = document.querySelector(".intro-button");
  arrowBackward = document.querySelector(".intro-button-back");

  arrowFoward.addEventListener("click", () => {
    nextPage();
  });

  arrowBackward.addEventListener("click", () => {
    previousPage();
  });

  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      nextPage();
    } else {
      previousPage();
    }
  });

  hideAndShowArrows();
}

export function nextPage() {
  window.scrollTo(posLeft() + pageWidth(), 0);
  hideAndShowArrows();
}

export function previousPage() {
  window.scrollTo(posLeft() - pageWidth(), 0);
  hideAndShowArrows();
}

export function hideAndShowArrows() {
  if (posLeft() < pageWidth()) {
    arrowBackward.classList.add("none");
  } else {
    arrowBackward.classList.remove("none");
  }

  if (posLeft() > maxWidth() - pageWidth() - pageWidth() / 2) {
    arrowFoward.classList.add("none");
  } else {
    arrowFoward.classList.remove("none");
  }
}

export function pageWidth() {
  return window.innerWidth != null
    ? window.innerWidth
    : document.documentElement && document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : document.body != null
    ? document.body.clientWidth
    : null;
}

export function posLeft() {
  return typeof window.pageXOffset != "undefined"
    ? window.pageXOffset
    : document.documentElement && document.documentElement.scrollLeft
    ? document.documentElement.scrollLeft
    : document.body.scrollLeft
    ? document.body.scrollLeft
    : 0;
}

export function maxWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.clientWidth,
    document.documentElement.scrollWidth,
    document.documentElement.offsetWidth
  );
}
