const rezult = document.querySelector('.rezult');

document.querySelector('.burger').addEventListener('click', (evt) => {
    evt.stopPropagation();
    if (rezult.style.cssText) {
        rezult.style.cssText = "";
        rezult.innerHTML = "Начальное состояние";
        evt.target.style="";
    }
    else {
        rezult.style.cssText = "background-color: red; color: white; border-color: red";
        rezult.innerHTML = "Область изменилась";
        evt.target.style="transform: rotateZ(90deg);";
    }
})