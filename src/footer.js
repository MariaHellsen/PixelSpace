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
  facebook.addEventListener("click", () => {
    window.open("https://www.facebook.com/?locale=sv_SE", "_blank");
  });

  const instagram = document.createElement("i");
  instagram.classList.add("fa-brands", "fa-instagram", "fa-lg");
  instagram.addEventListener("click", () => {
    window.open("https://www.instagram.com/", "_blank");
  });

  const linkedin = document.createElement("i");
  linkedin.classList.add("fa-brands", "fa-linkedin", "fa-lg");
  linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com", "_blank");
  });

  const github = document.createElement("i");
  github.classList.add("fa-brands", "fa-github", "fa-lg");
  github.addEventListener("click", () => {
    window.open("https://github.com/", "_blank");
  });

  const copyright = document.createElement("p");
  copyright.className = "copyright";
  copyright.innerHTML = "Copyright &#169; PixelSpace 2025";

  socialContainer.append(facebook, instagram, linkedin, github);
  adressContainer.append(adress, mail, tel);

  const socialAndAdressContainer = document.createElement("div");
  socialAndAdressContainer.append(adressContainer, socialContainer);

  footer.append(socialAndAdressContainer, copyright);
};
