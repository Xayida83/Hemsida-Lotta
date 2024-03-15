document.addEventListener('DOMContentLoaded', function () {
  const postcards = document.querySelectorAll('.postcard');

  // Funktion för att växla 'collapse'-klassen på 'postcard__preview-txt'
  function togglePreview(event) {
    // Förhindra bubbling om det klickas på barn av postcard
    event.stopPropagation();
    const previewText = this.querySelector('.postcard__preview-txt');
    if (previewText) {
      previewText.classList.toggle('collapse');
    }
  }

  // Funktion för att kontrollera skärmstorlek och lägga till/ta bort eventlyssnare
  function checkScreenSize() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      // Mobilvy, lägg till 'click'-eventlyssnare
      postcards.forEach(postcard => postcard.addEventListener('click', togglePreview));
    } else {
      // Inte mobilvy, ta bort 'click'-eventlyssnare och återställ eventuell 'collapse'-klass
      postcards.forEach(postcard => {
        postcard.removeEventListener('click', togglePreview);
        const previewText = postcard.querySelector('.postcard__preview-txt');
        if (previewText && previewText.classList.contains('collapse')) {
          previewText.classList.remove('collapse');
        }
      });
    }
  }

  // Initial kontroll och lyssnare för fönsterstorleksändringar
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

document.querySelectorAll('.cv-button').forEach(button => {
  button.addEventListener('click', function() {
    const cvPath = this.getAttribute('data-cv');
    document.getElementById('cvEmbed').setAttribute('src', cvPath);
    $('#cvModal').modal('show');
  });
});
