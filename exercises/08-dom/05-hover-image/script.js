
(() => {

    document.addEventListener("DOMContentLoaded", () => {
        const image = document.getElementById("hover-image");

        // Save the original src so we can restore it later
        const originalSrc = image.src;

        // Handle mouseover event
        image.addEventListener("mouseover", () => {
            image.src = image.getAttribute("data-hover");
        });

        // Handle mouseout event
        image.addEventListener("mouseout", () => {
            image.src = originalSrc;
        });
    });

})();
