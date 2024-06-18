/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        // Méthode sayHello qui retourne une chaîne de salutation
        sayHello() {
            return `Hello, ${this.firstname} ${this.lastname}!`;
        }
    }

    // Gestionnaire d'événement pour le clic sur le bouton
    document.getElementById("run").addEventListener("click", () => {
        // Créer une instance de la classe Person
        const person = new Person("John", "Doe");

        // Afficher la valeur de retour de la méthode sayHello dans la console
        alert(person.sayHello());
    });


})();
