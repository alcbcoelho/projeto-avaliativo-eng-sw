import { modal, devButtons, activeColor, updateDevInfo } from "./modules/vars.js";

setInterval(() => {
  const blinkingElement = document.querySelector("#blinking");
  blinkingElement.style.opacity =
    blinkingElement.style.opacity === "1" ? "0" : "1";
}, 500);

devButtons.forEach((button, i) =>
  button.addEventListener("click", () => {
    const thumbnail = button.querySelector("img");
    const selectedThumbnail = document.querySelector(".selected");

    modal.classList.remove("hidden");
    if (selectedThumbnail) {
      selectedThumbnail.classList.remove("selected");
      selectedThumbnail.removeAttribute("style");
    }
    thumbnail.classList.add("selected");
    thumbnail.style.borderColor = activeColor;

    updateDevInfo(i);
  })
);

modal.querySelector("button").addEventListener("click", () => {
  modal.classList.add("hidden");
  devButtons.forEach(button => {
    const thumbnail = button.querySelector("img");

    thumbnail.classList.remove("selected");
    thumbnail.style.borderColor === activeColor &&
    thumbnail.removeAttribute("style");
  });
});