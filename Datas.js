// Datas.js
const datas = [
    {
      id: 1,
      name: "Paris",
      description: "La ville lumière, célèbre pour sa Tour Eiffel et ses soirées inoubliables.",
      image: "paris.jpg", //ajouter 4 image par ville
      drivers: [
        { name: "Jean Dupont", experience: "15 ans", contact: "jean.dupont@example.com" },
        { name: "Sophie Martin", experience: "10 ans", contact: "sophie.martin@example.com" },
      ],
      buses: [
        {
          model: "Mercedes Sprinter",
          capacity: 25,
          amenities: ["Sonorisation", "Mini-bar", "Wi-Fi"],
        },
        {
          model: "Volvo 9700",
          capacity: 50,
          amenities: ["Ecran géant", "Bar intégré", "Karaoké"],
        },
      ],
    },
    {
      id: 2,
      name: "Nantes",
      description: "Une ville dynamique avec des événements festifs et culturels.",
      image: "nantes.jpg",
      drivers: [
        { name: "Marie Lefebvre", experience: "8 ans", contact: "marie.lefebvre@example.com" },
      ],
      buses: [
        {
          model: "Renault Master",
          capacity: 20,
          amenities: ["Jeux de lumière", "Wi-Fi", "Sonorisation"],
        },
      ],
    },
    // Ajoute les autres villes de manière similaire...
  ];
  
  export default datas;