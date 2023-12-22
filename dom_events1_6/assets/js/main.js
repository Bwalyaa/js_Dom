const selection = document.getElementById("select");
const output = document.querySelector(".output");

selection.addEventListener("change", () => {
    output.innerHTML = selection.value;
});