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
      { model: "Mercedes Sprinter", capacity: 25, amenities: ["Sonorisation", "Mini-bar", "Wi-Fi"] },
      { model: "Volvo 9700", capacity: 50, amenities: ["Ecran géant", "Bar intégré", "Karaoké"] },
    ],
    schedules: ["2025-01-15 22:00", "2025-01-20 22:00", "2025-01-25 22:00"],
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
      { model: "Setra S416", capacity: 45, amenities: ["Climatisation", "Toilettes", "Wi-Fi"] },
      { model: "Iveco Daily", capacity: 20, amenities: ["Eclairage LED", "Prises USB", "Sonorisation"] },
    ],
    schedules: ["2025-01-15 22:00", "2025-01-18 22:00", "2025-01-21 22:00"],
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
      { model: "MAN Lion's Coach", capacity: 40, amenities: ["Bar", "Ecrans HD", "Wi-Fi"] },
      { model: "Scania Touring", capacity: 55, amenities: ["Toilettes", "Espace bagages", "Sonorisation"] },
    ],
    schedules: ["2025-01-16 22:00", "2025-01-19 22:00", "2025-01-22 22:00"],
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
      { model: "Renault Tracer", capacity: 30, amenities: ["Climatisation", "Ecrans", "Wi-Fi"] },
      { model: "Volvo B8R", capacity: 45, amenities: ["Toilettes", "Prises USB", "Sonorisation"] },
    ],
    schedules: ["2025-01-17 22:00", "2025-01-22 22:00", "2025-01-27 22:00"],
  },
  {
    id: 5,
    name: "Nice",
    description: "Ville méditerranéenne célèbre pour sa promenade des Anglais et ses plages.",
    images: ["nice1.jpg", "nice2.jpg", "nice3.jpg", "nice4.jpg"],
    drivers: [
      { name: "Lucas Morel", experience: "8 ans", contact: "lucas.morel@example.com" },
      { name: "Marie Delon", experience: "5 ans", contact: "marie.delon@example.com" },
    ],
    buses: [
      { model: "Irizar i6", capacity: 40, amenities: ["Wi-Fi", "Climatisation", "Bar"] },
      { model: "Van Hool EX", capacity: 55, amenities: ["Toilettes", "Sonorisation", "Prises USB"] },
    ],
    schedules: ["2025-01-16 22:00", "2025-01-23 22:00", "2025-01-30 22:00"],
  },
  {
    id: 6,
    name: "Nantes",
    description: "Une ville dynamique avec des machines géantes et une riche culture.",
    images: ["nantes1.jpg", "nantes2.jpg", "nantes3.jpg", "nantes4.jpg"],
    drivers: [
      { name: "Julien Fabre", experience: "10 ans", contact: "julien.fabre@example.com" },
      { name: "Sarah Duval", experience: "6 ans", contact: "sarah.duval@example.com" },
    ],
    buses: [
      { model: "Mercedes Intouro", capacity: 50, amenities: ["Wi-Fi", "Climatisation", "Bar"] },
      { model: "Isuzu Novo", capacity: 25, amenities: ["Sonorisation", "Ecran LED", "USB"] },
    ],
    schedules: ["2025-01-18 22:00", "2025-01-25 22:00", "2025-01-31 22:00"],
  },
  {
    id: 7,
    name: "Strasbourg",
    description: "Une ville européenne connue pour ses canaux et son marché de Noël.",
    images: ["strasbourg1.jpg", "strasbourg2.jpg", "strasbourg3.jpg", "strasbourg4.jpg"],
    drivers: [
      { name: "Laurent Millet", experience: "13 ans", contact: "laurent.millet@example.com" },
      { name: "Emma Dubois", experience: "7 ans", contact: "emma.dubois@example.com" },
    ],
    buses: [
      { model: "Temsa Safari", capacity: 45, amenities: ["Toilettes", "Wi-Fi", "Prises USB"] },
      { model: "MAN Lions", capacity: 55, amenities: ["Climatisation", "Bar", "Sonorisation"] },
    ],
    schedules: ["2025-01-19 22:00", "2025-01-24 22:00", "2025-01-28 22:00"],
  },
  {
    id: 8,
    name: "Lille",
    description: "Une ville chaleureuse avec une vie nocturne animée et une riche histoire.",
    images: ["lille1.jpg", "lille2.jpg", "lille3.jpg", "lille4.jpg"],
    drivers: [
      { name: "Benoît Perrin", experience: "9 ans", contact: "benoit.perrin@example.com" },
      { name: "Clara Marchand", experience: "6 ans", contact: "clara.marchand@example.com" },
    ],
    buses: [
      { model: "Neoplan Cityliner", capacity: 40, amenities: ["Ecran LED", "Bar", "Wi-Fi"] },
      { model: "Setra Comfort", capacity: 50, amenities: ["Sonorisation", "USB", "Climatisation"] },
    ],
    schedules: ["2025-01-20 22:00", "2025-01-26 22:00", "2025-02-01 22:00"],
  },
  {
    id: 9,
    name: "Bordeaux",
    description: "La capitale mondiale du vin, bordée par la Garonne.",
    images: ["bordeaux1.jpg", "bordeaux2.jpg", "bordeaux3.jpg", "bordeaux4.jpg"],
    drivers: [
      { name: "Mathieu Lambert", experience: "12 ans", contact: "mathieu.lambert@example.com" },
      { name: "Isabelle Petit", experience: "8 ans", contact: "isabelle.petit@example.com" },
    ],
    buses: [
      { model: "Volvo 9900", capacity: 50, amenities: ["Wi-Fi", "Toilettes", "Bar"] },
      { model: "Iveco Magelys", capacity: 55, amenities: ["Ecran HD", "Climatisation", "Prises USB"] },
    ],
    schedules: ["2025-01-18 22:00", "2025-01-24 22:00", "2025-01-29 22:00"],
  },
  {
    id: 10,
    name: "Montpellier",
    description: "Une ville ensoleillée, dynamique et proche de la mer.",
    images: ["montpellier1.jpg", "montpellier2.jpg", "montpellier3.jpg", "montpellier4.jpg"],
    drivers: [
      { name: "Paul Rivière", experience: "10 ans", contact: "paul.riviere@example.com" },
      { name: "Alice Brun", experience: "6 ans", contact: "alice.brun@example.com" },
    ],
    buses: [
      { model: "Mercedes Travego", capacity: 50, amenities: ["Bar", "Wi-Fi", "Toilettes"] },
      { model: "Van Hool TX", capacity: 55, amenities: ["USB", "Ecran HD", "Climatisation"] },
    ],
    schedules: ["2025-01-16 22:00", "2025-01-22 22:00", "2025-01-30 22:00"],
  },
];

export default datas;