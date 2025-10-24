function sendCommand(id) {
  const url = `https://thesimpsonsapi.com/api/characters/${id}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      
      const nombre = data.name;
      const edad = data.age;

      alert(`${nombre}\n\nEdad: ${edad}\n`);
    })
    .catch(err => {
      console.error("Error al obtener datos:", err);
      alert("No se pudo obtener la información del personaje.");
    });
}