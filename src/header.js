const header = document.getElementById("header");

if (header) {
    header.innerHTML = `
         <nav>
        <div class="logo"><img src="Images/pixelspacelogo.png" alt="" /></div>
        <ul class="menu">
          <li><a href="#">Hem</a></li>
          <li><a href="#">Webbyro</a></li>
          <li><a href="#">Om oss</a></li>
          <li><a href="#">Våra tjänster</a></li>
          <li><a href="contact.html">Kontakta oss</a></li>
        </ul>
      </nav>
    `
}