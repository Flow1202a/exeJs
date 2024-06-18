/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
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

        // Getter pour la propriété name
        get name() {
            return `${this.firstname} ${this.lastname}`;
        }

        // Setter pour la propriété name
        set name(fullName) {
            const parts = fullName.split(' ');
            if (parts.length === 2) {
                this.firstname = parts[0];
                this.lastname = parts[1];
            } else {
                console.error('Nom complet invalide. Utilisez le format "Prénom Nom".');
            }
        }
    }

    // Gestionnaire d'événement pour le clic sur le bouton
    document.getElementById("run").addEventListener("click", () => {
        // Créer une instance de la classe Person
        const person = new Person("John", "Doe");

        // Afficher la valeur initiale de name dans la console
       alert(person.name);

        // Affecter une nouvelle valeur à name
        person.name = "Jane Smith";

        // Afficher l'état de l'instance après la mise à jour
        alert(person.name);
        alert(person);
    });
})();
