class NavigationBar extends HTMLElement {
  constructor() {
    super();

    // Skapar en shadow DOM
    const shadow = this.attachShadow({mode: 'open'});

    // Lägger till navigationsbaren HTML
    shadow.innerHTML = `
      <link rel="stylesheet" href="style.css">
      <nav class="nav">
        <input id="menu" type="checkbox">
        <label for="menu">Menu</label>
        <ul class="menu">
          <li>
            <a class="nav-link" href="404.html">
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
              <span>CV</span>
              <i class="fas fa-users" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="nav-link" href="404.html">
              <span>Contact</span>
              <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="nav-link" href="index.html">
              <span>HOME</span>
              <i aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    `;
  }
}

// Definiera custom element
customElements.define('navigation-bar', NavigationBar);

