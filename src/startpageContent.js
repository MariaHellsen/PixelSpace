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

  const imgSection = document.createElement("section");
  imgSection.id = "imgSection";

  const imgContainer1 = document.createElement("div");
  imgContainer1.className = "grid-item-1";
  const img1 = document.createElement("img");
  img1.src = "assets/computer.jpg";
  imgContainer1.appendChild(img1);

  const imgContainer2 = document.createElement("div");
  imgContainer2.className = "grid-item-2";
  const img2 = document.createElement("img");
  img2.src = "assets/ux.jpg";
  imgContainer2.appendChild(img2);

  const imgContainer3 = document.createElement("div");
  imgContainer3.className = "grid-item-3";
  const img3 = document.createElement("img");
  img3.src = "assets/think.jpg";
  imgContainer3.appendChild(img3);

  imgSection.append(imgContainer1, imgContainer2, imgContainer3);

  const textSection = document.createElement("section");
  textSection.id = "textSectionStartpage";
  const text = document.createElement("p");
  text.innerHTML =
    "Över <strong>10 års</strong> erfarenhet och <strong>300+</strong> genomförda projekt! </br> Låt oss ta hand om din design och programmering.";

  const serviceContainer = document.createElement("div");
  serviceContainer.id = "service";

  const checkIcon1 = document.createElement("i");
  checkIcon1.classList.add("fa-solid", "fa-check");

  const checkIcon2 = document.createElement("i");
  checkIcon2.classList.add("fa-solid", "fa-check");

  const checkIcon3 = document.createElement("i");
  checkIcon3.classList.add("fa-solid", "fa-check");

  const checkIcon4 = document.createElement("i");
  checkIcon4.classList.add("fa-solid", "fa-check");

  const design = document.createElement("p");
  design.innerHTML = "Webbdesign";
  const develop = document.createElement("p");
  develop.innerHTML = "Webbutveckling";
  const ux = document.createElement("p");
  ux.innerHTML = "UX & design";
  const copywriting = document.createElement("p");
  copywriting.innerHTML = "Copywriting";

  serviceContainer.append(
    checkIcon1,
    design,
    checkIcon2,
    develop,
    checkIcon3,
    ux,
    checkIcon4,
    copywriting
  );

  textSection.append(text, serviceContainer);

  main.append(introContainer, imgSection, textSection);
};
