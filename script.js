const knowledgeList = document.querySelector("#knowledge-list");

const technologies = [
  { name: 'HTML', icon: 'fa-html5', faPrefix: 'fab' }, // Använd rätt Font Awesome klasser
  { name: 'CSS', icon: 'fa-css3-alt', faPrefix: 'fab' },
  { name: 'JavaScript', icon: 'fa-js-square', faPrefix: 'fab' },
  { name: 'Git', icon: 'fa-git-alt', faPrefix: 'fab' },
  { name: 'SQL (LESS, SASS)', icon: 'fa-database', faPrefix: 'fas' },
  // { name: 'LESS', icon: 'fa-less', faPrefix: 'fab' },
  // { name: 'SASS', icon: 'fa-sass', faPrefix: 'fab' },
  { name: 'Figma', icon: 'fa-figma', faPrefix: 'fab' },
  { name: 'SEO', icon: 'fa-search', faPrefix: 'fas' }, // Exempel, Font Awesome har ingen specifik SEO-ikon
  { name: 'WordPress', icon: 'fa-wordpress', faPrefix: 'fab' }
];

// Funktion för att rendera teknologierna med Font Awesome ikoner
function renderTechnologies(technologies) {
  const knowledgeList = document.querySelector("#knowledge-list");
  knowledgeList.innerHTML = '';

  technologies.forEach(tech => {
   let listItem = document.createElement("li");
   let icon = document.createElement("i");
   icon.className = `${tech.faPrefix} ${tech.icon}`;
   listItem.appendChild(icon);
   listItem.innerHTML += ` ${tech.name}`; // Lägger till namnet efter ikonen
   
   knowledgeList.append(listItem);
  });  
}

renderTechnologies(technologies);

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
customElements.define('navigation-bar', NavigationBar);
