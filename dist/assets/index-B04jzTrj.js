(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`cpf`);e&&e.addEventListener(`input`,function(){let t=e.value;t=t.replace(/\D/g,``),t.length>11&&(t=t.slice(0,11)),t=t.replace(/(\d{3})(\d)/,`$1.$2`),t=t.replace(/(\d{3})(\d)/,`$1.$2`),t=t.replace(/(\d{3})(\d{1,2})$/,`$1-$2`),e.value=t});var t=document.getElementById(`telefone`);t&&t.addEventListener(`input`,function(){let e=t.value;e=e.replace(/\D/g,``),e.length>11&&(e=e.slice(0,11)),e.length<=10?(e=e.replace(/(\d{2})(\d)/,`($1) $2`),e=e.replace(/(\d{4})(\d)/,`$1-$2`)):(e=e.replace(/(\d{2})(\d)/,`($1) $2`),e=e.replace(/(\d{5})(\d)/,`$1-$2`)),t.value=e});var n=document.getElementById(`cep`);n&&n.addEventListener(`input`,function(){let e=n.value;e=e.replace(/\D/g,``),e.length>8&&(e=e.slice(0,8)),e=e.replace(/(\d{5})(\d)/,`$1-$2`),n.value=e});var r=document.getElementById(`formulario-cadastro`),i=document.getElementById(`fechar-modal`),a=document.getElementById(`modal`),o=document.getElementById(`confirmar-cadastro`),s=document.getElementById(`toast`);r&&i&&a&&o&&s&&(r.addEventListener(`submit`,function(e){e.preventDefault(),r.checkValidity()&&(a.style.display=`flex`)}),i.addEventListener(`click`,function(){a.style.display=`none`}),o.addEventListener(`click`,function(){let e={nome:document.getElementById(`nome`).value,email:document.getElementById(`email`).value,tipo:document.querySelector(`input[name='tipo']:checked`).value,mensagem:document.getElementById(`mensagem`).value,data:dayjs().format(`DD/MM/YYYY HH:mm`)};salvarCadastro(e),a.style.display=`none`,s.style.display=`block`,exibirHistorico()}));var c=document.querySelector(`.menu-toggle`),l=document.querySelector(`.menu`);c&&l&&c.addEventListener(`click`,function(){l.classList.toggle(`aberto`);let e=l.classList.contains(`aberto`);c.setAttribute(`aria-expanded`,e),c.setAttribute(`aria-label`,e?`Fechar menu`:`Abrir menu`)});var u=document.getElementById(`app`);u&&console.log(`Área principal da SPA encontrada!`);function d(e){u.innerHTML=``,u.innerHTML=e}var f={inicio:`
        <h2>Transformando solidariedade em ação</h2>
        <p>
            Ser solidário pode salvar o futuro de alguém!
        </p>
    `,projetos:`
        <h2>Nossos projetos</h2>

        <div class="cards">
            ${[{titulo:`Campanha de arrecadação de alimentos`,descricao:`Arrecadação de alimentos para famílias em situação de necessidade.`},{titulo:`Doação de roupas`,descricao:`Coleta e distribuição de roupas para pessoas que precisam.`},{titulo:`Ações comunitárias`,descricao:`Ações realizadas para ajudar e fortalecer a comunidade.`}].map(function(e){return`
        <article>
            <h3>${e.titulo}</h3>
            <p>${e.descricao}</p>
        </article>
    `}).join(``)}
        </div>
    `,cadastro:`
        <h2>Seja voluntário</h2>
        <p>
            Faça seu cadastro e participe das nossas ações.
        </p>
    `},p={"index.html":`inicio`,"projetos.html":`projetos`,"cadastro.html":`cadastro`};document.querySelectorAll(`nav a`).forEach(function(e){e.addEventListener(`click`,function(t){t.preventDefault();let n=e.getAttribute(`href`),r=p[n];console.log(`Destino:`,n),history.pushState(null,``,n),console.log(`URL depois do pushState:`,window.location.href),d(f[r])})}),window.addEventListener(`popstate`,function(){let e=p[window.location.pathname.split(`/`).pop()];d(f[e])});