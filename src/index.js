import { headerLoad } from "./header-load";
import "./style.css";
import { loadHomeTabContent } from "./home-tab";
import { loadMenuContent } from "./menu-tab";
import { loadContactTabContent } from "./contact-tab";

const body = document.querySelector("body");
const content = document.querySelector("#content");
headerLoad(body, content);
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");
window.addEventListener("load", () => {
  loadHomeTabContent(content);
  home.classList.add("active");
});
const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  home.classList.remove("active");
  menu.classList.remove("active");
  contact.classList.remove("active");

  switch (e.target.id) {
    case "home":
      content.textContent = "";
      home.classList.add("active");
      loadHomeTabContent(content);
      break;
    case "menu":
      content.textContent = "";
      menu.classList.add("active");
      loadMenuContent(content);
      break;
    case "contact":
      content.textContent = "";
      contact.classList.add("active");
      loadContactTabContent(content);
      break;
  }
});
