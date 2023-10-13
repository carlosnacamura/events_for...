const sons = {
  zap: document.querySelector(".zap"),
  gato: document.querySelector(".gato"),
  elon: document.querySelector(".elon"),
  kwai: document.querySelector(".kwai"),
  tira: document.querySelector(".tira"),
  vasco: document.querySelector(".vasco"),
  manga: document.querySelector(".manga"),
  pinto: document.querySelector(".pinto"),
};
const videos = {
  scooby: document.querySelector(".scooby"),
  comedor: document.querySelector(".comedor_cu"),
  mario: document.querySelector(".mario"),
  gatos: document.querySelector(".gatos"),
  core: document.querySelector(".core"),
  dokidoki: document.querySelector(".dokidoki"),
};
const aparecer = document.querySelector(".aparecer")
function adicionarAudio(portador, som) {
  portador.addEventListener("click", () => som.play());
}
function styleBlock(portador) {
  portador.style.display = "block";
}
adicionarAudio(videos.scooby, sons.pinto);
adicionarAudio(videos.comedor, sons.zap);
adicionarAudio(aparecer, sons.gato);
adicionarAudio(videos.mario, sons.elon);
adicionarAudio(videos.gatos, sons.vasco);
adicionarAudio(videos.core, sons.manga);
adicionarAudio(videos.dokidoki, sons.tira);
addEventListener("keydown", (evt) => {
  switch (evt.key) {
    case " ":
      const input = document.createElement("input");
      aparecer.appendChild(input);
      break;
    case "K":
      sons.zap_audio.play();
      break;
    case "a":
      sons.vasco.play();
      break;
    case "r":
      break;
    case "e":
      break;
    case "n":
      break;
    case "Enter":
      const sorteador = Math.floor(Math.random() * 6);
      const arrayVideos = Object.values(videos)
      arrayVideos.forEach((video) => {
        video.style.display = "none";
      });
      switch (sorteador) {
        case 0:
          styleBlock(videos.scooby);
          break;
        case 1:
          styleBlock(videos.comedor);
          break;
        case 2:
          styleBlock(videos.mario);
          break;
        case 3:
          styleBlock(videos.gatos);
          break;
        case 4:
          styleBlock(videos.dokidoki);
          break;
        case 5:
          styleBlock(videos.core);
          break;
        default:
          break;
      }
    default:
      break;
  }
});
