export const createHtmlFooter = () => {
  const footer = document.getElementById("footer");

  const adressContainer = document.createElement("section");
  const adress = document.createElement("p");
  adress.innerHTML = "Milkyway 25 </br> 111 22 Universe";

  const mail = document.createElement("p");
  mail.innerHTML = "Mail: pixel@space.se";

  const tel = document.createElement("p");
  tel.innerHTML = "Tel: 073 - 555 55 55 ";

  const socialContainer = document.createElement("section");
  const facebook = document.createElement("i");
  facebook.classList.add("fa-brands", "fa-facebook", "fa-lg");

  const instagram = document.createElement("i");
  instagram.classList.add("fa-brands", "fa-instagram", "fa-lg");

  const linkedin = document.createElement("i");
  linkedin.classList.add("fa-brands", "fa-linkedin", "fa-lg");

  const copyright = document.createElement("p");
  copyright.innerHTML = "Copyright &#169; PixelSpace 2025";

  socialContainer.append(facebook, instagram, linkedin);
  adressContainer.append(adress, tel, mail);

  footer.append(adressContainer, socialContainer, copyright);
};
