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
            <a class="nav-link" href="#0">
              <span>About</span>
              <i class="fas fa-address-card" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="nav-link" href="#0">
              <span>Projects</span>
              <i class="fas fa-tasks" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="nav-link" href="#0">
              <span>Clients</span>
              <i class="fas fa-users" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="nav-link" href="#0">
              <span>Contact</span>
              <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    `;

    // Notera: För shadow DOM, behöver du unika ID:n eller anpassa ditt CSS för att undvika konflikter
    // och se till att stilar tillämpas korrekt inom komponenten.
  }
}

// Definiera custom element
//customElements.define('navigation-bar', NavigationBar);

export {NavigationBar};