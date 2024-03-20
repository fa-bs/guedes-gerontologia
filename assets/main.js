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