const formularioValidacao = document.getElementById("formulario-cadastro");

if (formularioValidacao) {

    const campos = formularioValidacao.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='tel'], textarea"
    );

    campos.forEach(function (campo) {

        campo.addEventListener("input", function () {

            if (campo.checkValidity()) {

                campo.classList.remove("erro");
                campo.classList.add("sucesso");

            } else {

                campo.classList.remove("sucesso");
                campo.classList.add("erro");

            }

        });

    });

    formularioValidacao.addEventListener("submit", function () {

        const mensagem = document.getElementById("mensagem-validacao");

        if (formularioValidacao.checkValidity()) {

            mensagem.innerHTML = `
                <div class="badge">
                    Formulário válido!
                </div>
            `;

        } else {

            mensagem.innerHTML = `
                <div class="mensagem-erro">
                    Verifique os campos destacados antes de enviar.
                </div>
            `;

        }

    });

}