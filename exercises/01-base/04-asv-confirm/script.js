/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    do {
        var age = prompt("Quel est votre age ?");
        var sexe = prompt("quel est votre sexe ?");
        var ville = prompt("dans quelle ville habitez vous ?");

        var good = prompt("Vous avez " + age +"ans\n Vous habitez à " + ville + "\n votre sexe est " + sexe + "\n les infos sont elles bonne ?");
    }while(good != "oui")
})();
