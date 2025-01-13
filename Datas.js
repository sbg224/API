// Datas.js
const datas = [
  {
    id: 1,
    name: "Paris",
    description: "La ville lumière, célèbre pour sa Tour Eiffel et ses soirées inoubliables.",
    images: ["paris1.jpg", "paris2.jpg", "paris3.jpg", "paris4.jpg"],
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
    name: "Marseille",
    description: "La cité phocéenne, réputée pour son vieux port et sa bouillabaisse.",
    images: ["marseille1.jpg", "marseille2.jpg", "marseille3.jpg", "marseille4.jpg"],
    drivers: [
      { name: "Pierre Bernard", experience: "12 ans", contact: "pierre.bernard@example.com" },
      { name: "Emma Roche", experience: "9 ans", contact: "emma.roche@example.com" },
    ],
    buses: [
      {
        model: "Setra S416",
        capacity: 45,
        amenities: ["Climatisation", "Toilettes", "Wi-Fi"],
      },
      {
        model: "Iveco Daily",
        capacity: 20,
        amenities: ["Eclairage LED", "Prises USB", "Sonorisation"],
      },
    ],
  },
  {
    id: 3,
    name: "Lyon",
    description: "La capitale de la gastronomie française, située entre deux fleuves.",
    images: ["lyon1.jpg", "lyon2.jpg", "lyon3.jpg", "lyon4.jpg"],
    drivers: [
      { name: "Claude Lefèvre", experience: "14 ans", contact: "claude.lefevre@example.com" },
      { name: "Anne Girard", experience: "10 ans", contact: "anne.girard@example.com" },
    ],
    buses: [
      {
        model: "MAN Lion's Coach",
        capacity: 40,
        amenities: ["Bar", "Ecrans HD", "Wi-Fi"],
      },
      {
        model: "Scania Touring",
        capacity: 55,
        amenities: ["Toilettes", "Espace bagages", "Sonorisation"],
      },
    ],
  },
  {
    id: 4,
    name: "Toulouse",
    description: "La ville rose, connue pour son industrie aéronautique et ses charmantes rues.",
    images: ["toulouse1.jpg", "toulouse2.jpg", "toulouse3.jpg", "toulouse4.jpg"],
    drivers: [
      { name: "Marc Lemoine", experience: "11 ans", contact: "marc.lemoine@example.com" },
      { name: "Chloé Vidal", experience: "7 ans", contact: "chloe.vidal@example.com" },
    ],
    buses: [
      {
        model: "Renault Tracer",
        capacity: 30,
        amenities: ["Climatisation", "Ecrans", "Wi-Fi"],
      },
      {
        model: "Volvo B8R",
        capacity: 45,
        amenities: ["Toilettes", "Prises USB", "Sonorisation"],
      },
    ],
  },
  {
    id: 5,
    name: "Nice",
    description: "Une ville ensoleillée sur la Côte d'Azur, célèbre pour sa promenade des Anglais.",
    images: ["nice1.jpg", "nice2.jpg", "nice3.jpg", "nice4.jpg"],
    drivers: [
      { name: "Luc Morel", experience: "13 ans", contact: "luc.morel@example.com" },
      { name: "Sabrina Faure", experience: "8 ans", contact: "sabrina.faure@example.com" },
    ],
    buses: [
      {
        model: "MAN A95",
        capacity: 35,
        amenities: ["Wi-Fi", "Mini-bar", "Sonorisation"],
      },
      {
        model: "Mercedes Intouro",
        capacity: 50,
        amenities: ["Climatisation", "Prises USB", "Ecrans HD"],
      },
    ],
  },
  {
    id: 6,
    name: "Nantes",
    description: "Une ville dynamique avec des événements festifs et culturels.",
    images: ["nantes1.jpg", "nantes2.jpg", "nantes3.jpg", "nantes4.jpg"],
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
  {
    id: 7,
    name: "Strasbourg",
    description: "Connue pour sa cathédrale majestueuse et son marché de Noël unique.",
    images: ["strasbourg1.jpg", "strasbourg2.jpg", "strasbourg3.jpg", "strasbourg4.jpg"],
    drivers: [
      { name: "Thierry Muller", experience: "10 ans", contact: "thierry.muller@example.com" },
      { name: "Élise Weber", experience: "6 ans", contact: "elise.weber@example.com" },
    ],
    buses: [
      {
        model: "Setra ComfortClass",
        capacity: 45,
        amenities: ["Climatisation", "Toilettes", "Wi-Fi"],
      },
      {
        model: "Iveco Magelys",
        capacity: 50,
        amenities: ["Bar intégré", "Ecrans HD", "Karaoké"],
      },
    ],
  },
  {
    id: 8,
    name: "Montpellier",
    description: "Une ville jeune et dynamique, connue pour ses festivals et son climat ensoleillé.",
    images: ["montpellier1.jpg", "montpellier2.jpg", "montpellier3.jpg", "montpellier4.jpg"],
    drivers: [
      { name: "Julien Fabre", experience: "9 ans", contact: "julien.fabre@example.com" },
      { name: "Camille Fournier", experience: "5 ans", contact: "camille.fournier@example.com" },
    ],
    buses: [
      {
        model: "Volvo 9700",
        capacity: 50,
        amenities: ["Wi-Fi", "Climatisation", "Espace bagages"],
      },
    ],
  },
  {
    id: 9,
    name: "Bordeaux",
    description: "Capitale du vin, célèbre pour son architecture et ses vignobles.",
    images: ["bordeaux1.jpg", "bordeaux2.jpg", "bordeaux3.jpg", "bordeaux4.jpg"],
    drivers: [
      { name: "Lucas Martel", experience: "12 ans", contact: "lucas.martel@example.com" },
      { name: "Julie Garnier", experience: "7 ans", contact: "julie.garnier@example.com" },
    ],
    buses: [
      {
        model: "Mercedes Benz Travego",
        capacity: 55,
        amenities: ["Bar", "Wi-Fi", "Ecrans HD"],
      },
    ],
  },
  {
    id: 10,
    name: "Lille",
    description: "Une ville chaleureuse du nord avec une culture riche et diversifiée.",
    images: ["lille1.jpg", "lille2.jpg", "lille3.jpg", "lille4.jpg"],
    drivers: [
      { name: "Benoît Laurent", experience: "15 ans", contact: "benoit.laurent@example.com" },
      { name: "Amélie Moreau", experience: "10 ans", contact: "amelie.moreau@example.com" },
    ],
    buses: [
      {
        model: "Scania Interlink",
        capacity: 40,
        amenities: ["Wi-Fi", "Climatisation", "Prises USB"],
      },
    ],
  },
];

export default datas;