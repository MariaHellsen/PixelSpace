export const createHtmlFooter = () => {
  const footer = document.getElementById("footer");

  const adressContainer = document.createElement("section");
  adressContainer.className = "adress";
  const adress = document.createElement("p");
  adress.innerHTML = "Milkyway 25 </br> 111 22 Universe";

  const mail = document.createElement("p");
  mail.innerHTML = "<strong>Mail:</strong> <a href='#'>pixel@space.se</a>";

  const tel = document.createElement("p");
  tel.innerHTML = "<strong>Tel:</strong> <a href='#'>073 - 555 55 55</a>";

  const socialContainer = document.createElement("section");
  socialContainer.className = "socialmedia";

  const facebook = document.createElement("i");
  facebook.classList.add("fa-brands", "fa-facebook", "fa-lg");

  const instagram = document.createElement("i");
  instagram.classList.add("fa-brands", "fa-instagram", "fa-lg");

  const linkedin = document.createElement("i");
  linkedin.classList.add("fa-brands", "fa-linkedin", "fa-lg");

  const copyright = document.createElement("p");
  copyright.className = "copyright";
  copyright.innerHTML = "Copyright &#169; PixelSpace 2025";

  socialContainer.append(facebook, instagram, linkedin);
  adressContainer.append(adress, mail, tel);

  const socialAndAdressContainer = document.createElement("div");
  socialAndAdressContainer.append(adressContainer, socialContainer);

  footer.append(socialAndAdressContainer, copyright);
};
