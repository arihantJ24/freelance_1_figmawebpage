document.getElementById("stake-button").addEventListener("click", () => {
  document.getElementById("overlay").classList.add("active");
  document.getElementById("popup").classList.add("active");
});

document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("popup").classList.remove("active");
});
