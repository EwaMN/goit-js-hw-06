let counterValue = 0;

const buttonDec = document.querySelector(`button[data-action="decrement"]`);
const buttonInc = document.querySelector('button[data-action="increment"]');

const valueCount = document.querySelector("span#value");
valueCount.textContent = `${counterValue}`;
const clickDec = () => {
    valueCount.textContent = `${counterValue -= 1}`;
}
const clickInc = () => {
    valueCount.textContent = `${counterValue += 1}`;
}
buttonDec.addEventListener("click", clickDec);
buttonInc.addEventListener("click", clickInc);