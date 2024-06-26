/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        switch (operation){
            case 'addition':
                        // perform an addition
                        var resultat1 = document.getElementById("op-one").value;
                        var resultat2 = document.getElementById("op-two").value;
                        var total = parseInt(resultat1) + parseInt(resultat2);
                        alert(total)
                break;
            case 'substraction':
                // perform an addition
                var resultat1 = document.getElementById("op-one").value;
                var resultat2 = document.getElementById("op-two").value;
                var total = parseInt(resultat1) - parseInt(resultat2);
                alert(total)
                break;
            case 'multiplication':
                // perform an addition
                var resultat1 = document.getElementById("op-one").value;
                var resultat2 = document.getElementById("op-two").value;
                var total = parseInt(resultat1) * parseInt(resultat2);
                alert(total)
                break;
            case 'division':
                // perform an addition
                var resultat1 = document.getElementById("op-one").value;
                var resultat2 = document.getElementById("op-two").value;
                var total = parseInt(resultat1) / parseInt(resultat2);
                alert(total)
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
