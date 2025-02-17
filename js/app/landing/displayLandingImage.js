import { welcomeContent } from "/js/app/utils/constants.js";

export function displayLandingImage() {
  const container = document.createElement("div");

  const img = document.createElement("img");
  img.id = "landingImage";
  img.src = "/resources/images/IMG_3324 1-downsizedExposed 1.jpg";
  img.alt = "A black and white photo of the portfolio owner.";

  container.appendChild(img);
  welcomeContent.appendChild(container);

  function smallerScreens() {
    if (window.innerWidth < 778) {
      if (welcomeContent.firstChild !== container) {
        welcomeContent.prepend(container);
      }
    } else {
      if (welcomeContent.lastChild !== container) {
        welcomeContent.appendChild(container);
      }
    }
  }
  window.addEventListener("resize", smallerScreens);
}
