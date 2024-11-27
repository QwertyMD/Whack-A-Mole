function createCounter() {
  const moleIcon = document.querySelectorAll(".mole");
  const scoreHandler = document.querySelector(".score");
  moleIcon.forEach((e) => {
    e.addEventListener("click", () => {
      scoreHandler.textContent = `${Number(scoreHandler.textContent) + 1}`;
      e.classList.add("scale-0");
    });
  });
}

export { createCounter };
