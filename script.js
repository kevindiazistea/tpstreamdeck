function sendCommand(id) {
  const url = `https://thesimpsonsapi.com/api/characters/${id}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      
      const nombre = data.name;
      const edad = data.age;
      const imagen = `https://cdn.thesimpsonsapi.com/500/character/${id}.webp`;

      const container = document.createElement("div");
      container.className = "info-box";
      container.innerHTML = `
        <h2>${nombre}</h2>
        <img src="${imagen}" alt="${nombre}" />
        <p><strong>Edad:</strong> ${edad}</p>
      `;
      document.body.appendChild(container);
    })

    .catch(err => {
      console.error("Error al obtener datos:", err);
      alert("No se pudo obtener la información del personaje.");
    });
}