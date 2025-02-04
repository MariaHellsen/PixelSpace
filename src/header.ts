const header = document.getElementById("header");

if (header) {
    header.innerHTML = `
     <div class="container"> 
      <nav class="navbar">
        <a href="#" class="nav-branding">[[LOGO]]</a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#" class="nav-link">Hem</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Våra Tjänster</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Om Oss</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Kontakt</a>
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    `
}