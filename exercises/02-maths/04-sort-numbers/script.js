/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        var tab = new Array(7);
        var x = 0;
        do {
            tab[x] = document.getElementById("numbers").value;
            x++
        }while(x < tab.length)

        var y = 0;
        while(y <= tab.length ){
            alert(tab[y])
            y++
        }


        alert(tab[0]);
    });
})();
