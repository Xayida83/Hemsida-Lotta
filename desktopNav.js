class DesktopNav extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    shadow.innerHTML = `
      <link rel="stylesheet" href="style.css">
      <nav class="desktop-nav">
        <ul class="desktop-ul">
          <li class="desktop-li">
            <a href="index.html">
              Home
            </a>
          </li>
          <li class="desktop-li">
            <a href="404.html">
              Projects
            </a>
          </li>
          <li class="desktop-li">
            <a href="resume.html">
              Resume
            </a>
          </li>
          <li class="desktop-li">
            <a href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      `;
      this.markActiveLink();
    }
    markActiveLink() {
      // Anta att window.location.pathname ger den aktuella sökvägen
      const currentPath = window.location.pathname.split("/").pop();
  
      // Använd shadowRoot för att välja länkar om din komponent använder Shadow DOM
      const navLinks = this.shadowRoot.querySelectorAll("nav .desktop-nav a");
  
      navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        }
      });
    }
}

customElements.define('desktop-bar', DesktopNav);