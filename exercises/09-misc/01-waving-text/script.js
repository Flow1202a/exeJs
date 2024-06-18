/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const text = document.querySelector(".target");
    text.innerHTML = text.textContent.replace(/\s/g, "<span>$&</span>");

    const element = document.querySelectorAll("span")
    for (let i = 0; i < element.length; i++) {
        element[i].style.animationDelay = i*0.05 + 's';
    }
})();
