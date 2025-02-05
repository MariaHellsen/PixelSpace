export const createHtmlStartpage = () => {
  const main = document.getElementById("main");
  const headingLarge = document.createElement("h1");
  const headingSmall = document.createElement("h2");
  const introText = document.createElement("p");

  headingLarge.innerHTML = "Webbyrå / Pixelspace";
  headingSmall.innerHTML = "Få bättre resultat med PixelSpace!";
  introText.innerHTML =
    "Vi är en fullservice webbyrå för allt digitalt i Stockholm. Med bred erfarenhet och flera digitala tjänster stärker vi din affär och ökar din försäljning så att du får fler kunder.";

  const btnReadMore = document.createElement("button");
  const btnContact = document.createElement("button");
  btnReadMore.innerHTML = "Läs mer";
  btnContact.innerHTML = "Kontakta oss";

  main.append(headingLarge, headingSmall, introText, btnReadMore, btnContact);
};
