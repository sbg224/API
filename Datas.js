const datas = [
  {
    id: 0,
    departure: "Paris",
    destination: "Lyon",
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur1.jpg",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1salt-lake-city-1762657_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2buildings-5582974_1920.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3cologne-cathedral-5512117_1280.jpg" },
    ],
    FavIc:"https://api-9ut4.onrender.com/static/assets/ParIsLyon.svg",
    description: "La ville lumière, célèbre pour sa Tour Eiffel et ses soirées inoubliables.",
    images: "https://api-9ut4.onrender.com/static/assets/Paris.jpg",
    drivers: [
      { name: "Jean Dupont", experience: "15 ans", contact: "jean.dupont@example.com" },
      { name: "Sophie Martin", experience: "10 ans", contact: "sophie.martin@example.com" },
    ],
    buses: [
      { model: "Mercedes Sprinter", capacity: 25, amenities: ["Sonorisation", "Mini-bar", "Wi-Fi"] },
      { model: "Volvo 9700", capacity: 50, amenities: ["Ecran géant", "Bar intégré", "Karaoké"] },
    ],
    schedules: [
      { date: "31/12/2025", time: "22:00" },
    ],
  },
  {
    id: 1,
    departure: "Toulouse",
    destination: "Nice",
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur2.jpg",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1kansas-city-5111837_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2buildings-1835647_1280.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3architecture-3592318_1280.jpg" },
    ],
    FavIc:"https://api-9ut4.onrender.com/static/assets/ToulouseNice.svg",
    description: "La cité phocéenne, réputée pour son vieux port et sa bouillabaisse.",
    images: "https://api-9ut4.onrender.com/static/assets/Toulouse.jpg",
    drivers: [
      { name: "Pierre Bernard", experience: "12 ans", contact: "pierre.bernard@example.com" },
      { name: "Emma Roche", experience: "9 ans", contact: "emma.roche@example.com" },
    ],
    buses: [
      { model: "Setra S416", capacity: 45, amenities: ["Climatisation", "Toilettes", "Wi-Fi"] },
      { model: "Iveco Daily", capacity: 20, amenities: ["Eclairage LED", "Prises USB", "Sonorisation"] },
    ],
    schedules: [
      { date: "07/11/2025", time: "21:30" },
    ],
  },
  {
    id: 2,
    departure: "Marseille",
    destination: "Toulouse",
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur3.jpg",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1nyc-244196_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2kansas-city-5111825_1280.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3new-york-city-2263343_1280.jpg" },
    ],
    FavIc:"https://api-9ut4.onrender.com/static/assets/MarseilleToulouse.svg",
    description: "La capitale de la gastronomie française, située entre deux fleuves.",
    images: "https://api-9ut4.onrender.com/static/assets/Marseille.jpg",
    drivers: [
      { name: "Claude Lefèvre", experience: "14 ans", contact: "claude.lefevre@example.com" },
      { name: "Anne Girard", experience: "10 ans", contact: "anne.girard@example.com" },
    ],
    buses: [
      { model: "MAN Lion's Coach", capacity: 40, amenities: ["Bar", "Ecrans HD", "Wi-Fi"] },
      { model: "Scania Touring", capacity: 55, amenities: ["Toilettes", "Espace bagages", "Sonorisation"] },
    ],
    schedules: [
      { date: "06/10/2025", time: "13:25" },
    ],
  },
  {
    id: 3,
    departure: "Nantes",
    destination: "Toulouse",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1twilight-zone-3882527_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2singapore-2696704_1280.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3dusk-3676799_1280.jpg" },
    ],
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur4.jpg",
    FavIc:"https://api-9ut4.onrender.com/static/assets/NantesToulouse.svg",
    description: "La ville rose, connue pour son industrie aéronautique et ses charmantes rues.",
    images: "https://api-9ut4.onrender.com/static/assets/Nantes.jpg",
    drivers: [
      { name: "Marc Lemoine", experience: "11 ans", contact: "marc.lemoine@example.com" },
      { name: "Chloé Vidal", experience: "7 ans", contact: "chloe.vidal@example.com" },
    ],
    buses: [
      { model: "Renault Tracer", capacity: 30, amenities: ["Climatisation", "Ecrans", "Wi-Fi"] },
      { model: "Volvo B8R", capacity: 45, amenities: ["Toilettes", "Prises USB", "Sonorisation"] },
    ],
    schedules: [
      { date: "17/09/2025", time: "15:00" },
    ],
  },
  {
    id: 4,
    departure: "Nantes",
    destination: "Nice",
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur5.jpg",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1hong-kong-3902841_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2sofia-3658934_1280.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3buildings-5901178_1280.jpg" },
    ],
    FavIc:"https://api-9ut4.onrender.com/static/assets/NantesNice.svg",
    description: "Ville méditerranéenne célèbre pour sa promenade des Anglais et ses plages.",
    images: "https://api-9ut4.onrender.com/static/assets/Nice.jpg",
    drivers: [
      { name: "Lucas Morel", experience: "8 ans", contact: "lucas.morel@example.com" },
      { name: "Marie Delon", experience: "5 ans", contact: "marie.delon@example.com" },
    ],
    buses: [
      { model: "Irizar i6", capacity: 40, amenities: ["Wi-Fi", "Climatisation", "Bar"] },
      { model: "Van Hool EX", capacity: 55, amenities: ["Toilettes", "Sonorisation", "Prises USB"] },
    ],
    schedules: [
      { date: "13/06/2025", time: "15:45" },
    ],
  },
  {
    id: 5,
    departure: "Strasbourg",
    destination: "Nice",
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur6.jpg",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1sunset-3875817_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2new-york-540807_1280.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3railway-station-1363771_1280.jpg" },
    ],
    FavIc:"https://api-9ut4.onrender.com/static/assets/StrasbourgNice.svg",
    description: "Une ville dynamique avec des machines géantes et une riche culture.",
    images: "https://api-9ut4.onrender.com/static/assets/Strasbourg.jpg",
    drivers: [
      { name: "Julien Fabre", experience: "10 ans", contact: "julien.fabre@example.com" },
      { name: "Sarah Duval", experience: "6 ans", contact: "sarah.duval@example.com" },
    ],
    buses: [
      { model: "Mercedes Intouro", capacity: 50, amenities: ["Wi-Fi", "Climatisation", "Bar"] },
      { model: "Isuzu Novo", capacity: 25, amenities: ["Sonorisation", "Ecran LED", "USB"] },
    ],
    schedules: [
      { date: "18/01/2025", time: "12:35" },
    ],
  },
  {
    id: 6,
    departure: "Lille",
    destination: "Strasbourg",
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur7.jpg",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1hungarian-parliament-building-6933621_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2kansas-city-5111833_1280.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3kansas-city-5111832_1280.jpg" },
    ],
    FavIc:"https://api-9ut4.onrender.com/static/assets/LilleStrasbourg.svg",
    description: "Une ville européenne connue pour ses canaux et son marché de Noël.",
    images: "https://api-9ut4.onrender.com/static/assets/Lille.jpg",
    drivers: [
      { name: "Laurent Millet", experience: "13 ans", contact: "laurent.millet@example.com" },
      { name: "Emma Dubois", experience: "7 ans", contact: "emma.dubois@example.com" },
    ],
    buses: [
      { model: "Temsa Safari", capacity: 45, amenities: ["Toilettes", "Wi-Fi", "Prises USB"] },
      { model: "MAN Lions", capacity: 55, amenities: ["Climatisation", "Bar", "Sonorisation"] },
    ],
    schedules: [
      { date: "22/11/2025", time: "01:30" },
    ],
  },
  {
    id: 7,
    departure: "Bordeaux",
    destination: "Nice",
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur8.jpg",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1america-2800896_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2new-york-city-8950021_1280.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3metropolitan-2354546_1280.jpg" },
    ],
    FavIc:"https://api-9ut4.onrender.com/static/assets/BordeauxNice.svg",
    description: "Une ville chaleureuse avec une vie nocturne animée et une riche histoire.",
    images: "https://api-9ut4.onrender.com/static/assets/Bordeaux.jpg",
    drivers: [
      { name: "Benoît Perrin", experience: "9 ans", contact: "benoit.perrin@example.com" },
      { name: "Clara Marchand", experience: "6 ans", contact: "clara.marchand@example.com" },
    ],
    buses: [
      { model: "Neoplan Cityliner", capacity: 40, amenities: ["Ecran LED", "Bar", "Wi-Fi"] },
      { model: "Setra Comfort", capacity: 50, amenities: ["Sonorisation", "USB", "Climatisation"] },
    ],
    schedules: [
      { date: "18/01/2025", time: "12:35" },
    ],
  },
  {
    id: 8,
    departure: "Montpellier",
    destination: "Bordeaux",
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur9.jpg",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1brooklyn-bridge-2380682_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2new-york-city-8950081_1280.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3eilean-donan-5570684_1280.jpg" },
    ],
    FavIc:"https://api-9ut4.onrender.com/static/assets/MontpellierBordeaux.svg",
    description: "La capitale mondiale du vin, bordée par la Garonne.",
    images: "https://api-9ut4.onrender.com/static/assets/Montpellier.jpg",
    drivers: [
      { name: "Mathieu Lambert", experience: "12 ans", contact: "mathieu.lambert@example.com" },
      { name: "Isabelle Petit", experience: "8 ans", contact: "isabelle.petit@example.com" },
    ],
    buses: [
      { model: "Volvo 9900", capacity: 50, amenities: ["Wi-Fi", "Toilettes", "Bar"] },
      { model: "Iveco Magelys", capacity: 55, amenities: ["Ecran HD", "Climatisation", "Prises USB"] },
    ],
    schedules: [
      { date: "05/04/2025", time: "03:20" },
    ],
  },
  {
    id: 9,
    departure: "Saaaaalut",
    destination: "les gars !",
    conducteur: "https://api-9ut4.onrender.com/static/assets/Conducteur10.jpg",
    onglets: [
      { onglet1: "https://api-9ut4.onrender.com/static/assets/Onglet1melbourne-1587291_1280.jpg" },
      { onglet2: "https://api-9ut4.onrender.com/static/assets/Onglet2new-york-2335664_1280.jpg" },
      { onglet3: "https://api-9ut4.onrender.com/static/assets/Onglet3london-4430030_1280.jpg" },
    ],
    FavIc:"https://api-9ut4.onrender.com/static/assets/ParadisEnfer.svg",
    description: "Une ville ensoleillée, dynamique et proche de la mer.",
    images: "https://api-9ut4.onrender.com/static/assets/ParadisEnfer.jpg",
    drivers: [
      { name: "Paul Rivière", experience: "10 ans", contact: "paul.riviere@example.com" },
      { name: "Alice Brun", experience: "6 ans", contact: "alice.brun@example.com" },
    ],
    buses: [
      { model: "Mercedes Travego", capacity: 50, amenities: ["Bar", "Wi-Fi", "Toilettes"] },
      { model: "Van Hool TX", capacity: 55, amenities: ["USB", "Ecran HD", "Climatisation"] },
    ],
    schedules: [
      { date: "jamais épuisé", time: "la team" },
    ],
  },
];

export default datas;