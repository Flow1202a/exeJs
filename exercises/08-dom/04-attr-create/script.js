/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.addEventListener("DOMContentLoaded", () => {
        // Récupérer l'élément avec l'ID "source"
        const sourceElement = document.getElementById("source");

        // Récupérer la valeur de l'attribut "data-image"
        const imageUrl = sourceElement.getAttribute("data-image");

        // Créer une nouvelle balise <img>
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;

        // Ajouter la balise <img> à la balise avec l'ID "target"
        const targetElement = document.getElementById("target");
        targetElement.appendChild(imgElement);

        // Supprimer la balise "source"
        sourceElement.remove();
    });
})();
