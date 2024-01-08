function loadMenuContent(element) {
  const div = document.createElement("div");
  const latteContent =
      " Indulge in our Latte—a harmonious blend of rich espresso and steamed milk, delivering a velvety and comforting coffee experience.",
    espressoContent =
      "Experience the essence of coffee with our Espresso—a pure and intense shot of finely brewed coffee for a bold and satisfying flavor.",
    americanoContent =
      "Savor the bold simplicity of our Americano—pure and invigorating espresso carefully diluted with hot water for a clean and robust coffee experience.",
    cappuccinoContent =
      "Savor the classic charm of our Cappuccino—a perfect blend of espresso, steamed milk, and a generous layer of froth, delivering a rich and velvety coffee experience.",
    mochaContent =
      "Indulge in the decadence of our Mocha—a luscious fusion of rich espresso, velvety steamed milk, and luxurious chocolate for a delightfully sweet and satisfying treat.",
    coldBrewContent =
      "Revitalize your senses with our Cold Brew—a refreshing and smooth coffee brewed slowly for a chilled, subtly nuanced, and invigorating taste.";
  const latteCard = createCardWithElements("Latte", latteContent, "latte");
  const espressoCard = createCardWithElements(
    "Espresso",
    espressoContent,
    "espresso"
  );
  const americanoCard = createCardWithElements(
    "Americano",
    americanoContent,
    "americano"
  );
  const cappuccinoCard = createCardWithElements(
    "Cappuccino",
    cappuccinoContent,
    "cappuccino"
  );
  const mochaCard = createCardWithElements("Mocha", mochaContent, "mocha");
  const coldBrewCard = createCardWithElements(
    "Cold Brew",
    coldBrewContent,
    "cold-brew"
  );

  div.append(
    espressoCard,
    americanoCard,
    latteCard,
    cappuccinoCard,
    mochaCard,
    coldBrewCard
  );
  div.setAttribute("id", "menu-container");
  element.appendChild(div);
}

function createCardWithElements(name, content, id) {
  const card = document.createElement("div");
  const imgHolder = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = name;
  p.textContent = content;
  imgHolder.setAttribute("id", id);

  card.append(imgHolder, h1, p);
  card.classList.add("card");
  return card;
}

export { loadMenuContent };
