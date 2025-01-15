import express from "express";
import cors from 'cors'
import datas from './Datas.js';

const app = express();

// app.use(cors({ origin: ["http://localhost:5173", "https://web.postman.co/"] }))

app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json(datas);
});



//Trouvere une ville spécifique
app.get("/city/:id", (req, res) => {
  const cityId = Number.parseInt(req.params.id); // Récupère l'id passé en paramètre
  const city = datas.find((item) => item.id === cityId); // Trouve la ville correspondante

  if (city) {
    res.json(city); // Renvoie les détails de la ville si trouvée
  } else {
    res.status(404).json({ message: "Ville non trouvée" }); // Gère les erreurs si l'id est incorrect
  }
});



app.get("/destinations/filter/capacity/:capacity", (req, res) => {
  const capacity = Number.parseInt(req.params.capacity, 10);
  const filtered = datas.filter(destination =>
    destination.buses.some(bus => bus.capacity >= capacity)
  );

  if (filtered.length === 0) {
    return res.status(404).json({ error: "Aucune ville ne correspond aux critères" });
  }

  res.json(filtered);
});

const port = 8080;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Une erreur interne s'est produite" });
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on http://0.0.0.0:${port}`);
});


