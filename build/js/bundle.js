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

document.addEventListener("DOMContentLoaded", function () {
    createGallery();
});

function createGallery() {
    const gallery = document.querySelector(".gallery-images");

    for (let i = 1; i <= 12; i++) {
        const img = document.createElement("IMG");
        img.src = `build/img/thumb/${i}.webp`;

        img.onclick = showImage;
        img.dataset.imageId = i;

        const liElement = document.createElement("LI");
        liElement.appendChild(img);

        gallery.appendChild(liElement);
    }
}

function showImage(e) {
    const imageID = e.target.dataset.imageId;

    const body = document.querySelector("body");
    body.classList.add("pinup-body");

    const overlay = document.createElement("DIV");
    overlay.classList.add("overlay");
    overlay.onclick = function () {
        overlay.remove();
        body.classList.remove("pinup-body");
    };

    const image = document.createElement("IMG");
    image.src = `build/img/grande/${imageID}.webp`;

    const closeButton = document.createElement("P");
    closeButton.textContent = "X";
    closeButton.onclick = function () {
        overlay.remove();
        body.classList.remove("pinup-body");
    };

    overlay.appendChild(image);
    overlay.appendChild(closeButton);

    body.appendChild(overlay);
}
