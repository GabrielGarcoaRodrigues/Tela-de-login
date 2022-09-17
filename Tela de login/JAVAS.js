var btncadastrar = document.querySelector("#cadastrar");
var btnentrar = document.querySelector("#entrar");

var body = document.querySelector("body");


btncadastrar.addEventListener("click", function () {
    body.className = "cadastrar-js";
});

btnentrar.addEventListener("click", function () {
    body.className = "entrar-js";
})