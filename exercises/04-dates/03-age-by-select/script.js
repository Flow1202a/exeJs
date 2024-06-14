/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", ()=> {

        var date = new Date();
        var anneeAjd;
        anneeAjd = date.getUTCFullYear();
        var moisAjd;
        moisAjd = date.getMonth()
        var jourAjd;
        jourAjd = date.getDay();

        var jourAge = document.getElementById("dob-day").value
        var moisAge = document.getElementById("dob-month").value
        var anneeAge = document.getElementById("dob-year").value

        var age = anneeAjd - anneeAge;
        if (moisAjd > moisAge && jourAjd > jourAge) {
            age++;
        }
        alert("vous avez " + age + "ans");
    });
})();
