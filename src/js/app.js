document.addEventListener("DOMContentLoaded", function () {
    scrollNav();

    fixedNavigation();
});

function fixedNavigation() {
    const header = document.querySelector(".header");

    // Register Intersection Observer
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            header.classList.remove("fixed");
        } else {
            header.classList.add("fixed");
        }
    });

    // Adding element to observe
    const sectionFestival = document.querySelector(".about-festival");
    observer.observe(sectionFestival);
}

function scrollNav() {
    const links = document.querySelectorAll(".nav-principal a");

    links.forEach(function (link) {
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
