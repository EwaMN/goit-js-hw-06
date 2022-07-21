const repInput = document.querySelector("span#name-output");
const newInput = document.querySelector("input#name-input");


repInput.textContent = "Anonymous";
newInput.addEventListener("input", (event) => {
    if (! event.currentTarget.value)
        repInput.textContent = "Anonymous";
    else repInput.textContent = `${event.currentTarget.value}`;
})



