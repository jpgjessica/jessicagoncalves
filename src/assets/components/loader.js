export function startLoader() {
  let progress = 0;
  const progressText = document.getElementById("progress");
  const progressBar = document.getElementById("progress-bar");
  const loader = document.getElementById("loader");
  const footerContent = document.getElementById("footer-content");

  const interval = setInterval(() => {
    progress += 100;
    progressText.innerText = `${progress}%`;
    progressBar.style.width = `${progress}%`;

    if (progress >= 1) {
      clearInterval(interval);
      loader.classList.add("animate__animated");
      loader.classList.add("animate__fadeOut");
      footerContent.style.visibility = "visible";
      footerContent.classList.add("animate__animated");
      footerContent.classList.add("animate__fadeIn");
    }
  }, 50);
}
