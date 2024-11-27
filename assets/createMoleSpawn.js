function createMoleSpawn() {
  const moleIcon = document.querySelectorAll(".mole");
  const randomIndex = Math.floor(Math.random() * moleIcon.length);
  const chosenMole = moleIcon[randomIndex];

  chosenMole.classList.remove("scale-0");

  setTimeout(() => {
    chosenMole.classList.add("scale-0");
  }, 800);
}

export { createMoleSpawn };
