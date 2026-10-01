/* LocalStorage */

function salvarCadastro(cadastro) {

    const dadosSalvos = localStorage.getItem("cadastros");

    let cadastros = [];

    if (dadosSalvos) {
        cadastros = JSON.parse(dadosSalvos);
    }

    cadastros.push(cadastro);

    localStorage.setItem("cadastros", JSON.stringify(cadastros));
}


function carregarCadastros() {

    const dadosSalvos = localStorage.getItem("cadastros");

    if (!dadosSalvos) {
        return [];
    }

    return JSON.parse(dadosSalvos);
}


function exibirHistorico() {

    const historico = document.getElementById("historico-cadastros");

    if (!historico) {
        return;
    }

    const cadastros = carregarCadastros();

    if (cadastros.length === 0) {
        historico.innerHTML = "<p>Nenhum cadastro realizado ainda.</p>";
        return;
    }

    historico.innerHTML = `
        <h3>Cadastros realizados</h3>
        ${cadastros.map(function (cadastro) {
            return `
                <article>
                    <strong>${cadastro.nome}</strong>
                    <p>${cadastro.email}</p>
                    <p>${cadastro.tipo}</p>
                    <p>Data: ${cadastro.data}</p>
                </article>
            `;
        }).join("")}
    `;
}


document.addEventListener("DOMContentLoaded", function () {
    exibirHistorico();
});