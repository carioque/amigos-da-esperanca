/* Modal e Toast */

const formulario = document.getElementById("formulario-cadastro");
const fecharModal = document.getElementById("fechar-modal");
const modal = document.getElementById("modal");

const confirmarCadastro = document.getElementById("confirmar-cadastro");
const toast = document.getElementById("toast");

if (formulario && fecharModal && modal && confirmarCadastro && toast) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        if (formulario.checkValidity()) {
            modal.style.display = "flex";
        }

    });


    fecharModal.addEventListener("click", function () {

        modal.style.display = "none";

    });


    confirmarCadastro.addEventListener("click", function () {

       const cadastro = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    tipo: document.querySelector("input[name='tipo']:checked").value,
    mensagem: document.getElementById("mensagem").value,
    data: dayjs().format("DD/MM/YYYY HH:mm")
};

        salvarCadastro(cadastro);

        modal.style.display = "none";
        toast.style.display = "block";

        exibirHistorico();

    });

}