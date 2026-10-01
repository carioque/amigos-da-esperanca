const cpf = document.getElementById("cpf");

if (cpf) {
    cpf.addEventListener("input", function () {
        let valor = cpf.value;

        valor = valor.replace(/\D/g, "");

        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        cpf.value = valor;
    });
}

const telefone = document.getElementById("telefone");

if (telefone) {
    telefone.addEventListener("input", function () {
        let valor = telefone.value;

        valor = valor.replace(/\D/g, "");

        if (valor.length > 11) {
            valor = valor.slice(0, 11);
        }

        if (valor.length <= 10) {
            valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
        }

        telefone.value = valor;
    });
}


const cep = document.getElementById("cep");

if (cep) {
    cep.addEventListener("input", function () {
        let valor = cep.value;

        valor = valor.replace(/\D/g, "");

        if (valor.length > 8) {
            valor = valor.slice(0, 8);
        }

        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

        cep.value = valor;
    });
}
