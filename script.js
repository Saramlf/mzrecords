// Simple form validation and submission (ajax would be added for PHP backend)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Votre message a été envoyé avec succès !');
  });
  
  window.onload = function() {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/memories-zone-records/presentation?month=2024-12',
      parentElement: document.getElementById('calendly-inline-widget'),
      prefill: {},
      utm: {}
    });
  };


  window.onload = function() {
    // Rediriger vers la page d'accueil
    window.location.href = 'https://memorieszone.com/'; // Remplacez '/' par le chemin de votre page d'accueil si nécessaire
};


/** 
// Fonction pour gérer la saisie et l'affichage des suggestions de villes
document.getElementById("lieu").addEventListener("input", function(event) {
    const query = event.target.value;

    // Vérification que la saisie est de 3 caractères ou plus
    if (query.length >= 3) {
        // Effectuer la requête à l'API LocationIQ avec la bonne clé
        fetch(`https://us1.locationiq.com/v1/search.php?key=pk.65048fd0deded0266e0ab9eb306424b7&q=${query}&format=json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur de réseau");
                }
                return response.json();
            })
            .then(data => {
                // Récupérer les suggestions de villes
                let suggestions = data.map(item => item.display_name);
                showSuggestions(suggestions);  // Appeler la fonction pour afficher les suggestions
            })
            .catch(error => {
                console.error("Erreur de récupération des données : ", error);
                showSuggestions([]);  // Afficher une liste vide en cas d'erreur
            });
    } else {
        showSuggestions([]);  // Vider la liste si la saisie est trop courte
    }
});

// Fonction pour afficher les suggestions dans une liste
function showSuggestions(suggestions) {
    let suggestionList = document.getElementById("suggestions-list");

    // Vider la liste avant d'ajouter de nouvelles suggestions
    suggestionList.innerHTML = '';

    // Ajouter chaque suggestion comme élément de liste
    suggestions.forEach(suggestion => {
        let listItem = document.createElement('li');
        listItem.textContent = suggestion;
        listItem.style.cursor = 'pointer';  // Change le curseur pour indiquer que l'élément est cliquable
        listItem.addEventListener('click', function() {
            document.getElementById("lieu").value = suggestion;  // Remplir le champ avec la suggestion sélectionnée
            suggestionList.innerHTML = '';  // Vider la liste après sélection
        });
        suggestionList.appendChild(listItem);
    });
}

*/
