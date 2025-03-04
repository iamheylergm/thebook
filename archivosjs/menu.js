document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menuContainer = document.querySelector(".menu-container");

    menuButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        menuContainer.classList.toggle("active");
    });

    // Cerrar el menú si se hace clic fuera
    document.addEventListener("click", function (event) {
        if (!menuContainer.contains(event.target)) {
            menuContainer.classList.remove("active");
        }
    });
});