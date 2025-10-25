function openModal(contentHTML) {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");

  modal.innerHTML = `
    ${contentHTML}
    <button class="close-btn" onclick="closeModal()">Salir</button>
  `;

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
}