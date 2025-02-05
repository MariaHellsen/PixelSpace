export const createHtmlStartpage = () => {
  const main = document.getElementById("main");
  const introContainer = document.createElement("section");
  introContainer.id = "introContainer";
  const headingLarge = document.createElement("h1");
  const headingSmall = document.createElement("h2");
  const introText = document.createElement("p");

  headingLarge.innerHTML = "Webbyrå / PixelSpace";
  headingSmall.innerHTML = "Få bättre resultat med PixelSpace!";
  introText.innerHTML =
    "Vi är en fullservice webbyrå för allt digitalt i Stockholm. Med bred erfarenhet och flera digitala tjänster stärker vi din affär och ökar din försäljning så att du får fler kunder.";

  const btnReadMore = document.createElement("button");
  btnReadMore.classList.add("btn", "btnSecondary");
  const btnContact = document.createElement("button");
  btnContact.classList.add("btnPrimary", "btn");
  btnReadMore.innerHTML = "Läs mer";
  btnContact.innerHTML = "Kontakta oss";

  introContainer.append(
    headingLarge,
    headingSmall,
    introText,
    btnReadMore,
    btnContact
  );
  main.appendChild(introContainer);
};
