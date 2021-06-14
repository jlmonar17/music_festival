document.addEventListener("DOMContentLoaded", function () {
    scrollNav();
});

function scrollNav() {
    const links = document.querySelectorAll(".nav-principal a");

    links.forEach(function (link) {
        console.log(link.attributes.href.value);
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const hrefLinkValue = e.target.attributes.href.value;
            const section = document.querySelector(hrefLinkValue);

            section.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}
