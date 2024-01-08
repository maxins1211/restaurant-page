function loadHomeTabContent(element) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const imgHolder = document.createElement("div");
  const h2 = document.createElement("h2");

  h1.textContent = "We serve fresh Coffee with passion and love";
  h2.textContent = "Order online or visit us";
  imgHolder.setAttribute("id", "home-page-picture");
  h1.setAttribute("id", "home-tab-h1");
  h2.setAttribute("id", "home-tab-h2");
  div.setAttribute("id", "home-tab-container");
  div.append(h1, imgHolder, h2);
  element.appendChild(div);
}
export { loadHomeTabContent };
