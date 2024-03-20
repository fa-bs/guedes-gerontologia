/* var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
} */

const accodions = document.querySelectorAll(".accordion");
accodions.forEach(acc => {
    acc.addEventListener("click", () => {
        acc.classList.toggle("active")
        const panel = acc.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})