const knowledgeList = document.querySelector("#knowledge-list");

const technologies = [
  
  { name: 'CSS (LESS, SASS)', icon: 'fa-css3-alt', faPrefix: 'fab' },
  { name: 'HTML', icon: 'fa-html5', faPrefix: 'fab' }, 
  { name: 'Figma', icon: 'fa-figma', faPrefix: 'fab' },
  { name: 'JavaScript', icon: 'fa-js-square', faPrefix: 'fab' },
  { name: 'C#', icon: 'fa-code', faPrefix: 'fas'},
  { name: 'Git', icon: 'fa-git-alt', faPrefix: 'fab' },
  { name: 'SQL ', icon: 'fa-database', faPrefix: 'fas' },  
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

