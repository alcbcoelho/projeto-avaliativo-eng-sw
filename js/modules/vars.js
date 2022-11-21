import devData from "./devData.js";

const modal = document.querySelector(".modal");
const devButtons = document.querySelectorAll(".dev-button");
const activeColor = "rgb(0, 255, 127)";

const updateDevInfo = function (index) {
  modal.querySelector("h1").innerText = devData.name[index].join(" ");
  modal.querySelector("img").src = devData.photo[index];

  for (let i = 0; i < modal.querySelectorAll(".section").length; i++) {
    if (!i) {
      modal
        .querySelectorAll(".section")[i]
        .querySelectorAll("div")
        .forEach((div, j) => {
          if (!j) div.querySelector("p").innerText = devData.info[j][index];
          else {
            div.querySelectorAll("ul").forEach(ul => {
              let components = "";

              for (let k = 0; k < devData.info[j][index].length; k++) {
                const punctuation =
                  k + 1 === devData.info[j][index].length ? "." : ";";

                components += `<li>${devData.info[j][index][k]}${punctuation}</li>`;
              }

              ul.innerHTML = components;
            });
          }
        });
    } else {
      modal
        .querySelectorAll(".section")
        [i].querySelectorAll("div")
        .forEach((div, j) => {
          const p = div.querySelector("p");
          const { name, description, url } = devData.projects[index][j];
          const gitHubLink = `<br><br><object data="./img/github-icon.svg" width="20" height="20"></object><a href=${url} target="_blank">Link para repositório do GitHub</a></p>`;

          div.querySelector("h3").innerText = name;
          p.innerText = description;
          p.insertAdjacentHTML("beforeend", gitHubLink);
        });
    }
  }
};

export { modal, devButtons, activeColor, updateDevInfo };