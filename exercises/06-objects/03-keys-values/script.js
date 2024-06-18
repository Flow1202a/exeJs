/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };

    document.getElementById("run").addEventListener("click", () => {
        // Afficher les clés de l'objet person
        const keys = Object.keys(person);
        console.log("Clés de l'objet person:", keys);

        // Afficher les valeurs de l'objet person
        const values = Object.values(person);
        console.log("Valeurs de l'objet person:", values);
    });
    // your code here
})();
