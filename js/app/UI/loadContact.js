import { pageContent, portfolioContent } from "/js/app/utils/constants.js";
import { colorModeToggle } from "/js/app/components/colorModes/switch.js";
import { displayContactPage } from "/js/app/contact/displayContactPage.js";

export function loadContact() {
  const contactLi = document.getElementById("contactLi");

  pageContent.classList.remove("landing-content");

  if (contactLi.classList.contains("active")) return;

  contactLi.classList.add("active");
  projectsLi.classList.remove("active");
  homeLi.classList.remove("active");

  portfolioContent.innerHTML = "";
  pageContent.innerHTML = "";

  colorModeToggle();
  displayContactPage();
}
