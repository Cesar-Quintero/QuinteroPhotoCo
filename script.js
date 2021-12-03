function menuToggle() {
    var menuTap = document.querySelector(".nav_links");
    if (menuTap.style.display === "flex") {
        menuTap.style.display = "none";
    } else {
        menuTap.style.display = "flex";
    }
}
