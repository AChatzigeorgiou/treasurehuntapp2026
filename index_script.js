const header = document.querySelector("#header");
//const titleImage = document.querySelector(".title-image");

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 300;
    header.classList.toggle("visible", scrolled);
    //titleImage.classList.toggle("hidden", scrolled);
});
