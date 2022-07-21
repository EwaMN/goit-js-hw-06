const sliderSize = document.querySelector("#font-size-control");
const textColor = document.querySelector("#text");

const setFontSize = () => {
    let valueSlider = sliderSize.value + "px";
    textColor.style.fontSize = valueSlider;
};

sliderSize.addEventListener("input", setFontSize);