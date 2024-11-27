function createHoleMole() {
  const holeContainer = document.querySelector(".hole-container");
  for (let i = 0; i < 12; i++) {
    const createElement = document.createElement("div");
    createElement.classList.add(
      "hole-mole",
      "relative",
      "grid",
      "justify-items-center"
    );
    createElement.insertAdjacentHTML(
      "beforeend",
      `
        <div class="hole w-16 h-4 sm:w-32 sm:h-5 rounded-full bg-black border-4 border-white"></div>
        <img class="mole w-28 absolute bottom-0 cursor-pointer select-none scale-0 transition-transform origin-bottom" src="https://www.svgrepo.com/show/289087/mole.svg" alt="mole" draggable="false">
      `
    );
    holeContainer.appendChild(createElement);
  }
}

export { createHoleMole };
