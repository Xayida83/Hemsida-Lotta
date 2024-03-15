class NavigationBar extends HTMLElement {
  constructor() {
    super();

    // Skapar en shadow DOM
    const shadow = this.attachShadow({mode: 'open'});

    // Lägger till navigationsbaren HTML
    shadow.innerHTML = `
      <link rel="stylesheet" href="style.css">
      <nav class="navbar">
        <input id="menu" type="checkbox">
        <label for="menu">Menu</label>
        <ul class="menu">
          <li>
            <a class="nav-link" href="about.html">
              <span>About</span>
              <i class="fas fa-address-card" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="nav-link" href="404.html">
              <span>Projects</span>
              <i class="fas fa-tasks" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="nav-link" href="404.html">
              <span>Resume</span>
              <i class="fas fa-users" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="nav-link" href="404.html">
              <span>Contact</span>
              <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <a id="phone" href="tel:+42729921705">
          <i class="fas fa-phone" aria-hidden="true"></i>
        </a>
        <a id="email" href="mailto:charlotta.lindberg@yh.nackademin.se">
          <i class="fas fa-envelope" aria-hidden="true"></i>
        </a>
      </nav>
    `;
  }
}

// Definiera custom element
customElements.define('navigation-bar', NavigationBar);

