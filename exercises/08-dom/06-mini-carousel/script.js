/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const gallery = [
            "../../_shared/img/bell.svg",
            "../../_shared/img/clock.svg",
            "../../_shared/img/compass.svg",
            "../../_shared/img/lemon.svg",
            "../../_shared/img/map.svg",
        ];

        let currentIndex = 0;

        document.getElementById("next").addEventListener("click", () => {
            const imageElement = document.getElementById("carousel-image");
            if (imageElement) {  // Vérifie si l'élément existe
                currentIndex = (currentIndex + 1) % gallery.length;
                imageElement.src = gallery[currentIndex];
            } else {
                console.error("L'élément image n'a pas été trouvé dans le DOM.");
            }
        });
    });
    // your code here
})();
