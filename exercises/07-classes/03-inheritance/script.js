/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    // Définition de la classe Cat qui hérite de Animal
    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }

        static greeting = "Meow";
    }

    // Définition de la classe Dog qui hérite de Animal
    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }

        static greeting = "Woof";
    }

    // Gestionnaire d'événement pour le clic sur le bouton
    document.getElementById("run").addEventListener("click", () => {
        // Créer une instance de la classe Dog
        const dog = new Dog("Buddy");
        // Créer une instance de la classe Cat
        const cat = new Cat("Whiskers");

        // Afficher la valeur de retour de la méthode sayHello dans la console
        alert(dog.sayHello());
        alert(cat.sayHello());
    });
    // your code here
})();
