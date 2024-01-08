function headerLoad(body, node) {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  h1.textContent = "Coffee Lover";
  li1.textContent = "Home";
  li2.textContent = "Menu";
  li3.textContent = "Contact";

  li1.setAttribute("id", "home");
  li2.setAttribute("id", "menu");
  li3.setAttribute("id", "contact");

  ul.append(li1, li2, li3);
  header.append(h1, ul);

  body.insertBefore(header, node);
}

export { headerLoad };
