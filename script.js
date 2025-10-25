function sendpj(id) {
  const url = `https://thesimpsonsapi.com/api/characters/${id}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const imagen = `https://cdn.thesimpsonsapi.com/500/character/${id}.webp`;
      const nombre = data.name;
      const edad = data.age;
      const ocupacion = data.occupation;

      const content = `
        <h2>${nombre}</h2>
        <img src="${imagen}" alt="${nombre}" />
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Ocupación:</strong> ${ocupacion}</p>
      `;

      openModal(content);
    })
    .catch(err => {
      console.error("Error al obtener datos:", err);
      alert("No se pudo obtener la información del personaje.");
    });
}



function sendubi(id) {
    fetch(`https://thesimpsonsapi.com/api/locations/${id}`)
    .then(res => res.json())
    .then(data => {
      const nombre = data.name;
      const imagen = `https://cdn.thesimpsonsapi.com/1280${data.image_path}`;
      const uso = data.use;

      const content = `
        <h2>${nombre}</h2>
        <img src="${imagen}" alt="${nombre}" />
        <p><strong>Uso:</strong> ${uso}</p>

      `;

      openModal(content);
    })
    .catch(err => {
      console.error("Error al obtener datos:", err);
      alert("No se pudo obtener la información del personaje.");
    });
}