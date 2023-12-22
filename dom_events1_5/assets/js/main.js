const counter = document.getElementById("clickMe")
let Anzahl = 0
counter.addEventListener("click", () => {
    Anzahl +=1
    counter.innerHTML = "click me: " + Anzahl
})