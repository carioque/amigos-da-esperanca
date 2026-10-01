/* SPA */

const app = document.getElementById("app");

if (app) {
    console.log("Área principal da SPA encontrada!");
}

function renderizar(conteudo) {

    app.innerHTML = "";

    app.innerHTML = conteudo;

}

const projetos = [
    {
        titulo: "Campanha de arrecadação de alimentos",
        descricao: "Arrecadação de alimentos para famílias em situação de necessidade."
    },
    {
        titulo: "Doação de roupas",
        descricao: "Coleta e distribuição de roupas para pessoas que precisam."
    },
    {
        titulo: "Ações comunitárias",
        descricao: "Ações realizadas para ajudar e fortalecer a comunidade."
    }
];

const projetosHTML = projetos.map(function (projeto) {
    return `
        <article>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        </article>
    `;
}).join("");

const paginas = {
    inicio: `
        <h2>Transformando solidariedade em ação</h2>
        <p>
            Ser solidário pode salvar o futuro de alguém!
        </p>
    `,

    projetos: `
        <h2>Nossos projetos</h2>

        <div class="cards">
            ${projetosHTML}
        </div>
    `,

    cadastro: `
        <h2>Seja voluntário</h2>
        <p>
            Faça seu cadastro e participe das nossas ações.
        </p>
    `
};


const rotas = {
    "index.html": "inicio",
    "projetos.html": "projetos",
    "cadastro.html": "cadastro"
};


const links = document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const destino = link.getAttribute("href");

        const pagina = rotas[destino];

        console.log("Destino:", destino);

        history.pushState(null, "", destino);

        console.log("URL depois do pushState:", window.location.href);

        renderizar(paginas[pagina]);

    });

});


window.addEventListener("popstate", function () {

    const destino = window.location.pathname.split("/").pop();

    const pagina = rotas[destino];

    renderizar(paginas[pagina]);

});