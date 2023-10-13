const sons = {
  zap: document.querySelector(".zap"),
  gato: document.querySelector(".gato"),
  elon: document.querySelector(".elon"),
  kwai: document.querySelector(".kwai"),
  tira: document.querySelector(".tira"),
  vasco: document.querySelector(".vasco"),
  manga: document.querySelector(".manga"),
  pinto: document.querySelector(".pinto"),
  among: document.querySelector(".among"),
};

const videos = {
  scooby: document.querySelector(".scooby"),
  comedor: document.querySelector(".comedor_cu"),
  mario: document.querySelector(".mario"),
  gatos: document.querySelector(".gatos"),
  core: document.querySelector(".core"),
  dokidoki: document.querySelector(".dokidoki"),
};

const imgsEnt = [
  "imgs/gato_among.jpg",
  "imgs/gato_among.jpg",
  "imgs/gato_among.jpg",
  "imgs/gato_among.jpg",
  "imgs/gato_among.jpg",
  "imgs/gato_among.jpg",
  "imgs/gato_among.jpg",
];

const aparecer = document.querySelector(".aparecer");
const fundo = document.querySelector(".fundo");

function comecando() {
  aparecer.style.display = "none";
  fundo.style.display = "block";
}

function adicionarAudio(element, audio) {
  element.addEventListener("click", () => audio.play());
}

function adicionarBotaoSurpresa() {
  const botao = document.createElement("button");
  botao.textContent = ":)";
  aparecer.appendChild(botao);
  botao.classList.add("botao_surpresa");
}

function trocarFundo(sorteador) {
  aparecer.style.backgroundImage = `url(${imgsEnt[sorteador]})`;
}

function esconderVideos() {
  for (const video of Object.values(videos)) {
    video.style.display = "none";
  }
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
      fundo.style.display = "block";
      const input = document.createElement("input");
      fundo.appendChild(input);
      break;
    case "K":
      sons.zap.play();
      break;
    case "a":
      sons.vasco.play();
      break;
    case "r":
      sons.pinto.play();
      break;
    case "e":
      sons.tira.play();
      break;
    case "n":
      sons.elon.play();
      break;
    case "Enter":
      sons.among.play();
      const sorteador = Math.floor(Math.random() * 6);
      const botao_surpresa = Math.floor(Math.random() * 11);
      if (botao_surpresa == 1) {
        adicionarBotaoSurpresa();
      }
      trocarFundo(sorteador);
      setTimeout(() => {
        esconderVideos();
        switch (sorteador) {
          case 0:
            videos.scooby.style.display = "block";
            break;
          case 1:
            videos.comedor.style.display = "block";
            break;
          case 2:
            videos.mario.style.display = "block";
            break;
          case 3:
            videos.gatos.style.display = "block";
            break;
          case 4:
            videos.dokidoki.style.display = "block";
            break;
          case 5:
            videos.core.style.display = "block";
            break;
          default:
            break;
        }
      }, 3000);
      break;
    default:
      break;
  }
});
