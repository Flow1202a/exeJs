/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        var num = 2;
        var x = 0;
        var tabCarre = new Array(9);
        do{
            var carre = num * num;
            tabCarre[x] = carre;
            x++
            num+=2;
        }while (num < 21)

        var y = 0;
        while(y <= tabCarre.length ){
            alert(tabCarre[y])
            y++
        }
    });
})();

