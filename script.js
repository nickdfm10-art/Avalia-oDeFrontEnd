const formulario = document.getElementById("formContato");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){

        resultado.style.color = "red";
        resultado.innerHTML =
        "Preencha todos os campos do formulário.";

        return;
    }

    resultado.style.color = "green";
    resultado.innerHTML =
    "Mensagem enviada com sucesso! Entraremos em contato em breve.";

    formulario.reset();
});