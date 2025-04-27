let curtirKirby = document.getElementById("curtir1");
let curtidoKirby = document.getElementById("curtido1");
let curtidasKirby = document.getElementById("curtidas1");
let likeKirby = true;

curtidoKirby.addEventListener("click", () => {
  let curtidas = parseInt(curtidasKirby.textContent);

  if (likeKirby) {
    curtidas += 1;
    curtidasKirby.textContent = curtidas;
  } else {
    curtidas -= 1;
    curtidasKirby.textContent = curtidas;
  }

  likeKirby = !likeKirby;
});

let comentariosBack = document.getElementById("comentariosBack");
let comentarKirby = document.getElementById("comentar1");
let fecharComentarioKirby = document.getElementById("fechar1");
let comentariosKirby = document.getElementById("comentarios1");

comentarKirby.addEventListener("click", function () {
  comentariosBack.style.display = "block";
  comentariosKirby.classList.add("entrar");
  comentariosKirby.classList.remove("sair");
});

fecharComentarioKirby.addEventListener("click", function () {
  comentariosKirby.classList.add("sair");
  comentariosKirby.classList.remove("entrar");
  setTimeout(function () {
    comentariosBack.style.display = "none";
  }, 300);
});
