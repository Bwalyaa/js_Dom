const liste = document.querySelector("#myList")
let output = document.querySelector(".output")

let buttons = document.querySelector(".unten")

// buttons.addEventListener("click", () => {
//     output.innerHTML = 
// })

const buttonsToArray = Array.from(buttons.children)
console.log(buttonsToArray);

buttonsToArray[0].addEventListener("click", () => {
    output.innerHTML = liste.firstElementChild.innerHTML
})

buttonsToArray[2].addEventListener("click", () => {
    output.innerHTML = liste.lastElementChild.innerHTML
})

buttonsToArray[4].addEventListener("click", () => {
    output.innerHTML = liste.firstElementChild.nextElementSibling.innerHTML
})

buttonsToArray[6].addEventListener("click", () => {
    output.innerHTML = liste.lastElementChild.previousElementSibling.innerHTML
})