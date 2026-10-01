/* Menu hambúrguer */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("aberto");

        const menuAberto = menu.classList.contains("aberto");

        menuToggle.setAttribute("aria-expanded", menuAberto);
        menuToggle.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

    });
}