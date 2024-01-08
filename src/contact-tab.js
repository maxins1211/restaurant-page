function loadContactTabContent(element) {
  const div = document.createElement("div");
  const phone = document.createElement("h2");
  const address = document.createElement("h2");
  const imgHolder = document.createElement("div");

  phone.textContent = "Phone: 123-456-789";
  address.textContent = "Address: AAAAAAAAA,AA,AA";
  imgHolder.setAttribute("id", "location-img");

  div.append(phone, address, imgHolder);
  div.setAttribute("id", "contact-tab-container");
  element.appendChild(div);
}

export { loadContactTabContent };
