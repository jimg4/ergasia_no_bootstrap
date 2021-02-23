const header = document.querySelector(".header");
const logo = document.querySelector(".logo");
const navLinks = document.querySelectorAll(".header nav a");

window.onscroll = () => {
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop > 50
    ) {
        header.style.background = "white";
        logo.style.color = "black";
        navLinks.forEach((e) => {
            e.style.color = "black";
        });
    } else {
        header.style.background = "";
        logo.style.color = "";
        navLinks.forEach((e) => {
            e.style.color = "";
        });
    }
};
